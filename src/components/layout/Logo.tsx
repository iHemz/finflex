import Link from "next/link";
import { LogoIcon } from "@/components/icons/LogoIcon";

export function Logo() {
  return (
    <Link href="/" id="logo" className="cursor-pointer flex items-center">
      <LogoIcon />
      <span className="ml-2 text-xl font-bold">FinFlex</span>
    </Link>
  );
}
