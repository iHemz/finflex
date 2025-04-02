import { HomeIcon } from "@/components/icons/HomeIcon";

type Props = {
  pathName: string;
  onClick: (path: string) => void;
};

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Analytics", href: "/analytics" },
  { name: "Transactions", href: "/transactions" },
  { name: "Payment", href: "/payment" },
  { name: "Plan", href: "/plan" },
  { name: "Cards", href: "/cards" },
];

export function NavLinks({ pathName, onClick }: Props) {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 md:p-2 md:bg-card-bg md:rounded-full md:shadow-sm md:shadow-gradient-start/20 lg:shadow-none">
      {navlinks.map((item) => {
        const isActive = pathName === item.href;
        return (
          <button
            key={item.name}
            className={`cursor-pointer flex items-center px-4 py-2 rounded-full ${
              isActive
                ? "bg-gradient-start text-black font-medium"
                : "header-link hover:bg-gradient-start/10 hover:text-white"
            }`}
            onClick={() => onClick(item.href)}
          >
            {item.name === "Home" && isActive && <HomeIcon />}
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}
