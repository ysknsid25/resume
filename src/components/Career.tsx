import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "🏢",
        title: "とらのあなラボ",
        year: "2023 - ",
        img: "",
        url: "",
        content: "入社直後はJava/Springで構築されている『とらのあな通販』の住所マスタを最新版へリプレース。\n継続的に最新化し、住所登録時に正確に住所を登録していただくためのカスタマイズをリリースしました。\n\nその後異動により、『サークルポータル』リプレース開発に従事。Next.js, Ktorを使った開発に日々奮闘中。\n採用面では株式会社ゆめみさんとコラボで『勉強法の勉強会』を新規立ち上げ。",
    },
    {
        treeType: "🏢",
        title: "エフアンドエムネット株式会社",
        year: "2021 - 2022",
        img: "",
        url: "",
        content: "M&Aにより前職から移籍。\n前職の自社サービスを継続的に開発。\n第32期社内MVPを受賞。\n\n加えて顧客管理システムの新規開発をプロジェクト立ち上げから経験。\n技術スタックとして、Laravel, AWS Fargate, Nginx,  Dockerを利用。",
    }
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