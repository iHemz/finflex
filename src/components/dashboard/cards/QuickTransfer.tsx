import { withLoading } from "@/components/hoc/withLoading";
import { IntraLink } from "@/components/ui/IntraLink";
import { Transactions } from "@/requests/financial_data/types";

function QuickTransferComponent({ transactions = [] }: { transactions?: Transactions }) {
  return (
    <section className="md:col-span-4 card p-4 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-300">Quick Transfer</h3>
        <IntraLink />
      </div>

      <div className="flex">
        {transactions.slice(0, 3).map((transaction) => (
          <button
            key={transaction.id}
            className="cursor-pointer w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-800 object-cover overflow-hidden"
          >
            <img src={transaction.logo} alt="" className="object-cover" />
          </button>
        ))}
        <button className="cursor-pointer hover:scale-105 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-800 object-cover overflow-hidden transition-all">
          +
        </button>
      </div>
    </section>
  );
}

export const QuickTransfer = withLoading(QuickTransferComponent, "card");
