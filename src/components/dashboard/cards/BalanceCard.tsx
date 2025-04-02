import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { withLoading } from "@/components/hoc/withLoading";
import { IntraLink } from "@/components/ui/IntraLink";
import { Performance, TotalBal } from "@/requests/financial_data/types";

interface BalanceCardProps extends TotalBal {
  performance: Performance;
}

function BalanceCardComponent({
  amount = 0,
  change = 0,
  changeAmount = 0,
  performance = [],
}: Partial<BalanceCardProps>) {
  const formattedBalance = new Intl.NumberFormat("en-US").format(amount);
  const formattedChangeAmount = new Intl.NumberFormat("en-US").format(changeAmount);

  return (
    <section className="md:col-span-8 lg:col-span-5 h-60 md:h-auto card bg-gradient-card relative">
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Total Balance</h3>
          <IntraLink />
        </div>
        <div className="text-4xl sm:text-6xl font-bold mb-2">
          ${formattedBalance}
          <span className="text-2xl font-normal opacity-70">.00</span>
        </div>
        <div className="flex items-center bg-black/20 rounded-full px-3 py-1 w-fit">
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
          <span className="text-sm font-medium">{change}%</span>
          <span className="text-sm ml-2 font-medium">+${formattedChangeAmount}</span>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-24 opacity-30">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performance} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Area
                type="monotone"
                dataKey="value"
                stroke="rgba(0,0,0,0.5)"
                fill="rgba(0,0,0,0.2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export const BalanceCard = withLoading(BalanceCardComponent, "card");
