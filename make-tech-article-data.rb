require 'date'
require 'net/http'
require 'json'
require 'dotenv'
require 'fileutils'

BEGIN_YEAR = 2023
END_YEAR = 2024
BEGIN_MONTH = 4
FILE_PATH = './src/data/TechArticleData.ts'

def main
  puts '#### Begin make article data ####'

  puts '#### Loading Config... ####'
  Dotenv.load
  api_key = ENV['QIITA_API_KEY']
  puts "Qiita API Key: #{api_key}"

  begin
    puts '#### Fetch Zenn Info ####'
    original_zenn_data = get_zenn_articles
    zenn_data = get_zenn_data(original_zenn_data['articles'])
    zenn_article_list = get_zenn_article_list(original_zenn_data['articles'])
    puts zenn_article_list.length

    puts '#### Fetch Qiita Info ####'
    original_qiita_data = get_qiita_articles(api_key)
    qiita_data = get_qiita_data(original_qiita_data)
    qiita_article_list = get_qiita_article_list(original_qiita_data)
    puts qiita_article_list.length

    puts '#### Fetch GitHub Info ####'
    git_hub_data = get_git_hub_contributions
    git_hub_contributions = git_hub_data['contributions'].map do |contribution|
      {
        date: contribution['date'].gsub(/-/, '/'),
        contribution_count: contribution['contributionCount']
      }
    end
    puts git_hub_contributions.length

    # データをソートする
    puts '#### Make Sort And Paging Articles List ####'
    merged_and_sorted_article_list = (zenn_article_list + qiita_article_list).sort_by { |a| a[:year] }.reverse
    puts "Length is #{merged_and_sorted_article_list.length}"
    paging_articles = get_paging_articles(merged_and_sorted_article_list)
    puts "Page Size is #{paging_articles.length}"
    now_year = Time.now.year
    popular_articles = merged_and_sorted_article_list.select { |article| article[:year].include?(now_year.to_s) }
                                                     .sort_by { |a| -a[:like_count] }
    rank_emoji_array = ['🥇', '🥈', '🥉']
    sliced_popular_articles = popular_articles.length > 2 ? popular_articles.first(3) : popular_articles
    popular_articles_with_rank = sliced_popular_articles.each_with_index.map do |article, index|
      article.merge(treeType: rank_emoji_array[index])
    end

    puts '#### Make Chart Data ####'
    date = Time.now
    current_year = date.year
    current_month = date.month
    chart_data = {
      articlesCounts: [],
      yearFavoritesCounts: [],
      favoritesCounts: [],
      yearFavoritesCounts: []
    }

    (BEGIN_YEAR..END_YEAR).each do |year|
      year_article_count = { year: year.to_s, articles: 0 }
      year_favorites_count = { year: year.to_s, favorites: 0 }

      12.times do |month|
        next if year == BEGIN_YEAR && month + 1 < BEGIN_MONTH
        break if current_year == year && current_month < month + 1

        key = get_formatted_date(year, month + 1)
        articles_count = {
          yearMonth: key,
          zenn: zenn_data[key] ? zenn_data[key][:articles_count] : 0,
          qiita: qiita_data[key] ? qiita_data[key][:articles_count] : 0
        }
        chart_data[:articlesCounts] << articles_count
        year_article_count[:articles] += articles_count[:zenn] + articles_count[:qiita]

        favorites_count = {
          yearMonth: key,
          zenn: zenn_data[key] ? zenn_data[key][:like_count] : 0,
          qiita: qiita_data[key] ? qiita_data[key][:like_count] : 0
        }
        chart_data[:favoritesCounts] << favorites_count
        year_favorites_count[:favorites] += favorites_count[:zenn] + favorites_count[:qiita]
      end

      chart_data[:yearFavoritesCounts] << year_article_count
      chart_data[:yearFavoritesCounts] << year_favorites_count
    end

    puts chart_data

    puts '#### Print Data TS file ####'
    chart_data_json = JSON.pretty_generate(chart_data)
    article_list_json = JSON.pretty_generate(paging_articles)
    github_contributions_json = JSON.pretty_generate(git_hub_contributions)
    popular_articles_with_rank_json = JSON.pretty_generate(popular_articles_with_rank)

    json_content = <<~JSON
      export const TechArticleData = #{chart_data_json};
      export const TechArticleList = #{article_list_json};
      export const GitHubContributions = #{github_contributions_json};
      export const PopularArticles = #{popular_articles_with_rank_json};
    JSON

    File.write(FILE_PATH, json_content)
    puts '#### Print Succeeded!! ####'

    puts '#### End make article data ####'
  rescue => e
    puts '#### Error occurred!!! ####'
    puts "Error: #{e.message}"
  end
