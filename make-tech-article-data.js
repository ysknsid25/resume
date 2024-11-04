import fetch from "node-fetch";
import dotenv from "dotenv";
import fs from "fs";
import xml2js from "xml2js";

const BEGIN_YEAR = 2023;
const END_YEAR = 2024;
const BEGIN_MONTH = 4;
const FILE_PATH = "./src/data/TechArticleData.ts";

//TODO: 取得するのは2年分
const main = async () => {
    console.log("#### Begin make article data ####");

    console.log("#### Lading Config... ####");
    const env = dotenv.config();
    console.log(env);
    console.log(env.parsed.QIITA_API_KEY);

    try {
        console.log("#### Fetch Zenn Info####");
        const originalZennData = await getZennArticles();
        const zennData = getZennData(originalZennData.articles);
        const zennArticleList = getZennArticleList(originalZennData.articles);
        console.log(zennArticleList.length);

        console.log("#### Fetch Qiita Info####");
        const originalQiitaData = await getQiitaArticles(env);
        const qiitaData = getQiitaData(originalQiitaData);
        const qiitaArticleList = getQiitaArticleList(originalQiitaData);
        console.log(qiitaArticleList.length);

        console.log("#### Fetch note Info####");
        const noteData = await getNoteArticles();
        console.log(noteData.length);

        console.log("#### Fetch SpeakerDeck Info####");
        const decks = await getSpeakerDecks();
        console.log(decks.length);

        console.log("#### Fetch GitHub Info####");
        const gitHubData = await getGitHubControbutions();
        const gitHubContributions = gitHubData.contributions.map(
            (contribution) => {
                return {
                    date: contribution.date.replace(/-/g, "/"),
                    contributionCount: contribution.contributionCount,
                };
            }
        );
        console.log(gitHubContributions.length);

        // データをソートする
        console.log("#### Make Sort And Paging Articles List ####");
        const maegedAndSortedArticleList = [
            ...zennArticleList,
            ...qiitaArticleList,
        ].sort(comparePublishDate);
        console.log(`Length is ${maegedAndSortedArticleList.length}`);
        const pagingArticles = getPagingArticles(maegedAndSortedArticleList);
        console.log(`Page Size is ${pagingArticles.length}`);
        const nowYear = new Date().getFullYear();
        const popularArticles = zennArticleList
            .filter((article) => article.year.includes(nowYear))
            .sort(function (a, b) {
                return b.likeCount - a.likeCount;
            });
        const rankEmojiArray = ["🥇", "🥈", "🥉"];
        const slicedPopularArticles =
            popularArticles.length > 2
                ? popularArticles.slice(0, 3)
                : popularArticles;
        const popularArticlesWithRank = slicedPopularArticles.map(
            (article, index) => {
                return {
                    ...article,
                    treeType: rankEmojiArray[index],
                };
            }
        );

        console.log("#### Make Chart Data ####");
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth() + 1;
        const chartData = {
            articlesCounts: [],
            yearArticleCounts: [],
            favoritesCounts: [],
            yearFavoritesCounts: [],
        };
        for (let year = BEGIN_YEAR; year <= END_YEAR; year++) {
            const yearArticleCount = {
                year: year.toString(),
                articles: 0,
            };
            const yearFavoritesCount = {
                year: year.toString(),
                favorites: 0,
            };
            for (let month = 0; month < 12; month++) {
                //! 記事投稿を始めた時期より前はスキップ
                if (year === BEGIN_YEAR && month + 1 < BEGIN_MONTH) {
                    continue;
                }
                //! 未来になったら抜ける
                if (currentYear === year && currentMonth < month + 1) {
                    break;
                }
                const key = getFormattedDate(year, month + 1);
                const articlesCount = {
                    yearMonth: key,
                    zenn: zennData[key] ? zennData[key].articlesCount : 0,
                    qiita: qiitaData[key] ? qiitaData[key].articlesCount : 0,
                };
                chartData.articlesCounts.push(articlesCount);
                yearArticleCount.articles +=
                    articlesCount.zenn + articlesCount.qiita;

                const favoritesCount = {
                    yearMonth: key,
                    zenn: zennData[key] ? zennData[key].likeCount : 0,
                    qiita: qiitaData[key] ? qiitaData[key].likeCount : 0,
                };
                chartData.favoritesCounts.push(favoritesCount);
                yearFavoritesCount.favorites +=
                    favoritesCount.zenn + favoritesCount.qiita;
            }
            chartData.yearArticleCounts.push(yearArticleCount);
            chartData.yearFavoritesCounts.push(yearFavoritesCount);
        }
        console.log(chartData);

        console.log("#### Print Data TS file ####");
        const chartDataJson = JSON.stringify(chartData, null, 2);
        const articleListJson = JSON.stringify(pagingArticles, null, 2);
        const githubContributionsJson = JSON.stringify(
            gitHubContributions,
            null,
            2
        );
        const popularArticlesWithRankJson = JSON.stringify(
            popularArticlesWithRank,
            null,
            2
        );
        const noteArticlesJson = JSON.stringify(noteData, null, 2);
        const speakerDecksJson = JSON.stringify(decks, null, 2);
        const jsonContent = `export const TechArticleData = ${chartDataJson};\nexport const TechArticleList = ${articleListJson};\nexport const GitHubContributions = ${githubContributionsJson};\nexport const PopularArticles = ${popularArticlesWithRankJson};\nexport const noteArticles = ${noteArticlesJson};\nexport const speakerDecks = ${speakerDecksJson};`;
        fs.writeFile(FILE_PATH, jsonContent, "utf8", (err) => {
            if (err) {
                throw err;
            }
            console.log("#### Print Succeeded!! ####");
        });

        console.log("#### End make article data ####");
    } catch (e) {
        console.error("#### Error occured!!! ####");
        console.error("Error", e);
        return;
    }
};

