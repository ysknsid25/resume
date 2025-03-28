import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
import { TechArticleList, speakerDecks } from "./src/data/TechArticleData";
import { AllSpeakerDecks } from "./src/data/AllSpeakerDecks";
import {
    HatenaBookmarkData,
    ZeroBookmarkArticles,
} from "./src/data/HatenaBookmarkData";
import { HatenaBlogs } from "./src/data/HatenaBlogs";

type Article = {
    title: string;
    url: string;
    count: number;
};

const FILE_PATH = "./src/data/HatenaBookmarkData.ts";
const SPEAKER_DECKS_FILE_PATH = "./src/data/AllSpeakerDecks.ts";

console.log("#### Start make article data ####");
try {
    console.log("#### Lading Config... ####");
    const env = dotenv.config();
    console.log(env);
    console.log(env.parsed?.DISCORD_WEBHOOK_URL);

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
    const formattedResponses = okResponses.map((entry) => {
        return {
            title: articlesMap.get(entry[0]) || "",
            url: entry[0],
            count: entry[1] as number,
        };
    });
    const top5 = formattedResponses
        .filter((entry) => entry.count > 0)
        .slice(
            0,
            okResponses && okResponses.length > 5 ? 5 : okResponses.length
        );
    const zeroBookmarkArticles = formattedResponses.filter(
        (entry) => entry.count === 0
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let hatenaBookmarkData = HatenaBookmarkData;
    if (hatenaBookmarkData.find((data) => data.year === year)) {
        hatenaBookmarkData = HatenaBookmarkData.map((data) => {
            if (data.year === year) {
                return {
                    year: year,
                    sum: sum,
                    bookmarkRanking: top5,
                };
            }
            return data;
        });
    } else {
        hatenaBookmarkData.push({
            year: year,
            sum: sum,
            bookmarkRanking: top5,
        });
    }
    console.log("#### End make article data ####");

    console.log("#### Check New Added Bookmark ####");
    const notifyTargets: Article[] = [];
    formattedResponses.forEach((entry) => {
        const isTarget = ZeroBookmarkArticles.find(
            (data) => data.url === entry.url && entry.count > data.count
        );
        if (isTarget) {
            notifyTargets.push(entry);
        }
    });
    if (notifyTargets.length > 0) {
        console.log("#### has notify target ####");
        if (env.parsed?.DISCORD_WEBHOOK_URL) {
            let message =
                "<@745851369206054933>\n もしかするとはてブに入るかもしれないエントリがあるのだ\n";
            notifyTargets.forEach((target) => {
                message += `🔖 ${target.count}  [${target.title}](<${target.url}>)\n`;
            });
            const param = {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ content: message }),
            };
            fetch(env.parsed?.DISCORD_WEBHOOK_URL, param)
                .then((res) => {
                    console.log(`Send to Discord: ${res.ok}`);
                })
                .catch((e) => {
                    console.error(`Send to Discord Error: ${e}`);
                    console.error(e);
                });
        } else {
            console.error("DISCORD_WEBHOOK_URL is not set");
        }
    }
    console.log("#### Complete!! New Added Bookmark ####");

    const hatenaBookmarkJson = JSON.stringify(hatenaBookmarkData, null, 2);
    const zeroBookmarkArticlesJson = JSON.stringify(
        zeroBookmarkArticles,
        null,
        2
    );
    const jsonContent = `export const HatenaBookmarkData = ${hatenaBookmarkJson};\n\nexport const ZeroBookmarkArticles = ${zeroBookmarkArticlesJson};\n`;
    fs.writeFile(FILE_PATH, jsonContent, "utf8", (err) => {
        if (err) {
            throw err;
        }
        console.log("#### Print Succeeded!! ####");
    });

    console.log("#### Start make speaker deck data ####");
    const speakerDeckJson = JSON.stringify(
        [...speakerDecks, ...AllSpeakerDecks],
        null,
        2
    );
    fs.writeFile(
        SPEAKER_DECKS_FILE_PATH,
        `export const AllSpeakerDecks = ${speakerDeckJson}\n`,
        "utf8",
        (err) => {
            if (err) {
                throw err;
            }
            console.log("#### Print Succeeded!! ####");
        }
    );

    console.log("#### End make article data ####");
} catch (e) {
    console.error("#### Error occured!!! ####");
    console.error("Error", e);
}
