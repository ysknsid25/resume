import { Tree } from "./Tree/Tree"

const contents = [
    // {
    //     treeType: "⚡️",
    //     title: "",
    //     year: "2024",
    //     img: "",
    //     url: "",
    //     content: "Serverless Meetup Osaka #02",
    // },
    // {
    //     treeType: "⚡️",
    //     title: "",
    //     year: "2024",
    //     img: "",
    //     url: "",
    //     content: "kansai.ts #7",
    // },
    // {
    //     treeType: "⚡️",
    //     title: "",
    //     year: "2024",
    //     img: "",
    //     url: "",
    //     content: "Kobe Engineer SakeBash #3 with HACK.BAR",
    // },
    {
        treeType: "⚡️",
        title: "eslint-plugin-securityを導入して、 低労力で堅牢なコードを作る",
        year: "2024",
        img: "spana",
        url: "https://speakerdeck.com/ysknsid25/eslint-plugin-securitywodao-ru-site-di-lao-li-dejian-lao-nakodowozuo-ru",
        content: "nakanoshima.dev #37 セキュリティLT大会　～そもそもみんな何をしてる？～",
    },
    {
        treeType: "⚡️",
        title: "ChatGPT Visionで色々実験したまとめ",
        year: "2024",
        img: "spana",
        url: "https://speakerdeck.com/ysknsid25/chatgpt-visiondese-shi-yan-sitamatome-kobe-engineer-sakebash-number-3-with-hack-dot-bar",
        content: "Kobe Engineer SakeBash #3 with HACK.BAR",
    },
    {
        treeType: "⚡️",
        title: "Nest.jsを使ってみたら とても開発体験がよかった話",
        year: "2024",
        img: "wai",
        url: "https://speakerdeck.com/ysknsid25/nest-dot-jswoshi-tutemitara-totemokai-fa-ti-yan-gayokatutahua-guan-xi-nodexue-yuan-11shi-xian-mu",
        content: "関西Node学園 11時限目",
    },
    {
        treeType: "⚡️",
        title: "Google I/O 2024で発表された Firebase App HostingでNext.jsのSSRを試す",
        year: "2024",
        img: "work",
        url: "https://speakerdeck.com/ysknsid25/o-2024defa-biao-sareta-firebase-app-hostingdenext-dot-jsnossrwoshi-su",
        content: "Google I/O Extended 2024",
    },
    {
        treeType: "⚡️",
        title: "Flutter on the Webでアプリを作り、 React/Next.jsの違いを体感する",
        year: "2024",
        img: "work",
        url: "https://speakerdeck.com/ysknsid25/next-dot-jsnowei-iwoti-gan-suru-flutterkaigi-mini-osaka-number-1-with-mix-leap-study-number-75",
        content: "FlutterKaigi mini Osaka #1 with Mix Leap Study #75",
    },
    {
        treeType: "⚡️",
        title: "ReactにSWRがあるとき🤣 ないとき😭",
        year: "2024",
        img: "wai",
        url: "https://speakerdeck.com/ysknsid25/nazeaws-s3dehanaku-cloudflare-r2woxuan-buno-cloudflare-meet-up-osaka-number-4",
        content: "クラスメソッドのReact事情大公開スペシャル#3",
    },
    {
        treeType: "⚡️",
        title: "技術書典16 (こ10) で 『はんずおんExposed』を頒布します！",
        year: "2024",
        img: "buy",
        url: "https://speakerdeck.com/ysknsid25/nazeaws-s3dehanaku-cloudflare-r2woxuan-buno-cloudflare-meet-up-osaka-number-4",
        content: "技術同人誌を紹介LT会",
    },
    {
        treeType: "⚡️",
        title: "なぜAWS S3ではなく Cloudflare R2を選ぶの？",
        year: "2024",
        img: "pointed",
        url: "https://speakerdeck.com/ysknsid25/nazeaws-s3dehanaku-cloudflare-r2woxuan-buno-cloudflare-meet-up-osaka-number-4",
        content: "Cloudflare Meet-up Osaka #4",
    },
    {
        treeType: "⚡️",
        title: "技術書典15 に初出展する本のご紹介",
        year: "2023",
        img: "here",
        url: "https://speakerdeck.com/ysknsid25/ji-shu-shu-dian-15-nichu-chu-zhan-suruben-nogoshao-jie",
        content: "YUMEMI.grow / 技術同人誌を紹介LT会",
    },
    {
        treeType: "⚡️",
        title: "Laravel Sail9から導入されたMailhogの後継Fake SMTP/mailpitを使ってみた",
        year: "2023",
        img: "paperplane",
        url: "https://speakerdeck.com/toranoana/mailpitwoshi-tutemita-552a7249-bba2-43b8-8260-48f3e591f937",
        content: "とらのあなラボ / 最新技術共有会",
    },
    {
        treeType: "⚡️",
        title: "Storageを使うとなにがいいの？",
        year: "2023",
        img: "work",
        url: "https://speakerdeck.com/toranoana/storagewoshi-utonanigaiino",
        content: "ラクス / PHPerのための「Laravel10の新機能」を語り合う PHP TechCafe",
    },
    {
        treeType: "⚡️",
        title: "なぜ人は組織から去っていくのか？",
        year: "2023",
        img: "guruguru",
        url: "https://speakerdeck.com/toranoana/ji-xiang-si-dot-pm32-nazeren-hazu-zhi-karaqu-tuteikunoka",
        content: "吉祥寺.pm #32",
    },
    {
        treeType: "⚡️",
        title: "GASとChatGPTを組み合わせて ZennとQiitaの急上昇記事を 紹介するTwitter botを作った",
        year: "2023",
        img: "inscreen",
        url: "https://speakerdeck.com/toranoana/gastochatgptwozu-mihe-wasete-zenntoqiitanoji-shang-sheng-ji-shi-wo-shao-jie-surutwitter-botwozuo-tuta",
        content: "とらのあなラボ / アウトプットLT会",
    },
    {
        treeType: "⚡️",
        title: "Cloud Functionsで超A&Gの番組情報を通知するアプリを作った",
        year: "2023",
        img: "kiri",
        url: "https://speakerdeck.com/ysknsid25/20230412-zui-jin-nokai-fa-bao-gao-lthui",
        content: "blessing software/最近の開発報告LT会",
    },
]

export const LT = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">LT</h1>
            </div>
            <Tree contents={contents}></Tree>
        </div>
    )
}