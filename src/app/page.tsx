"use client";

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BalanceCard } from "@/components/dashboard/cards/BalanceCard";
import { CreditCard } from "@/components/dashboard/cards/CreditCard";
import { FinanceCard } from "@/components/dashboard/cards/FinanceCard";
import { useFinanceQuery } from "@/hooks/financial_data/useFinanceQuery";

export default function HomePage() {
  const { data, isLoading, isError } = useFinanceQuery();

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Total Balance */}
      <BalanceCard loading={isLoading} {...data?.totalBalance} performance={data?.performance} />

      {/* Income and Expense */}
      <section className="md:col-span-3 flex flex-col gap-6">
        {/* Income */}
        <FinanceCard loading={isLoading} title="Income" {...data?.income} />
        {/* Expense */}
        <FinanceCard loading={isLoading} title="Expense" {...data?.expense} />
      </section>

      {/* Credit Card */}
      <CreditCard loading={isLoading} {...data?.credit} />

      {/* Chart Row */}
      <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Budget Section */}
        <div className="md:col-span-5 card">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-300">Budget</h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-2">Monthly</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data?.budget.monthly}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#ABABAB" }}
                  />
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
        </div>

        {/* Top Spending */}
        <div className="md:col-span-3 card">
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
                    data={data?.topSpending.categories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                  >
                    {data?.topSpending.categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-2">
              {data?.topSpending.categories.map((item) => (
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
        </div>

        {/* Transaction History */}
        <div className="md:col-span-4 card">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-300">Transaction history</h3>
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
            <div className="flex space-x-2 mb-4">
              <button className="bg-accent-yellow text-black text-xs font-medium rounded-full px-4 py-1">
                All
              </button>
              <button className="bg-transparent text-gray-400 text-xs font-medium rounded-full px-4 py-1">
                Income
              </button>
              <button className="bg-transparent text-gray-400 text-xs font-medium rounded-full px-4 py-1">
                Spending
              </button>
            </div>
            <div className="space-y-4">
              {data?.transactions.slice(0, 3).map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-3 object-cover overflow-hidden">
                      {/* <span className="text-lg">{transaction.logo}</span> */}
                      <img src={transaction.logo} alt="" className="object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-200">
                        {transaction.merchant}
                      </div>
                      <div className="text-xs text-gray-400">{`${transaction.date} ${transaction.time}`}</div>
                    </div>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      transaction.amount.startsWith("-") ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
