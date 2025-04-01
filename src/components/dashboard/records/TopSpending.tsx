import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { withLoading } from "@/components/hoc/withLoading";
import { SpendingMax } from "@/requests/financial_data/types";

function TopSpendingComponent({ categories = [] }: Partial<SpendingMax>) {
  return (
    <section className="md:col-span-3 card">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-300">Top spending</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="relative h-48 flex items-center justify-center">
          <div className="text-3xl font-semibold absolute inset-0 flex items-center justify-center">
            $789
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                {categories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2 mt-2">
          {categories.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className="h-3 w-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-300">{item.name}</span>
              </div>
              <span className="text-sm text-gray-300">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const TopSpending = withLoading(TopSpendingComponent, "card");
