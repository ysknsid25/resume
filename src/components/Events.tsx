import { Tree } from "./Tree/Tree";

const contents = [
    {
        treeType: "🤝",
        title: 'PHP"オレ"カンファレンス神戸 を企画・主催',
        year: "2024",
        img: "ehhen",
        url: "https://note.com/samurai_se/n/n3ad4fd22a003",
        content:
            "神戸のソフトウェアエンジニアにハレノヒの場を提供するべく立ち上げ",
    },
    {
        treeType: "🤝",
        title: "神戸での勉強会コミュニティ・Kobe.tsを立ち上げ",
        year: "2024",
        img: "ehhen",
        url: "https://kobets.connpass.com/",
        content:
            "神戸のソフトウェアエンジニアに勉強会の場を提供するべく立ち上げ",
    },
    {
        treeType: "🤝",
        title: "『技術同人誌を紹介LT会』を企画・主催",
        year: "2024",
        img: "buy",
        url: "https://yumenosora.connpass.com/event/316554/",
        content:
            "PHPカンファレンス小田原の懇親会繋がりから発展し、イベントを共同開催するにあたって企画・配信作業の主担当として関わりました。",
    },
    {
        treeType: "🤝",
        title: "Cake.jp様・Cybozu様とのコラボイベント『社内勉強会のノウハウ、公開しちゃいますLT会』を企画・主催",
        year: "2024",
        img: "inscreen",
        url: "https://yumenosora.connpass.com/event/314082/",
        content:
            "PHPカンファレンス関西の懇親会から発展し、イベントを共同開催するにあたって企画・配信作業の主担当として関わりました。",
    },
    {
        treeType: "🤝",
        title: "ゆめみ様・はてな様・Chatwork様とのコラボイベント『社内勉強会のノウハウ、公開しちゃいますLT会』を企画・主催",
        year: "2023",
        img: "kiri",
        url: "https://yumenosora.connpass.com/event/300021/",
        content:
            "麻雀友達と前々職の同窓会繋がりから発展し、イベントを共同開催するにあたって企画・配信作業の主担当として関わりました。",
    },
    {
        treeType: "🤝",
        title: "ゆめみ様とのコラボイベント『勉強法の勉強会』を企画・主催",
        year: "2023",
        img: "wai",
        url: "https://yumemi.connpass.com/event/281721/",
        content:
            "Twitterでのつぶやきから発展し、イベントを共同開催するにあたって企画・配信作業の主担当として関わりました。",
    },
];

export const Events = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    DevRel
                </h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    );
};
