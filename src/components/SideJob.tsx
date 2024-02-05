import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "🏗",
        title: "株式会社hitocolor様でe-ラーニングシステムの開発",
        year: "2024 - 現在",
        img: "hitocolor",
        url: "https://www.hitocolor.co.jp/",
        content: "Next.js+LaravelでのWebアプリケーション開発を行なっています。機能開発や既存テストコードのカバレッジ改善、非機能面での改善提案もしています。",
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
                    <br />
                    現在、週4時間程度でしたらお仕事をお受けできる状況です。週4時間以上の場合でも、条件によってはお手伝いできるかもしれませんので、XのDMなどからお声がけください。
                </p>
                {/*
                        <ul className="list-disc text-sm font-normal text-gray-400">
                            <li>週1,2程度(平日夜間 + 土日どちらか)</li>
                            <li>Kotlin(Ktor) or PHP(Laravel) or React(Next.js)案件</li>
                            <li>単金 ¥7000~</li>
                        </ul>
                    */
                }
            </div>
            <Tree contents={contents}></Tree>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-4 mb-4">
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
                        <h2 className="text-xl font-extrabold text-gray-600">お食事のお誘い</h2>
                    </div>
                    <div className="px-8 mt-4">
                        <p className="text-sm font-normal text-gray-400">
                            いつでも待ってます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}