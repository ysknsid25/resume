import fetch from "node-fetch";
import fs from "fs";
import { TechArticleList, speakerDecks } from "./src/data/TechArticleData";
import { HatenaBlogs } from "./src/data/HatenaBlogs";

const FILE_PATH = "./src/data/AllHatenaBookmarkData.ts";

console.log("#### Start make article data ####");
try {
    const filteredTechArticles = TechArticleList.flat().map((article) => {
        return {
            title: article.title,
            url: article.url,
        };
    });
    const publicationTechArticles = TechArticleList.flat()
        .filter((article) => article.img === "zenn")
        .map((article) => {
            return {
                title: article.title,
                url: article.url.replace("yskn_sid25", "bs_kansai"),
            };
        });
    const articles = [
        ...filteredTechArticles,
        ...speakerDecks,
        ...publicationTechArticles,
        ...HatenaBlogs.map((blog) => {
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
    const formattedResponses = okResponses.map((entry) => {
        return {
            title: articlesMap.get(entry[0]) || "",
            url: entry[0],
            count: entry[1] as number,
        };
    });
    const nonZeroBookmarkArticles = formattedResponses.filter(
        (entry) => entry.count > 0
    );
    // 同じtitleのデータがnonZeroBookmarkArticlesに存在する場合は重複するデータを間引く
    const titleSet = new Set<string>();
    const uniqueNonZeroBookmarkArticles = nonZeroBookmarkArticles.filter(
        (entry) => {
            if (titleSet.has(entry.title)) {
                return false;
            }
            titleSet.add(entry.title);
            return true;
        }
    );
    console.log("#### End make article data ####");

    const uniqueNonZeroBookmarkArticlesJson = JSON.stringify(
        uniqueNonZeroBookmarkArticles,
        null,
        2
    );
    const totalBookmark = uniqueNonZeroBookmarkArticles.reduce(
        (acc, cur) => acc + cur.count,
        0
    );
    const jsonContent = `export const TotalHatenaBookmarkCount = ${totalBookmark};\n\nexport const AllHatenaBookmarkData = ${uniqueNonZeroBookmarkArticlesJson};\n`;
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