end

def get_zenn_articles
  url = URI('https://zenn.dev/api/articles?username=yskn_sid25&order=latest&count=500')
  response = Net::HTTP.get(url)
  JSON.parse(response)
rescue StandardError => e
  puts "Zenn Request failed: #{e.message}"
  raise e
end

def get_qiita_articles(api_key)
  url = URI('https://qiita.com/api/v2/items?per_page=100&query=user:ysknsid25')
  request = Net::HTTP::Get.new(url)
  request['Authorization'] = "Bearer #{api_key}"

  response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) { |http| http.request(request) }
  JSON.parse(response.body)
rescue StandardError => e
  puts "Qiita Request failed: #{e.message}"
  raise e
end

def get_git_hub_contributions
  current_date = Date.today
  before_3_months_date = current_date << 3
  current_date_iso = current_date.strftime('%Y-%m-%d')
  before_3_months_iso = before_3_months_date.strftime('%Y-%m-%d')

  url = URI("https://github-contributions-api.deno.dev/ysknsid25.json?flat=true&from=#{before_3_months_iso}&to=#{current_date_iso}")
  response = Net::HTTP.get(url)
  JSON.parse(response)
rescue StandardError => e
  puts "GitHub Request failed: #{e.message}"
  raise e
end

def get_zenn_data(articles)
  zenn_data = {}
  articles.each do |article|
    key = get_key(article['published_at'])
    if zenn_data[key]
      zenn_data[key][:articles_count] += 1
      zenn_data[key][:like_count] += article['liked_count']
    else
      zenn_data[key] = { articles_count: 1, like_count: article['liked_count'] }
    end
  end
  zenn_data
end

def get_qiita_data(articles)
  qiita_data = {}
  articles.each do |article|
    key = get_key(article['created_at'])
    if qiita_data[key]
      qiita_data[key][:articles_count] += 1
      qiita_data[key][:like_count] += article['likes_count']
    else
      qiita_data[key] = { articles_count: 1, like_count: article['likes_count'] }
    end
  end
  qiita_data
end

def get_zenn_article_list(articles)
  articles.map do |article|
    year, month, day = get_date(article['published_at'])
    formatted_full_date = get_formatted_full_date(year, month, day)
    {
      treeType: '🖋',
      img: 'zenn',
      year: formatted_full_date,
      title: article['title'],
      url: "https://zenn.dev#{article['path']}",
      content: "❤️ #{article['liked_count']}",
      like_count: article['liked_count']
    }
  end
end

def get_qiita_article_list(articles)
  articles.map do |article|
    year, month, day = get_date(article['created_at'])
    formatted_full_date = get_formatted_full_date(year, month, day)
    {
      treeType: '🖋',
      img: 'qiita',
      year: formatted_full_date,
      title: article['title'],
      url: article['url'],
      content: "❤️ #{article['likes_count']}",
      like_count: article['likes_count']
    }
  end
end

def get_date(publish_date_at)
  date = DateTime.parse(publish_date_at)
  year = date.year
  month = date.month
  day = date.day
  [year, month, day]
end

def get_key(publish_date_at)
  year, month, = get_date(publish_date_at)
  get_formatted_date(year, month)
end

def get_formatted_date(year, month)
  "#{year}/#{format('%02d', month)}"
end

def get_formatted_full_date(year, month, day)
  formatted_year_month = get_formatted_date(year, month)
  "#{formatted_year_month}/#{format('%02d', day)}"
end

def get_paging_articles(article_list)
  paging_articles = []
  per_page = 5
  page_count = (article_list.length / per_page.to_f).ceil
  page_count.times do |i|
    paging_articles << article_list.slice(i * per_page, per_page)
  end
  paging_articles
end

main
