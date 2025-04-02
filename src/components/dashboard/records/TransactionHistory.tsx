import dayjs from "dayjs";
import { useState } from "react";
import { withLoading } from "@/components/hoc/withLoading";
import { IntraLink } from "@/components/ui/IntraLink";
import { Transactions } from "@/requests/financial_data/types";

type Records = "" | "+" | "-";

function TransactionHistoryComponent({ transactions = [] }: { transactions?: Transactions }) {
  const [record, setRecord] = useState<Records>("");

  const genClass = (rec: Records) => {
    const default_class = "cursor-pointer text-xs font-medium rounded-full px-4 py-1";
    return rec === record
      ? `bg-gradient-start text-black ${default_class}`
      : `text-gray-400 ${default_class}`;
  };

  return (
    <section className="md:col-span-12 lg:col-span-4 card">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-300">Transaction history</h3>
          <IntraLink />
        </div>
        <div className="flex space-x-2 mb-4">
          <button onClick={() => setRecord("")} className={genClass("")}>
            All
          </button>
          <button onClick={() => setRecord("+")} className={genClass("+")}>
            Income
          </button>
          <button onClick={() => setRecord("-")} className={genClass("-")}>
            Spending
          </button>
        </div>
        <div className="space-y-4">
          {transactions
            .filter((t) => t.amount.startsWith(record))
            .map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-800 object-cover overflow-hidden">
                    <img src={transaction.logo} alt="" className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-200">{transaction.merchant}</div>
                    <div className="text-xs text-gray-400">{`${dayjs(transaction.date).format("DD-MM-YY")} ${transaction.time}`}</div>
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
