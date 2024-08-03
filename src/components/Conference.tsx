import { Tree } from "./Tree/Tree";

const contents = [
    {
        treeType: "🖋",
        title: "ログミーさんに記事掲載",
        year: "2024",
        img: "work",
        url: "https://logmi.jp/tech/articles/330790",
        content: "PHPカンファレンス小田原2024での発表内容を記事化・掲載",
    },
    {
        treeType: "🎤",
        title: "PHPカンファレンス福岡2024",
        year: "2024",
        img: "wai",
        url: "https://fortee.jp/phpcon-fukuoka-2024/proposal/a41337a4-002e-4306-915a-06ee424054d3",
        content:
            "WebサーバーとPHP実行方式を きちんと理解してPHPランタイムを 適切に使い分ける",
    },
    {
        treeType: "🎤",
        title: "PHPカンファレンス香川2024",
        year: "2024",
        img: "work",
        url: "https://fortee.jp/phpconkagawa-2024/proposal/d9f74b93-9991-4932-afaf-ada75c330094",
        content: "令和版ソフトウェアエンジニアの情報収集術",
    },
    {
        treeType: "🎤",
        title: "PHPカンファレンス小田原2024",
        year: "2024",
        img: "inscreen",
        url: "https://fortee.jp/phpconodawara-2024/proposal/4904f67e-2ded-43a3-8523-98a8c40b1db5",
        content:
            "『テスト品質を向上させよう！〜アンチパターン回避メソッド〜』というテーマで15分枠で登壇しました。",
    },
    {
        treeType: "🎤",
        title: "PHPカンファレンス関西2024",
        year: "2024",
        img: "wai",
        url: "https://fortee.jp/phpcon-kansai2024/proposal/8daa1c68-69b1-458a-9f3a-0c9a86e7843e",
        content:
            "『Mutation Testingとはなにか？』というテーマで15分枠で登壇しました。",
    },
    {
        treeType: "🎤",
        title: "Qiita Night～エンジニア×非エンジニアのコミュニケーション～",
        year: "2023",
        img: "spana",
        url: "https://increments.connpass.com/event/297115/",
        content:
            "Qiita Nightにゲスト登壇しました。『要件を理解するために、非エンジニアと一緒に業務をこなした話』という内容で発表を行いました。",
    },
    {
        treeType: "🎤",
        title: "若手エンジニアが語る技術への挑戦とキャリア戦略 CodeZine Night #2",
        year: "2023",
        img: "kiri",
        url: "https://codezine.connpass.com/event/285100/",
        content:
            "翔泳社・CodeZine編集部様主催のイベントにゲスト登壇しました。『自作Webサービスのソースコードを公開してみたら色んな刺激を受けた件』という内容で発表を行いました。",
    },
];

export const Conference = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Conference
                </h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    );
};
