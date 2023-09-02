import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "🏢",
        title: "とらのあなラボ",
        year: "2023 - ",
        img: "tora",
        url: "https://yumenosora.co.jp/tora-lab",
        content: "入社直後はJava/Springで構築されている『とらのあな通販』の住所マスタを最新版へリプレース。その後異動により、『サークルポータル』リプレース開発に従事。Next.js, Ktorを使った開発に日々奮闘中。",
    },
    {
        treeType: "🏢",
        title: "エフアンドエムネット株式会社",
        year: "2021 - 2022",
        img: "fm",
        url: "https://www.fandmnet.com/",
        content: "M&Aにより前職から移籍。第32期社内MVPを受賞。前職からのサービスに加えて顧客管理システムの新規開発をプロジェクト立ち上げから経験。技術スタックとして、Laravel, AWS Fargate, Nginx,  Dockerを利用。",
    },
    {
        treeType: "🏢",
        title: "株式会社スタジオノモス",
        year: "2019 - 2021",
        img: "nomos",
        url: "",
        content: "ECサイトでの販売管理システムとアパレル企業向け生産管理システム開発のリーダーとして要件定義から運用保守まで開発の全サイクルを経験。技術スタックはPHP(5一部8/Laravel), JavaScript(一部Vue), Python, Docker, GCP, Apache, Linux, MySQLなどです。",
    },
    {
        treeType: "🏢",
        title: "株式会社スタジオノモス",
        year: "2018 - 2019",
        img: "nomos",
        url: "",
        content: "独自フレームワークで構築されていた専門学校のパッケージシステム改修を担当。客先常駐を1年ほどしていました。業務内容としては、常駐先の情シスの方と要件定義、設計、開発、テストまで。技術スタックは、Java(1.3), Oracle(PLSQL), SVN, Apache, Linuxでした。",
    },
    {
        treeType: "🏫",
        title: "国立 大阪教育大学 教育学部",
        year: "2014 - 2018",
        img: "muu",
        url: "",
        content: "まさかの教師にならないという…",
    },
    {
        treeType: "🏫",
        title: "兵庫県立 星陵高等学校 普通科",
        year: "2011 - 2014",
        img: "engel",
        url: "",
        content: "同窓生に西尾維新先生がいるそうな。",
    },
    {
        treeType: "👶",
        title: "爆誕",
        year: "1995/12/25",
        img: "wai",
        url: "",
        content: "",
    },
]

export const Career = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Career</h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    )
}