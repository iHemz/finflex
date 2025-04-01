import { ComponentType } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

interface WithLoadingProps {
  loading: boolean;
  variant?: "small_card" | "card" | "text" | "circle";
  className?: string;
}

export function withLoading<P extends object>(
  WrappedComponent: ComponentType<P>,
  defaultVariant: WithLoadingProps["variant"] = "text"
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
