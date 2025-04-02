import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" id="logo" className="cursor-pointer flex items-center">
      <div className="h-10 w-10 rounded-md flex items-center justify-center font-bold">FF</div>
      <span className="ml-2 text-xl font-bold">Fobework</span>
    </Link>
  );
}
