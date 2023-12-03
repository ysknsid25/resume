import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "🤝",
        title: "ゆめみ様・はてな様・Chatwork様とのコラボイベント『社内勉強会のノウハウ、公開しちゃいますLT会』を企画・主催",
        year: "2023",
        img: "kiri",
        url: "https://yumenosora.connpass.com/event/300021/",
        content: "麻雀友達と前々職の同窓会繋がりから発展し、イベントを共同開催するにあたって企画・配信作業の主担当として関わりました。",
    },
    {
        treeType: "🤝",
        title: "ゆめみ様とのコラボイベント『勉強法の勉強会』を企画・主催",
        year: "2023",
        img: "wai",
        url: "https://yumemi.connpass.com/event/281721/",
        content: "Twitterでのつぶやきから発展し、イベントを共同開催するにあたって企画・配信作業の主担当として関わりました。",
    },
]

export const DevRel = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Works</h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    )
}