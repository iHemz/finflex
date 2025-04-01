import { withLoading } from "@/components/hoc/withLoading";
import { Transactions } from "@/requests/financial_data/types";

function TransactionHistoryComponent({ transactions = [] }: { transactions?: Transactions }) {
  return (
    <section className="md:col-span-4 card">
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
          {transactions.slice(0, 3).map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-3 object-cover overflow-hidden">
                  {/* <span className="text-lg">{transaction.logo}</span> */}
                  <img src={transaction.logo} alt="" className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200">{transaction.merchant}</div>
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
    </section>
  );
}

export const TransactionHistory = withLoading(TransactionHistoryComponent, "card");
