import { useEffect } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useParams, usePathname, useRouter } from "next/navigation";
import NProgress from "nprogress";
import { scrollToTopAction } from "@/libs/utils";

export type RouterProps = AppRouterInstance & {
  pathName: string;
  params: any;
  push: (href: string, options?: any) => void;
  back: () => void;
};

export default function useRouterWithLoader(): RouterProps {
  const router = useRouter();
  const pathName = usePathname();
  const params = useParams();

  NProgress.configure({
    template: `
    <div class="nprogress-bar fixed top-0 left-0 w-full h-0.5 bg-transparent z-50" role="bar">
      <div class="nprogress-peg h-full bg-blue-500 transition-all duration-300 ease-out"></div>
    </div>
  `,
    easing: "ease",
    speed: 500,
  });

  // Handle route changes based on URL changes
  useEffect(() => {
    NProgress.done();
  }, [pathName]);

  const scrollToView = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pushWithLoader = (href: string, options?: any) => {
    if (href === pathName || href.startsWith("#")) {
      if (href.startsWith("#")) {
        return scrollToView(href);
      }

      if (window.scrollY !== 0) {
        scrollToTopAction();
      }
      return;
    }

    NProgress.start();
    return router.push(href, options);
  };

  const backWithLoader = () => {
    NProgress.start();
    return router.back();
  };

  return { ...router, pathName, params, push: pushWithLoader, back: backWithLoader };
}
