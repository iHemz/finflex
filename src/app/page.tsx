"use client";

import { BalanceCard } from "@/components/dashboard/cards/BalanceCard";
import { CreditCard } from "@/components/dashboard/cards/CreditCard";
import { IncomeAndExpense } from "@/components/dashboard/IncomeAndExpense";
import { Budget } from "@/components/dashboard/records/Budget";
import { TopSpending } from "@/components/dashboard/records/TopSpending";
import { TransactionHistory } from "@/components/dashboard/records/TransactionHistory";
import { useFinanceQuery } from "@/hooks/financial_data/useFinanceQuery";

export default function HomePage() {
  const { data, isLoading, isError } = useFinanceQuery();

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Total Balance */}
      <BalanceCard loading={isLoading} {...data?.totalBalance} performance={data?.performance} />

      {/* Income and Expense */}
      <IncomeAndExpense loading={isLoading} income={data?.income} expense={data?.expense} />

      {/* Credit Card */}
      <CreditCard loading={isLoading} {...data?.credit} />

      {/* Chart Row */}
      <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Budget Section */}
        <Budget loading={isLoading} {...data?.budget} />

        {/* Top Spending */}
        <TopSpending loading={isLoading} {...data?.topSpending} />

        {/* Transaction History */}
        <TransactionHistory loading={isLoading} transactions={data?.transactions} />
      </div>
    </main>
  );
}
