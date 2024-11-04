import { Tree } from "./Tree/Tree";
import { PopularArticles } from "../data/TechArticleData";

export const PopularArticle = () => {
    const nowYear = new Date().getFullYear();
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Popular Tech Articles in {nowYear}
                </h1>
            </div>
            {PopularArticles.length > 0 ? (
                <Tree contents={PopularArticles}></Tree>
            ) : (
                <div className="mb-4 text-center">
                    <p className="text-sm font-normal text-gray-400">
                        まだ記事はありません。
                    </p>
                </div>
            )}
        </div>
    );
};
