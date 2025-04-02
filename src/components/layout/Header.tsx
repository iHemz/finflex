"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { AlignJustify, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NavLinks } from "@/components/layout/NavLinks";
import { UserMenu } from "@/components/layout/UserMenu";
import useDisclosure from "@/hooks/useDisclosure";
import useRouterWithLoader from "@/hooks/useRouterWithLoader";
import { useAuthStore } from "@/store/useAuthStore";

export default function Header() {
  const router = useRouterWithLoader();
  const { isOpen, open, close } = useDisclosure();
  const user = useAuthStore((state) => state.user);

  const onClickLink = (path: string) => {
    router.push(path);
    close();
  };

  return (
    <header
      className={`${router.pathName === "/login" && "hidden"} sticky top-0 z-10 flex h-20 items-center justify-between px-6 backdrop-blur-md`}
    >
      <Logo />

      <section id="desktop-navlinks" className="hidden lg:block">
        <NavLinks pathName={router.pathName} onClick={onClickLink} />
      </section>

      <section id="mobile-navlinks" className="flex md:hidden">
        <button onClick={open}>
          <AlignJustify />
        </button>
        <Dialog open={isOpen} onClose={close} className="lg:hidden">
          <div className="fixed inset-0 z-100" />
          <DialogPanel className="fixed inset-y-0 right-0 z-100 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex h-full flex-col">
              <header className="flex items-center justify-between">
                <Logo />
                <button onClick={close}>
                  <X />
                </button>
              </header>
              <div className="flex-1 mt-6">
                <NavLinks pathName={router.pathName} onClick={onClickLink} />
              </div>
              <div className="mt-auto pt-6 border-t border-gray-800">
                <UserMenu onClick={close} />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </section>

      <section className="hidden md:flex items-center space-x-4">
        <button
          type="button"
          className="cursor-pointer rounded-full bg-card-bg p-2 hover:scale-105 hover:ring-1 hover:ring-gradient-start/10 text-gray-400 hover:text-gray-300"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <UserMenu />
      </section>
    </header>
  );
}
