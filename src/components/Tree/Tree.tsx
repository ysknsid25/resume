import treeImgMap from "./TreeImgMap"

type TreeContent = {
    treeType: string,
    title: string,
    year: string,
    img: string,
    content: string
}

interface TreeProps {
    contents: TreeContent[]
}
export const Tree = ({ contents }: TreeProps) => {
    return (
        <div>
            <ol className="relative border-l border-gray-200 ml-4">
                {contents.map((item, index) =>
                    <li key={index} className="mb-10 ml-6 relative">
                        <span className="flex absolute -left-11 justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-lg border-gray-200 border-2">
                            {item.treeType}
                        </span>
                        <div className="ml-2">
                            <div className="p-2 sm:p-4 rounded-lg border shadow-sm border-gray-200 text-gray-600">
                                <div className="justify-between mb-3 sm:flex items-baseline gap-2">
                                    <div className="text-sm font-normal flex justify-start underline">
                                        {item.title}
                                    </div>
                                    <div className="flex justify-end">
                                        <time className="mb-1 text-xs font-normal sm:order-last sm:mb-0 block  text-gray-400">
                                            {item.year}
                                        </time>
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-5 break-all">
                                    {item.img && <img className="object-contain h-24 w-24" src={treeImgMap.get(item.img)}></img>}
                                    <div className="flex-1 max-w-sm">
                                        <p className="text-xs text-start text-gray-400">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}