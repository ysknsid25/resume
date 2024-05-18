import { Tree } from "./Tree/Tree"

const contents = [
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