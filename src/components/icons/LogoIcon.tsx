export function LogoIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="#E6FF4D" />
      <path
        d="M8 8h16c1.1 0 2 .9 2 2v2h-4v2h4v2h-4v2h4v2h-4v4H10V8H8v14H6V10c0-1.1.9-2 2-2z"
        fill="black"
      />
      <path d="M24 8h-2v14h2c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" fill="black" />
    </svg>
  );
}
