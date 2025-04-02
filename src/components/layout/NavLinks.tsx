import Link from "next/link";
import { HomeIcon } from "@/components/icons/HomeIcon";

type Props = {
  pathName: string;
  navlinks: Array<{ name: string; href: string }>;
  onClick?: () => void;
};

export function NavLinks({ pathName, navlinks, onClick }: Props) {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 md:p-2 md:bg-card-bg md:rounded-full">
      {navlinks.map((item) => {
        const isActive = pathName === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-2 rounded-full ${
              isActive
                ? "bg-gradient-start text-black font-medium"
                : "header-link hover:bg-gradient-start/10 hover:text-white"
            }`}
            {...(onClick && { onClick: onClick })}
          >
            {item.name === "Home" && isActive && <HomeIcon />}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
