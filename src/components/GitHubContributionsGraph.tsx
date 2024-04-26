import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { GitHubContributions } from '../data/TechArticleData';

export const GitHubContributionsGraph = () => {
  return (
      <div className="grid grid-cols-1 items-center justify-center gap-4">
          <div className="flex justify-center items-center gap-4">
              <h1 className="text-center text-3xl font-extrabold text-gray-600 underline">GitHub Contributions</h1>
          </div>
          <div className="flex justify-center items-center gap-4 mb-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={500}
                height={300}
                data={GitHubContributions}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="contributionCount" stackId="a" fill="#40c463" />
              </BarChart>
            </ResponsiveContainer>
          </div>
      </div>
  )
}