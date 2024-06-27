import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "🏗",
        title: "株式会社hitocolor様でe-ラーニングシステムの開発",
        year: "2024 - 現在",
        img: "hitocolor",
        url: "https://www.hitocolor.co.jp/",
        content: "Next.js+LaravelでのWebアプリケーション開発を行なっています。機能開発だけでなく既存テストコードのカバレッジ改善、DXや脆弱性など非機能面での改善のお手伝いもしています。またNest.js×LangChainを利用したマイクロサービスの全体的な技術選定・構築・実装までも担当しています。",
    },
]

export const SideJob = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-2">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">blessing software</h1>
            </div>
            <div className="mb-4 text-center">
                <p className="text-sm font-normal text-gray-400">
                    <b>blessing software</b>(ブレッシングソフトウェア)は兵庫県神戸市在住のソフトウェアエンジニアであるKanon(@samurai_se)の個人事業主としての屋号です。
                    <br />
                </p>
            </div>
            <Tree contents={contents}></Tree>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-4 mb-4">
            <div>
                    <div className="mb-4">
                        <h2 className="text-xl font-extrabold text-gray-600 mb-2">条件</h2>
                    </div>
                    <div className="px-8 mt-4">
                    <ul className="list-disc text-sm font-normal text-gray-400">
                            <li>週20時間程度</li>
                            <li>Kotlin(Ktor) or PHP(Laravel) or React(Next.js)案件</li>
                            <li>本業の業務領域に関連しない事業内容であること(アニメ・漫画などに関する商業商品販売・同人誌販売に関係しない事業内容)</li>
                            <li>単金 ¥7500~</li>
                            <li>フルリモート勤務</li>
                            <li>基本的に平日9:30~18:30にMTGが発生しないこと</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <h2 className="text-xl font-extrabold text-gray-600 mb-2">事業内容</h2>
                    </div>
                    <div className="px-8 mt-4">
                        <ul className="list-disc text-sm font-normal text-gray-400">
                            <li>Webシステム開発。特にPHP(Laravel) or Kotlin(Ktor) or React(Next.js)案件</li>
                            <li>ソフトウェアエンジニア同士の交流のためのコミュニティ運営</li>
                            <li>技術・キャリア・マネジメントなどソフトウェア開発全般に関する記事執筆</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-600">苦手なこと</h2>
                    </div>
                    <div className="px-8 mt-4">
                        <ul className="list-disc text-sm font-normal text-gray-400">
                            <li>マルチタスク</li>
                            <li>人にお願いすること、命令すること</li>
                            <li>ネットワーク関係の構築、チューニング</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}