import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "🎤",
        title: "若手エンジニアが語る技術への挑戦とキャリア戦略 CodeZine Night #2",
        year: "2023",
        img: "kiri",
        url: "https://codezine.connpass.com/event/285100/",
        content: "翔泳社・CodeZine編集部様主催のイベントに登壇しました。『自作Webサービスのソースコードを公開してみたら色んな刺激を受けた件』という内容で発表を行いました。",
    },
]

export const Conference = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Conference</h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    )
}