import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "🤖",
        title: "booby",
        year: "2023",
        img: "here",
        url: "https://github.com/ysknsid25/booby",
        content: "good first issueを用意してくれていて、なおかつstar数が100以上のリポジトリを対象に各言語のOSSプロジェクトを表示してくれます。",
    },
    {
        treeType: "✏️",
        title: "ゆめみ様とのコラボイベント『勉強法の勉強会』を企画・主催",
        year: "2023",
        img: "wai",
        url: "https://yumemi.connpass.com/event/281721/",
        content: "Twitterでのつぶやきから発展し、イベントを共同開催するにあたって企画・配信作業の主担当として関わりました。",
    },
    {
        treeType: "🤖",
        title: "GASとChatGPTを組み合わせてZennとQiitaの急上昇記事を紹介するTwitter bot",
        year: "2023",
        img: "muu",
        url: "https://zenn.dev/bs_kansai/articles/c79c6b84c536d1",
        content: "",
    },
    {
        treeType: "🎨",
        title: "ixy先生のHP作成",
        year: "2023",
        img: "work",
        url: "https://github.com/Ixy194194/ixy194194.github.io",
        content: "人気イラストレータ・ixy先生のHP作成プロジェクトに初期メンバーとして携わりました。CICD基盤の構築などを行いました。",
    },
    {
        treeType: "🤖",
        title: "おたくつーる",
        year: "2023",
        img: "atu",
        url: "https://github.com/ysknsid25/otaku-tool",
        content: "超A＆Gの番組情報をメール通知できるアプリです。",
    },
]

export const Works = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Works</h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    )
}