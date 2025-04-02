import { IntraLink } from "@/components/ui/IntraLink";
import { Goal } from "@/requests/financial_data/types";

export function GoalCard({ percentage = 0, current = 0, target = 0 }: Partial<Goal>) {
  const currentCost = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    current
  );
  const targetCost = `$${target / 1000}k`;

  return (
    <section className="card sm:col-span-5 w-full p-4 bg-gradient-to-r from-gradient-start/20 from-50% to-gray-800 to-50% flex flex-col gap-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-300">My Goal</h3>
          <IntraLink />
        </div>
        <p className="text-gradient-start">{`${percentage}% Completed`}</p>
      </div>
      <div>
        <span className="text-3xl font-semibold text-white">{currentCost}</span>
        <span className="text-sm">{`/${targetCost}`}</span>
      </div>
    </section>
  );
}
