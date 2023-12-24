import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "📻",
        title: "水瀬いのりMelody Flag 公開録音",
        year: "2023",
        img: "wai",
        url: "",
        content: "初の公開録音にてお便りを採用してもらいました！",
    },
]

export const Otakatu = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">オタ活</h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    )
}