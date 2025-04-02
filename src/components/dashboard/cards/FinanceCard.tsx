import { IntraLink } from "@/components/ui/IntraLink";
import { Finance } from "@/requests/financial_data/types";

interface FinanceCardProps extends Partial<Finance> {
  title: string;
}

export function FinanceCard({ amount = 0, change = 0, title }: FinanceCardProps) {
  return (
    <section className="card">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-300">{title}</h3>
          <IntraLink />
        </div>
        <div className="text-2xl font-semibold text-white">${amount.toFixed(2)}</div>
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
          <span className="text-xs">{change}%</span>
        </div>
      </div>
    </section>
  );
}
