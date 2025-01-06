import {
    TotalHatenaBookmarkCount,
    AllHatenaBookmarkData,
} from "../data/AllHatenaBookmarkData";

const beginYear = "2023/04";
const nowYear =
    new Date().getFullYear().toString() +
    "/" +
    (new Date().getMonth() + 1).toString().padStart(2, "0");

export const HatenaBookmarks = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    All Hatena Bookmark Data
                </h1>
            </div>
            <div className="flex justify-center items-center gap-4 mb-4">
                <p className="text-gray-600">
                    {beginYear} 〜 {nowYear} total bookmark count is 🔖
                    <b>{TotalHatenaBookmarkCount}</b>
                </p>
            </div>
            <div>
                <ol className="relative border-l border-gray-200 ml-4">
                    {AllHatenaBookmarkData.map((item, index) => (
                        <li key={index} className="mb-10 ml-6 relative">
                            <span className="flex absolute -left-11 justify-center items-center w-10 h-10 rounded-full bg-gray-100 text-lg border-gray-200 border-2">
                                {index === 0 && "🥇"}
                                {index === 1 && "🥈"}
                                {index === 2 && "🥉"}
                                {2 < index && index < 5 && "🏅"}
                                {4 < index && "🔖"}
                            </span>
                            <div className="ml-2">
                                <div className="p-2 sm:p-4 rounded-lg border shadow-sm border-gray-200 text-gray-600">
                                    <div className="justify-between mb-3 sm:flex items-baseline gap-2">
                                        <div className="text-sm font-normal flex justify-start underline">
                                            {item.url ? (
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.title}
                                                </a>
                                            ) : (
                                                item.title
                                            )}
                                        </div>
                                        <div className="flex justify-end">
                                            <time className="mb-1 text-xs font-normal sm:order-last sm:mb-0 block  text-gray-400">
                                                🔖 {item.count}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};
