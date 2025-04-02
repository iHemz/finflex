import { withLoading } from "@/components/hoc/withLoading";
import { Transactions } from "@/requests/financial_data/types";

function QuickTransferComponent({ transactions = [] }: { transactions?: Transactions }) {
  return (
    <section className="md:col-span-3 card p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-300">Quick Transfer</h3>
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

      <div className="flex">
        {transactions.slice(0, 3).map((transaction) => (
          <button
            key={transaction.id}
            className="w-20 h-20 rounded-full bg-gray-800 object-cover overflow-hidden"
          >
            <img src={transaction.logo} alt="" className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}

export const QuickTransfer = withLoading(QuickTransferComponent, "card");
