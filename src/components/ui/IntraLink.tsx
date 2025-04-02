import { ArrowUpRight, LucideIcon } from "lucide-react";

type Props = {
  onClick?: () => void;
  icon?: LucideIcon;
};

export function IntraLink({ onClick, icon: Icon = ArrowUpRight }: Props) {
  return (
    <button
      className="p-1 rounded-full bg-primary-dark-50 cursor-pointer transition-all duration-300 shadow-lg z-50 hover:scale-110"
      {...(onClick && { onClick })}
    >
      <Icon className="w-3 h-3" />
    </button>
  );
}
