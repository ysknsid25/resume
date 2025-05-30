import { Tree } from "./Tree/Tree";

const contents = [
    {
        treeType: "🏗",
        title: "株式会社ユアマイスター様での開発",
        year: "2025",
        img: "yourmister",
        url: "https://yourmystar.jp/",
        content: "Nuxt.js + Google Cloud",
    },
    {
        treeType: "🏗",
        title: "株式会社hitocolor様でe-ラーニングシステムの開発",
        year: "2024",
        img: "hitocolor",
        url: "https://www.hitocolor.co.jp/",
        content:
            "Next.js+LaravelでのWebアプリケーション開発を行なっていました。機能開発だけでなく既存テストコードのカバレッジ改善、DXや脆弱性など非機能面での改善のお手伝いもしていました。またNest.js×LangChainを利用したマイクロサービスの全体的な技術選定・構築・実装までも担当し、Google Cloud にBuildpack,CloudRunを利用してCI/CDパイプラインの構築も行いました。",
    },
];

export const SideJob = () => {
    const conditions = (isReceiving: boolean) => {
        return isReceiving ? (
            <div className="px-8 mt-4">
                <ul className="list-disc text-sm font-normal text-gray-600">
                    <li>月25時間程度。±5h程度の範囲の差は許容可能。</li>
                    <li>
                        Kotlin(ServerSide Kotlin) or TypeScript (React, Next.js,
                        NestJS, Hono) or Google
                        Cloudへのサーバーレスアプリケーション構築に関われること
                    </li>
                    <li>
                        本業の業務領域に関連しない事業内容であること(アニメ・漫画などに関する商業商品販売・同人誌販売に関係しない事業内容)
                    </li>
                    <li>単金 ¥6,000~7,500 (応相談)</li>
                    <li>フルリモート勤務</li>
                    <li>基本的に平日8:00~17:00にMTGが発生しないこと</li>
                    <li>
                        勤務時間が平日 17:00~19:00, 20:30~22:00, 土日祝。
                        1日1.5~2hの稼働を週4日ほど
                    </li>
                    <li>
                        職務経歴書は
                        <a
                            href="https://docs.google.com/document/d/1QB2hDo2Dbj3Hgrd5Nrd_dCilTDsuIdKnCgDEizwzMWo/edit?usp=sharing"
                            target="_blank"
                            className="text-sm font-normal underline"
                        >
                            こちら
                        </a>
                        から
                    </li>
                </ul>
            </div>
        ) : (
            <p className="text-sm font-normal text-gray-600">
                現在、新規の案件は募集しておりません。
            </p>
        );
    };
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-2">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Side Jobs
                </h1>
            </div>
            <div className="mb-4 text-center">
                <p className="text-sm font-normal text-gray-600">
                    <b>blessing software</b>
                    (ブレッシングソフトウェア)は兵庫県神戸市在住のソフトウェアエンジニアであるKanonの個人事業主としての屋号です。
                    <br />
                </p>
            </div>
            <Tree contents={contents}></Tree>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-4 mb-4">
                <div>
                    <div className="mb-4">
                        <h2 className="text-xl font-extrabold text-gray-600 mb-2">
                            条件
                        </h2>
                        {conditions(true)}
                    </div>
                    <div className="px-8 mt-4"></div>
                </div>
                <div>
                    <div className="mb-4">
                        <h2 className="text-xl font-extrabold text-gray-600 mb-2">
                            事業内容
                        </h2>
                    </div>
                    <div className="px-8 mt-4">
                        <ul className="list-disc text-sm font-normal text-gray-600">
                            <li>
                                Webシステム開発。特にKotlin(Ktor) or
                                TypeScript(Next.js, Nest.js, Hono)案件
                            </li>
                            <li>
                                ソフトウェアエンジニア同士の交流のためのコミュニティ運営
                            </li>
                            <li>
                                技術・キャリア・マネジメントなどソフトウェア開発全般に関する記事執筆
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-600">
                            苦手なこと
                        </h2>
                    </div>
                    <div className="px-8 mt-4">
                        <ul className="list-disc text-sm font-normal text-gray-600">
                            <li>マルチタスク</li>
                            <li>人にお願いすること、命令すること</li>
                            <li>ネットワーク関係の構築・チューニング</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