const getZennArticles = async () => {
    const url =
        "https://zenn.dev/api/articles?username=yskn_sid25&order=latest&count=500";
    console.log("#### Zenn Data Fetching ####");
    return await fetch(url)
        .then((response) => {
            console.log("#### Zenn Data Responsed ####");
            return response.json();
        })
        .then((data) => {
            console.log("#### Zenn Data Fetched ####");
            return data;
        })
        .catch((error) => {
            console.error("Zenn Request failed", error);
            throw error;
        });
};

const getQiitaArticles = async (env) => {
    const url =
        "https://qiita.com/api/v2/items?per_page=100&query=user:ysknsid25";
    return await fetch(url, {
        headers: {
            Authorization: `Bearer ${env.parsed.QIITA_API_KEY}`,
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //console.log(data[0])
            return data;
        })
        .catch((error) => {
            console.error("Qiita Request failed", error);
            throw error;
        });
};

const getNoteArticles = async () => {
    let page = 1;
    let articles = [];
    while (true) {
        console.log(`fetch note page:${page}`);
        const url = `https://note.com/api/v2/creators/samurai_se/contents?kind=note&page=${page}`;
        const response = await fetch(url);
        const json = await response.json();
        const filteredData = json.data.contents.filter((content) => {
            const { year } = getDate(content.publishAt);
            const newDate = new Date();
            return !content.isPinned && year === newDate.getFullYear();
        });
        if (filteredData.length === 0) {
            break;
        }
        articles = articles.concat(filteredData);
        page++;
    }
    return articles.map((article) => {
        return {
            title: article.name,
            url: article.noteUrl,
        };
    });
};

const getSpeakerDecks = async () => {
    const url = "https://speakerdeck.com/ysknsid25.rss";
    // HTTPリクエストでRSSデータを取得
    const response = await fetch(url);
    const xmlData = await response.text();
    const parser = new xml2js.Parser();
    let returnData = [];
    parser.parseString(xmlData, (err, result) => {
        if (err) {
            console.error("XMLの解析に失敗しました:", err);
            return;
        }
        const filteredData = result.rss.channel[0].item
            .filter((data) => {
                const { year } = getDate(data.pubDate[0]);
                console.log(year);
                const today = new Date();
                return year === today.getFullYear();
            })
            .map((data) => {
                return {
                    title: data.title[0],
                    url: data.link[0],
                };
            });
        console.log(filteredData);
        returnData = filteredData;
    });
    return returnData;
};

const getGitHubControbutions = async () => {
    // 現在の日付を取得
    const currentDate = new Date();
    const before3date = new Date();
    // 3ヶ月前の日付を取得
    before3date.setMonth(before3date.getMonth() - 3);
    const currentDateISO = currentDate.toISOString().slice(0, 10);
    const before3MonthISO = before3date.toISOString().slice(0, 10);
    console.log(currentDateISO);
    console.log(before3MonthISO);

    const url = `https://github-contributions-api.deno.dev/ysknsid25.json?flat=true&from=${before3MonthISO}&to=${currentDateISO}`;
    return await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("GitHub Request failed", error);
            throw error;
        });
};

