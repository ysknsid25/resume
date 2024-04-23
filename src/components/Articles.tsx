import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TechArticleData } from '../data/TechArticleData';

export const Articles = () => {
  return (
      <div className="grid grid-cols-1 items-center justify-center gap-4">
          <div className="flex justify-center items-center gap-4">
              <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Article Posts</h1>
          </div>
          <div className="text-center">
              <p className="text-sm font-normal text-gray-400">
                  直近2年分を表示しています。
              </p>
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
                <Bar dataKey="zenn" stackId="a" fill="#3EA8FF" />
                <Bar dataKey="qiita" stackId="a" fill="#55C500" />
                <Bar dataKey="hatena" stackId="a" fill="#676969" />
              </BarChart>
              </ResponsiveContainer>
          </div>
          <div className="flex justify-center items-center gap-4 mb-4">
              <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">Favorites to Article</h1>
          </div>
          <div className="text-center">
              <p className="text-sm font-normal text-gray-400">
                  同じく直近2年分を表示しています。
              </p>
          </div>
          <div className="flex justify-center items-center gap-4 mb-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
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
                <Line type="monotone" dataKey="zenn" stroke="#3EA8FF" strokeWidth={2} />
                <Line type="monotone" dataKey="qiita" stroke="#55C500" strokeWidth={2} />
                <Line type="monotone" dataKey="qiita_stock" stroke="#676969" strokeWidth={2} />
                <Line type="monotone" dataKey="hatena_bookmark" stroke="#5279E7" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
      </div>
  )
}