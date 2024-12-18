import fetch from "node-fetch";
import fs from "fs";
import {
    TechArticleList,
    noteArticles,
    speakerDecks,
} from "./src/data/TechArticleData";
import { HatenaBookmarkData } from "./src/data/HatenaBookmarkData";
import { HatenaBlogs } from "./src/data/HatenaBlogs";

const FILE_PATH = "./src/data/HatenaBookmarkData.ts";

console.log("#### Start make article data ####");
try {
    const year = new Date().getFullYear().toString();
    const filteredTechArticles = TechArticleList.flat()
        .filter((article) => {
            const date = new Date(article.year);
            const today = new Date();
            return date.getFullYear() === today.getFullYear();
        })
        .map((article) => {
            return {
                title: article.title,
                url: article.url,
            };
        });
    const publicationTechArticles = TechArticleList.flat()
        .filter((article) => {
            const date = new Date(article.year);
            const today = new Date();
            return (
                date.getFullYear() === today.getFullYear() &&
                article.img === "zenn"
            );
        })
        .map((article) => {
            return {
                title: article.title,
                url: article.url.replace("yskn_sid25", "bs_kansai"),
            };
        });
    const articles = [
        ...filteredTechArticles,
        ...noteArticles,
        ...speakerDecks,
        ...publicationTechArticles,
        ...HatenaBlogs.filter((blog) => blog.year === year).map((blog) => {
            return {
                title: blog.title,
                url: blog.url,
            };
        }),
    ];
    const articlesMap = new Map<string, string>();
    articles.forEach((article) => {
        articlesMap.set(article.url, article.title);
    });
    const chankArticleUrls = [];
    for (let i = 0; i < articles.length; i += 50) {
        chankArticleUrls.push(
            articles
                .slice(i, i + 50)
                .map((article) => article.url)
                .join("&url=")
        );
    }
    const promises = chankArticleUrls.map(async (urls) => {
        const url = `https://bookmark.hatenaapis.com/count/entries?url=${urls}`;
        return fetch(url).then(async (res) => {
            if (res.ok) {
                const data = (await res.json()) as [string, number][]; // res.json() の完了を待つ
                const entries = Object.entries(data);
                return entries; // 返されたオブジェクトを [キー, 値] のペアに変換
            }
            throw new Error(res.statusText);
        });
    });
    const results = await Promise.all(promises);
    const okResponses = results.flat().sort((a, b) => {
        return b[1] - a[1];
    });
    console.log(okResponses);
    const sum = okResponses.reduce((acc, cur) => acc + cur[1], 0) || 0;
    const top10 = okResponses
        .slice(
            0,
            okResponses && okResponses.length > 5 ? 5 : okResponses.length
        )
        .map((entry) => {
            return {
                title: articlesMap.get(entry[0]) || "",
                url: entry[0],
                count: entry[1] as number,
            };
        });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let hatenaBookmarkData = HatenaBookmarkData;
    if (hatenaBookmarkData.find((data) => data.year === year)) {
        hatenaBookmarkData = HatenaBookmarkData.map((data) => {
            if (data.year === year) {
                return {
                    year: year,
                    sum: sum,
                    bookmarkRanking: top10,
                };
            }
            return data;
        });
    } else {
        hatenaBookmarkData.push({
            year: year,
            sum: sum,
            bookmarkRanking: top10,
        });
    }

    const hatenaBookmarkJson = JSON.stringify(hatenaBookmarkData, null, 2);
    const jsonContent = `export const HatenaBookmarkData = ${hatenaBookmarkJson};`;
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
}
