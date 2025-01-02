import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import { TechArticleData } from "../data/TechArticleData";

export const TechArticlesGraph = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Article Posts
                </h1>
            </div>
            <div className="flex justify-center items-center gap-4 mb-4">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={TechArticleData.yearArticleCounts}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="articles" stackId="a" fill="#FBBC05" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center items-center gap-4 mb-12">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={TechArticleData.articlesCounts}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="yearMonth" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="note" stackId="a" fill="#228D74" />
                        <Bar dataKey="zenn" stackId="a" fill="#3EA8FF" />
                        <Bar dataKey="qiita" stackId="a" fill="#55C500" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center items-center gap-4 mb-4">
                <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">
                    Favorites to Article
                </h1>
            </div>
            <div className="flex justify-center items-center gap-4 mb-4">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={TechArticleData.yearFavoritesCounts}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="favorites" stackId="a" fill="#FE2C55" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center items-center gap-4 mb-4">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={TechArticleData.favoritesCounts}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="yearMonth" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="note" stackId="a" fill="#228D74" />
                        <Bar dataKey="zenn" stackId="a" fill="#3EA8FF" />
                        <Bar dataKey="qiita" stackId="a" fill="#55C500" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
