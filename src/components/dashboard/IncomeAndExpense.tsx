import { FinanceCard } from "@/components/dashboard/cards/FinanceCard";
import { withLoading } from "@/components/hoc/withLoading";
import { Finance } from "@/requests/financial_data/types";

type Props<T> = {
  income?: T;
  expense?: T;
};

function IncomeAndExpenseComponent({ income, expense }: Props<Finance>) {
  return (
    <section className="md:col-span-3 flex flex-col gap-6">
      {/* Income */}
      <FinanceCard title="Income" {...income} />
      {/* Expense */}
      <FinanceCard title="Expense" {...expense} />
    </section>
  );
}

export const IncomeAndExpense = withLoading(IncomeAndExpenseComponent, "card");
