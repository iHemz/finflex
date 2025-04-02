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
        <p className="text-gradient-start">{`${percentage}% Completed`}</p>
      </div>
      <div>
        <span className="text-3xl font-semibold text-white">{currentCost}</span>
        <span className="text-sm">{`/${targetCost}`}</span>
      </div>
    </section>
  );
}
