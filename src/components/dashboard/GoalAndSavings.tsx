import { GoalCard } from "@/components/dashboard/cards/GoalCard";
import { SavingsCard } from "@/components/dashboard/cards/SavingsCard";
import { withLoading } from "@/components/hoc/withLoading";
import { Goal, Savings } from "@/requests/financial_data/types";

type Props = {
  goal?: Goal;
  savings?: Savings;
};

function GoalAndSavingsComponent({ goal, savings }: Props) {
  return (
    <section className="md:col-span-8 grid grid-cols-1 sm:grid-cols-8 gap-6">
      <GoalCard {...goal} />
      <SavingsCard {...savings} />
    </section>
  );
}

export const GoalAndSavings = withLoading(GoalAndSavingsComponent, "card");