const getZennData = (articles) => {
    const zennData = {};
    articles.map((article) => {
        const key = getKey(article.published_at);
        if (zennData[key]) {
            zennData[key].articlesCount += 1;
            zennData[key].likeCount += article.liked_count;
        } else {
            zennData[key] = {
                articlesCount: 1,
                likeCount: article.liked_count,
            };
        }
    });
    return zennData;
};

const getQiitaData = (articles) => {
    const qiitaData = {};
    articles.map((article) => {
        const key = getKey(article.created_at);
        if (qiitaData[key]) {
            qiitaData[key].articlesCount += 1;
            qiitaData[key].likeCount += article.likes_count;
        } else {
            qiitaData[key] = {
                articlesCount: 1,
                likeCount: article.likes_count,
            };
        }
    });
    return qiitaData;
};

const getZennArticleList = (articles) => {
    return articles.map((article) => {
        const { year, month, day } = getDate(article.published_at);
        const formattedFullDate = getFormattedFullDate(year, month, day);
        return {
            treeType: "🖋",
            img: "zenn",
            year: formattedFullDate,
            title: article.title,
            url: `https://zenn.dev${article.path}`,
            content: `❤️ ${article.liked_count}`,
            likeCount: article.liked_count,
        };
    });
};

const getQiitaArticleList = (articles) => {
    return articles.map((article) => {
        const { year, month, day } = getDate(article.created_at);
        const formattedFullDate = getFormattedFullDate(year, month, day);
        return {
            treeType: "🖋",
            img: "qiita",
            year: formattedFullDate,
            title: article.title,
            url: article.url,
            content: `❤️ ${article.likes_count}`,
            likeCount: article.likes_count,
        };
    });
};

const getDate = (publishDateAt) => {
    const date = new Date(publishDateAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return { year, month, day };
};

const getKey = (publishDateAt) => {
    const { year, month } = getDate(publishDateAt);
    return getFormattedDate(year, month);
};

const getFormattedDate = (year, month) => {
    return year + "/" + (month < 10 ? "0" : "") + month;
};

const getFormattedFullDate = (year, month, day) => {
    const formattedYearMonth = getFormattedDate(year, month);
    return formattedYearMonth + "/" + (day < 10 ? "0" : "") + day;
};

const comparePublishDate = (a, b) => {
    const dateA = new Date(a.year);
    const dateB = new Date(b.year);
    return dateB - dateA;
};

const compareLikeCount = (a, b) => {
    const likeA = new Date(a.year);
    const likeB = new Date(b.year);
    return likeB - likeA;
};

const getPagingArticles = (articleList) => {
    const pagingArticles = [];
    const perPage = 5;
    const pageCount = Math.ceil(articleList.length / perPage);
    for (let i = 0; i < pageCount; i++) {
        pagingArticles.push(articleList.slice(i * perPage, (i + 1) * perPage));
    }
    return pagingArticles;
};

await main();
