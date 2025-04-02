import { Fragment, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const menuItems = ["Monthly"];

export function BudgetMenu() {
  const [record_type, setRecord] = useState("Monthly");

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex gap-6 items-center cursor-pointer text-gray-400 hover:ring-1 hover:ring-white/10 transition-all p-2 rounded-lg">
        <span>{record_type}</span>
        <ChevronDown />
      </MenuButton>

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
          <div className="py-2">
            {menuItems.map((item, i) => (
              <MenuItem key={i}>
                <button
                  onClick={() => setRecord(item)}
                  className="group flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-card-bg"
                >
                  {item}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
