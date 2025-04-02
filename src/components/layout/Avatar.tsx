import { MenuButton } from "@headlessui/react";
import { User } from "@/store/useAuthStore";

type Props = {
  user: User | null;
};
export function Avatar({ user }: Props) {
  return (
    <MenuButton className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-card-bg flex items-center justify-center text-white hover:scale-105 hover:ring-1 hover:ring-gradient-start/10 cursor-pointer transition-all">
        {user?.name.charAt(0)}
      </div>
      <div className="px-4 py-3 text-left md:hidden">
        <p className="text-sm font-medium text-white">{user?.name}</p>
        <p className="text-xs text-gray-400 truncate">{user?.email}</p>
      </div>
    </MenuButton>
  );
}
