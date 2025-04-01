import { ComponentType } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

interface WithLoadingProps {
  loading: boolean;
  variant?: "card" | "text" | "circle";
  className?: string;
}

export function withLoading<P extends object>(
  WrappedComponent: ComponentType<P>,
  defaultVariant: "card" | "text" | "circle" = "text"
) {
  return function WithLoadingComponent({
    loading,
    variant = defaultVariant,
    className,
    ...props
  }: WithLoadingProps & P) {
    if (loading) {
      return <Skeleton variant={variant} className={className} />;
    }

    return <WrappedComponent {...(props as P)} />;
  };
}
