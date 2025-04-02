import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { withLoading } from "@/components/hoc/withLoading";
import { IntraLink } from "@/components/ui/IntraLink";
import { SpendingMax } from "@/requests/financial_data/types";

function TopSpendingComponent({ categories = [] }: Partial<SpendingMax>) {
  return (
    <section className="md:col-span-4 lg:col-span-3 card">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-300">Top spending</h3>
          <IntraLink />
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
