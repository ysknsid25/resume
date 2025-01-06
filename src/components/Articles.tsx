import { Tree } from "./Tree/Tree";
import { TechArticleList } from "../data/TechArticleData";
import { useState } from "react";

const BEGIN_PAGE = 0;
const END_PAGE = TechArticleList.length - 1;

export const Articles = () => {
    const [nowPage, setNowPage] = useState(0);
    const onClickPrevPage = () => {
        if (nowPage > BEGIN_PAGE) {
            setNowPage(nowPage - 1);
            scrollTo(0, 0);
        }
    };
    const onClickNextPage = () => {
        if (nowPage < END_PAGE) {
            setNowPage(nowPage + 1);
            scrollTo(0, 0);
        }
    };
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Articles
                </h1>
            </div>
            <Tree contents={TechArticleList[nowPage]}></Tree>
            <div className="flex justify-center items-center gap-4 mb-4">
                {BEGIN_PAGE !== nowPage && (
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-md"
                        onClick={onClickPrevPage}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                    </button>
                )}
                <span>
                    {nowPage + 1} / {END_PAGE + 1}
                </span>
                {END_PAGE !== nowPage && (
                    <button
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-md"
                        onClick={onClickNextPage}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};
