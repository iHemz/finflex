import {
  ArrowPathIcon,
  ArrowUpTrayIcon,
  BanknotesIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { withLoading } from "@/components/hoc/withLoading";

interface QuickActionsProps {
  onTransfer?: () => void;
  onDeposit?: () => void;
  onWithdraw?: () => void;
  onExchange?: () => void;
}

export function QuickActionsComponent({
  onTransfer,
  onDeposit,
  onWithdraw,
  onExchange,
}: QuickActionsProps) {
  const actions = [
    {
      name: "Transfer",
      icon: ArrowUpTrayIcon,
      onClick: onTransfer,
      color: "bg-yellow-700 text-black",
    },
    {
      name: "Deposit",
      icon: PlusIcon,
      onClick: onDeposit,
      color: "bg-green-700 text-black",
    },
    {
      name: "Withdraw",
      icon: BanknotesIcon,
      onClick: onWithdraw,
      color: "bg-red-700 text-white",
    },
    {
      name: "Exchange",
      icon: ArrowPathIcon,
      onClick: onExchange,
      color: "bg-blue-700 text-white",
    },
  ];

  return (
    <section className="card p-4 md:col-span-4">
      <h3 className="font-medium text-gray-300 mb-6">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-4">
        {actions.map((action) => (
          <button
            key={action.name}
            onClick={action.onClick}
            className={`cursor-pointer flex flex-col items-center justify-center p-2 rounded-xl ${action.color} transition-transform hover:scale-105`}
          >
            <action.icon className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">{action.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export const QuickActions = withLoading(QuickActionsComponent, "card");
