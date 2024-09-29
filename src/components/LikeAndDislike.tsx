export const LikeAndDislike = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-4 mb-4">
            <div>
                <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-600 mb-2">
                        好きなもの・ひと・こと
                    </h2>
                </div>
                <div className="px-8 mt-4">
                    <ul className="list-disc text-sm font-normal text-gray-400">
                        <li>水瀬いのりさん</li>
                        <li>早見沙織さん</li>
                        <li>野球(阪神・オリックス)</li>
                        <li>旅行</li>
                        <li>アニメ</li>
                        <li>ラーメン</li>
                        <li>ビール</li>
                        <li>じゃがいも</li>
                        <li>牛タン</li>
                        <li>焼き鳥(皮)</li>
                        <li>海辺でぼーっとする</li>
                        <li>散歩(静かな場所も街あるきも)</li>
                        <li>静かな空間</li>
                        <li>人が少ない空間</li>
                        <li>ひとりで過ごす時間(基本的に集団行動が嫌い)</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-600 mb-2">
                        マイルール・こだわり
                    </h2>
                </div>
                <div className="px-8 mt-4">
                    <ul className="list-disc text-sm font-normal text-gray-400">
                        <li>5人以上の飲み会には行かない</li>
                        <li>旅行の時以外は1日1食</li>
                        <li>
                            食事を楽しむ・特定の人と過ごす時間を楽しむ以外の飲み会のときはノンアルで過ごす
                        </li>
                        <li>自分が納得できてないことはしない</li>
                        <li>目的がはっきりしないまま行動しない</li>
                        <li>技術テーマ以外での勉強会登壇はしない</li>
                        <li>自己紹介に肩書き(所属・役職など)は載せない</li>
                        <li>他人と比較するのではなく、昨日の自分と比較する</li>
                        <li>21時以降に集中力のいる作業はしない</li>
                        <li>
                            自分の未来に責任を負ってくれない他人の声は聞きすぎない
                        </li>
                        <li>コンビニへは行かない</li>
                        <li>ひとりでカフェには行かない</li>
                        <li>人と同じことはしない</li>
                        <li>生活の優先度は睡眠＞運動＞仕事＞勉強＞食事</li>
                        <li>
                            生活リズムを崩さない。そのために次の日締め切りの仕事でなければ残業はしない。
                        </li>
                        <li>
                            時間を増やすもの・時間の質を上げるもの・どうしても必要なもの
                            以外は買わない
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
