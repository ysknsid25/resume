export const SideJob = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Side Job</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-4 mb-4">
                <div>
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-600">Webシステム開発</h2>
                    </div>
                    <div className="px-8 mt-4">
                        <ul className="list-disc text-sm font-normal text-gray-400">
                            <li>週1,2程度(平日夜間 + 土日どちらか)</li>
                            <li>PHP(Laravel) or React(Next.js)案件</li>
                            <li>単金 ¥5000~</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-600">興味・関心</h2>
                    </div>
                    <div className="px-8 mt-4">
                        <ul className="list-disc text-sm font-normal text-gray-400">
                            <li>CI/CDパイプラインの作成</li>
                            <li>インフラ面(クラウド)の構築(特にサーバーレスアーキテクチャの構築)</li>
                            <li>Laravelを使ったアプリケーション開発</li>
                            <li>React(Next.js)を使ったアプリケーション開発</li>
                            <li>Ktorを使ったアプリケーション開発</li>
                            <li>セキュリティタスクの遂行能力の向上</li>
                            <li>ドメイン駆動での新規プロジェクト開発</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-600">お食事のお誘い</h2>
                    </div>
                    <div className="px-8 mt-4">
                        <p className="text-sm font-normal text-gray-400">
                            いつでも待ってます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}