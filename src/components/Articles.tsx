import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "📕",
        title: "はんずおんVitest",
        year: "2023",
        img: "zenn",
        url: "https://zenn.dev/yskn_sid25/books/hands_on_vitest",
        content: "Vitestの入門内容をはんずおんで学べる本です。",
    },
    {
        treeType: "📕",
        title: "アジャイル勉強法",
        year: "2023",
        img: "zenn",
        url: "https://zenn.dev/yskn_sid25/books/agile_study_book",
        content: "開発手法として有名なアジャイルを勉強法に活用したものです。",
    }
]

export const Articles = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Articles</h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    )
}