import { Tree } from "./Tree/Tree";

const contents = [
    {
        treeType: "🏢",
        title: "虎の穴ラボ",
        year: "2023 -",
        img: "tora",
        url: "https://yumenosora.co.jp/tora-lab",
        content:
            "入社直後はJava/Springで構築されている『とらのあな通販』の機能開発。その後異動により、『サークルポータル』リプレース開発に従事。Next.js, Ktorを使った開発に日々奮闘中。",
    },
    {
        treeType: "🏢",
        title: "エフアンドエムネット株式会社",
        year: "",
        img: "fm",
        url: "https://www.fandmnet.com/",
        content:
            "M&Aにより前職から移籍。第32期社内MVPを受賞。前職からのサービスに加えて顧客管理システムの新規開発をプロジェクト立ち上げからテックリードとして経験。技術スタックとして、Laravel, AWS Fargate, Nginx,  Dockerを利用。",
    },
    {
        treeType: "🏢",
        title: "株式会社スタジオノモス",
        year: "",
        img: "nomos",
        url: "",
        content:
            "ECサイトでの販売管理システムとアパレル企業向け生産管理システム開発のリーダーとして要件定義から運用保守まで開発の全サイクルを経験。技術スタックはPHP(5一部8/Laravel), JavaScript(一部Vue), Python, Docker, GCP, Apache, Linux, MySQLなどです。",
    },
    {
        treeType: "🏢",
        title: "株式会社スタジオノモス",
        year: "",
        img: "nomos",
        url: "",
        content:
            "独自フレームワークで構築されていた専門学校のパッケージシステム改修を担当。客先常駐を1年ほどしていました。業務内容としては、常駐先の情シスの方と要件定義、設計、開発、テストまで。技術スタックは、Java(1.3), Oracle(PLSQL), SVN, Apache, Linuxでした。",
    },
    {
        treeType: "🏫",
        title: "国立 大阪教育大学 教育学部",
        year: "",
        img: "muu",
        url: "",
        content:
            "図書館司書の資格も取りました。けど、まさかの教師にならないという…",
    },
    {
        treeType: "🏫",
        title: "兵庫県立 星陵高等学校 普通科",
        year: "",
        img: "engel",
        url: "",
        content: "同窓生に西尾維新先生がいるそうな。",
    },
];

export const Career = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Career
                </h1>
            </div>
            <Tree contents={contents}></Tree>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-4 mb-4">
                <div>
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-600">
                            現在のキャリア方針
                        </h2>
                    </div>
                    <div className="px-8 mt-4">
                        <ul className="list-disc text-sm font-normal text-gray-600">
                            <li>
                                アニメ、マンガ、ラノベといったオタク文化の発展に少しでも貢献する
                            </li>
                            <li>
                                DX改善・脆弱性・ランタイム構築などの非機能要件領域でこなせる仕事を増やす
                            </li>
                            <li>
                                SIDE
                                FIREを視野に入れているため、週休日数を調整しやすい環境で働く
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-600">
                            興味・関心
                        </h2>
                    </div>
                    <div className="px-8 mt-4">
                        <ul className="list-disc text-sm font-normal text-gray-600">
                            <li>Reactを使ったアプリケーション開発</li>
                            <li>Ktorを使ったアプリケーション開発</li>
                            <li>TypeScriptを使ったアプリケーション開発</li>
                            <li>GCPを使ったアプリケーション構築</li>
                            <li>セキュリティタスクの遂行能力の向上</li>
                            <li>CI/CDパイプラインの作成</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-600">
                            転職意思
                        </h2>
                    </div>
                    <div className="px-8 mt-4">
                        <p className="text-sm font-normal text-gray-600">
                            現在転職意思はありませんが、テックリードやマネージャーといった役割ありきでのお誘いもしくは週休日数を調整できる環境であれば、お話しだけでもさせていただけますと嬉しいです。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
