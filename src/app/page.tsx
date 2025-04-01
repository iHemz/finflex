"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Area,
  AreaChart,
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
import Header from "@/components/layout/Header";
import { useFinanceQuery } from "@/hooks/financial_data/useFinanceQuery";

const performanceData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
];

const budgetData = [
  { name: "Jun", income: 5000, spent: 3500, savings: 1500 },
  { name: "Jul", income: 5200, spent: 3800, savings: 1400 },
  { name: "Aug", income: 4800, spent: 3200, savings: 1600 },
  { name: "Sep", income: 5500, spent: 3900, savings: 1600 },
  { name: "Oct", income: 5800, spent: 4200, savings: 1600 },
];

const spendingData = [
  { name: "Auto & Transport", value: 400, percentage: 40, color: "#4DE1FF" },
  { name: "Food", value: 250, percentage: 25, color: "#E6FF4D" },
  { name: "Clothes", value: 200, percentage: 20, color: "#47E3C6" },
  { name: "Other", value: 150, percentage: 15, color: "#ABABAB" },
];

const transactionHistory = [
  {
    id: 1,
    name: "Paypal",
    date: "8 Aug • 11:55 AM",
    amount: -12.89,
    icon: "💸",
  },
  { id: 2, name: "Apple", date: "8 Aug • 10:03 AM", amount: -13.9, icon: "🍎" },
  {
    id: 3,
    name: "Adobe Creative Cloud",
    date: "7 Aug • 19:15 PM",
    amount: -26.99,
    icon: "🎨",
  },
  {
    id: 4,
    name: "Walmart",
    date: "7 Aug • 18:23 PM",
    amount: -368.54,
    icon: "🛒",
  },
  {
    id: 5,
    name: "Chase",
    date: "7 Aug • 16:47 PM",
    amount: 5287.0,
    icon: "🏦",
  },
];

export default function HomePage() {
  const { data, isLoading, isError } = useFinanceQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white text-xl">Loading financial data...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-red-400 text-xl">Error loading financial data</div>
      </div>
    );
  }

  // Formatted data for components
  const formattedBalance = new Intl.NumberFormat("en-US").format(data.totalBalance.amount);
  const formattedChangeAmount = new Intl.NumberFormat("en-US").format(
    data.totalBalance.changeAmount
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Total Balance */}
          <div className="md:col-span-5 card bg-gradient-card relative">
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Total Balance</h3>
                <span className="text-black/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-6xl font-bold mb-2">
                ${formattedBalance}
                <span className="text-2xl font-normal opacity-70">.00</span>
              </div>
              <div className="flex items-center bg-black/20 rounded-full px-3 py-1 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">{data.totalBalance.change}%</span>
                <span className="text-sm ml-2 font-medium">+${formattedChangeAmount}</span>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-24 opacity-30">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="rgba(0,0,0,0.5)"
                      fill="rgba(0,0,0,0.2)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Income and Expense */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <div className="card">
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-300">Income</h3>
                  <span className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-2xl font-semibold text-white">
                  ${data.income.amount.toFixed(2)}
                </div>
                <div className="flex items-center bg-green-900/30 text-green-400 rounded-full px-3 py-1 w-fit mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs">{data.income.change}%</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-300">Expense</h3>
                  <span className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-2xl font-semibold text-white">
                  ${data.expense.amount.toFixed(2)}
                </div>
                <div className="flex items-center bg-green-900/30 text-green-400 rounded-full px-3 py-1 w-fit mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs">{data.expense.change}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Card */}
          <div className="md:col-span-4 credit-card relative">
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold">
                  ${data.credit.amount.toFixed(0)}
                  <span className="text-lg font-normal opacity-70">.00</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-accent-yellow flex items-center justify-center text-black">
                  <PlusIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-auto">
                <div className="text-lg">{data.credit.cardNumber}</div>
                <div className="flex justify-between items-center">
                  <div className="text-sm opacity-70">{data.credit.expiryDate}</div>
                  <div className="text-2xl font-bold">VISA</div>
                </div>
              </div>
            </div>
          </div>

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
                    <BarChart data={budgetData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                        data={spendingData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                      >
                        {spendingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-2">
                  {spendingData.map((item) => (
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
                  {transactionHistory.slice(0, 3).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                          <span className="text-lg">{transaction.icon}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-200">
                            {transaction.name}
                          </div>
                          <div className="text-xs text-gray-400">{transaction.date}</div>
                        </div>
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          transaction.amount < 0 ? "text-red-400" : "text-green-400"
                        }`}
                      >
                        {transaction.amount < 0 ? "" : "+"}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
