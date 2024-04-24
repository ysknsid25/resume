import fetch from 'node-fetch';
import dotenv from 'dotenv';
import fs from 'fs';

const BEGIN_YEAR = 2023
const END_YEAR = 2024
const FILE_PATH = './src/data/TechArticleData.ts';

//TODO: 取得するのは2年分
const main = async () => {
  console.log('#### Begin make article data ####');

  console.log('#### Lading Config... ####');
  dotenv.config()
  console.log(process.env.QIITA_API_KEY)

  try {
    console.log('#### Fetch Zenn Info####');
    const originalZennData = await getZennArticles()
    const zennData = getZennData(originalZennData.articles)
    console.log(zennData);
  
    console.log('#### Fetch Qiita Info####');
    const originalQiitaData = await getQiitaArticles()
    const qiitaData = getQiitaData(originalQiitaData)
    console.log(qiitaData);
  
    console.log('#### Make Chart Data ####');
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const chartData = {
      articlesCounts: [],
      yearArticleCounts: [],
      favoritesCounts: [],
      yearFavoritesCounts: [],
    }
    for (let year = BEGIN_YEAR; year <= END_YEAR; year++) {
      const yearArticleCount = {
        year: year.toString(),
        articles: 0,
      }
      const yearFavoritesCount = {
        year: year.toString(),
        favorites: 0,
      }
      for (let month = 0; month < 12; month++) {
        //未来になったら抜ける
        if(currentYear===year && currentMonth < month+1){
          break;
        }
        const key = getFormattedDate(year, month + 1)
        const articlesCount = {
          yearMonth: key,
          zenn: zennData[key] ? zennData[key].articlesCount : 0,
          qiita: qiitaData[key] ? qiitaData[key].articlesCount : 0,
        }
        chartData.articlesCounts.push(articlesCount)
        yearArticleCount.articles += articlesCount.zenn + articlesCount.qiita
  
        const favoritesCount = {
          yearMonth: key,
          zenn: zennData[key] ? zennData[key].likeCount : 0,
          qiita: qiitaData[key] ? qiitaData[key].likeCount : 0,
          qiita_stock: qiitaData[key] ? qiitaData[key].stocksCount : 0,
        }
        chartData.favoritesCounts.push(favoritesCount)
        yearFavoritesCount.favorites += favoritesCount.zenn + favoritesCount.qiita + favoritesCount.qiita_stock
      }
      chartData.yearArticleCounts.push(yearArticleCount)
      chartData.yearFavoritesCounts.push(yearFavoritesCount)
    }
    console.log(chartData);

    console.log('#### Print Data TS file ####');
    const chartDataJson = JSON.stringify(chartData, null, 2);
    const jsonContent = `export const TechArticleData = ${chartDataJson};`
    fs.writeFile(FILE_PATH, jsonContent, 'utf8', (err) => {
      if (err) {
        throw err;
      }
      console.log('#### Print Succeeded!! ####');
    });

    console.log('#### End make article data ####');

  }catch(e) {
    console.error('#### Error occured!!! ####');
    console.error('Error', e);
    return;
  }
}

const getZennArticles = async () => {
  const url = 'https://zenn.dev/api/articles?username=yskn_sid25&order=latest&count=500'
  return await fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[0])
    return data;
  })
  .catch(error => {
    console.error('Zenn Request failed', error);
    throw error;
  });
}

const getQiitaArticles = async () => {
  const url = 'https://qiita.com/api/v2/items?per_page=100&query=user:ysknsid25'
  return await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.QIITA_API_KEY}`,
    },
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data[0])
    return data;
  })
  .catch(error => {
    console.error('Qiita Request failed', error);
    throw error;
  });
}

const getZennData = (articles) => {
  const zennData = {}
  articles.map(article => {
    const key = getKey(article.published_at)
    if (zennData[key]) {
      zennData[key].articlesCount += 1
      zennData[key].likeCount += article.liked_count
    } else {
      zennData[key] = {
        articlesCount: 1,
        likeCount: article.liked_count
      }
    }
  })
  return zennData;
}

const getQiitaData = (articles) => {
  const qiitaData = {}
  articles.map(article => {
    const key = getKey(article.created_at)
    if (qiitaData[key]) {
      qiitaData[key].articlesCount += 1
      qiitaData[key].likeCount += article.likes_count
      qiitaData[key].stocksCount += article.stocks_count
    } else {
      qiitaData[key] = {
        articlesCount: 1,
        likeCount: article.likes_count,
        stocksCount: article.stocks_count
      }
    }
  })
  return qiitaData;
}

const getKey = (publishDateAt) => {
  const date = new Date(publishDateAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return getFormattedDate(year, month);
} 

const getFormattedDate = (year, month) => {
  return year + "/" + (month < 10 ? '0' : '') + month;
}

await main();