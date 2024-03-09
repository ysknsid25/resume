import { Tree } from "./Tree/Tree"

const contents = [
    {
        treeType: "🎤",
        title: "PHPカンファレンス香川2024",
        year: "2024",
        img: "cantsee",
        url: "",
        content: "Coming soon...",
    },
    {
        treeType: "🎤",
        title: "PHPカンファレンス小田原2024",
        year: "2024",
        img: "cantsee",
        url: "",
        content: "Coming soon...",
    },
    {
        treeType: "🎤",
        title: "PHPカンファレンス関西2024",
        year: "2024",
        img: "wai",
        url: "https://speakerdeck.com/ysknsid25/phpkanhuarensuguan-xi-2024",
        content: "『Mutation Testingとはなにか？』というテーマで15分枠で登壇しました。",
    },
    {
        treeType: "🎤",
        title: "Qiita Night～エンジニア×非エンジニアのコミュニケーション～",
        year: "2023",
        img: "spana",
        url: "https://increments.connpass.com/event/297115/",
        content: "Qiita Nightにゲスト登壇しました。『要件を理解するために、非エンジニアと一緒に業務をこなした話』という内容で発表を行いました。",
    },
    {
        treeType: "🎤",
        title: "若手エンジニアが語る技術への挑戦とキャリア戦略 CodeZine Night #2",
        year: "2023",
        img: "kiri",
        url: "https://codezine.connpass.com/event/285100/",
        content: "翔泳社・CodeZine編集部様主催のイベントにゲスト登壇しました。『自作Webサービスのソースコードを公開してみたら色んな刺激を受けた件』という内容で発表を行いました。",
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