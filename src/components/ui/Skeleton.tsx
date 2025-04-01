import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "card" | "text" | "circle";
}

export function Skeleton({ className, variant = "text", ...props }: SkeletonProps) {
  const baseStyles = "animate-pulse bg-gray-800 rounded-md";

  const variants = {
    text: "h-4 w-full",
    card: "h-full w-full",
    circle: "h-10 w-10 rounded-full",
  };

  return <div className={cn(baseStyles, variants[variant], className)} {...props} />;
}
