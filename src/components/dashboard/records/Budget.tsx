import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BudgetMenu } from "@/components/dashboard/records/BudgetMenu";
import { withLoading } from "@/components/hoc/withLoading";
import { Budget as BudgetProps } from "@/requests/financial_data/types";

function BudgetComponent({ monthly: monthlyBudget = [] }: Partial<BudgetProps>) {
  return (
    <section className="md:col-span-8 lg:col-span-5 card">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-300">Budget</h3>
          <BudgetMenu />
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyBudget} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#ABABAB" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#ABABAB" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2A2A38",
                  border: "none",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "#fff" }}
              />
              <Bar dataKey="income" stackId="a" fill="#E6FF4D" radius={[4, 4, 0, 0]} />
              <Bar dataKey="spent" stackId="a" fill="#505050" radius={[0, 0, 0, 0]} />
              <Bar dataKey="savings" stackId="a" fill="#47E3C6" radius={[0, 0, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-around mt-2">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-accent-yellow mr-2"></div>
            <span className="text-xs text-gray-400">Income</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-gray-600 mr-2"></div>
            <span className="text-xs text-gray-400">Spent</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-accent-green mr-2"></div>
            <span className="text-xs text-gray-400">Savings</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Budget = withLoading(BudgetComponent, "card");
