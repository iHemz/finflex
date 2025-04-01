import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "small_card" | "card" | "text" | "circle";
}

export function Skeleton({ className, variant = "text", ...props }: SkeletonProps) {
  const baseStyles = "animate-pulse bg-gray-800 rounded-md";

  const variants = {
    text: "h-4 w-full",
    card: "md:col-span-4 w-full h-[220px]",
    small_card: "md:col-span-4 w-full h-[100px]",
    circle: "h-10 w-10 rounded-full",
  };

  return <div className={cn(baseStyles, variants[variant], className)} {...props} />;
}
