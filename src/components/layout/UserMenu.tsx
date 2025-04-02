import { Fragment } from "react";
import { Menu, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { HelpCircle, LogOut, Settings, User } from "lucide-react";
import { Avatar } from "@/components/layout/Avatar";
import useRouterWithLoader from "@/hooks/useRouterWithLoader";
import { useAuthStore } from "@/store/useAuthStore";

const menuItems = [
  {
    label: "Your Profile",
    icon: User,
    href: "/profile",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Help Center",
    icon: HelpCircle,
    href: "/help",
  },
];

export function UserMenu() {
  const { user, logout } = useAuthStore();
  const router = useRouterWithLoader();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <Menu as="div" className="relative">
      <Avatar user={user} />

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className="absolute z-100 right-0 mt-2 w-56 origin-top-right rounded-xl bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-800"
        >
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-gray-400 truncate">{user?.email}</p>
          </div>

          <div className="py-2">
            {menuItems.map((item) => (
              <MenuItem key={item.label}>
                <button
                  onClick={() => router.push(item.href)}
                  className="group flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-card-bg"
                >
                  <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                  {item.label}
                </button>
              </MenuItem>
            ))}
          </div>

          <div className="py-2">
            <MenuItem>
              <button
                onClick={handleLogout}
                className="group flex cursor-pointer items-center w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-card-bg"
              >
                <LogOut className="mr-3 h-5 w-5" aria-hidden="true" />
                Sign out
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
