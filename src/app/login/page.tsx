"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LogoIcon } from "@/components/icons/LogoIcon";
import useRouterWithLoader from "@/hooks/useRouterWithLoader";
import { useAuthStore } from "@/store/useAuthStore";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouterWithLoader();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // Create a user profile from the email
      const userName = data.email.split("@")[0];
      const formattedName = userName
        .split(/[._-]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      login({
        id: crypto.randomUUID(),
        email: data.email,
        name: formattedName,
      });

      router.push("/");
    } catch (err) {
      setError("root", {
        type: "manual",
        message: "An error occurred during login",
      });
    }
  };

  const input_class = "flex flex-col gap-1";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center">
            <LogoIcon />
            <span className="ml-2 text-2xl font-bold text-white">FinFlex</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-400">Use any email and password to sign in</p>
        </header>

        <main className="bg-card rounded-xl shadow-sm p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {errors.root && (
              <div className="p-3 text-sm rounded bg-red-500/20 text-red-500 text-center">
                {errors.root.message}
              </div>
            )}

            <section className={input_class}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-lg border-0 bg-card-bg py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-yellow sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </section>

            <section className={input_class}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-lg border-0 bg-card-bg py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-yellow sm:text-sm sm:leading-6"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
            </section>

            <section className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-accent-yellow focus:ring-accent-yellow"
                  {...register("rememberMe")}
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-accent-yellow hover:text-accent-yellow/80">
                  Forgot your password?
                </a>
              </div>
            </section>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full cursor-pointer justify-center rounded-lg bg-gradient-start px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-accent-yellow/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gradient-start hover:scale-101 transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
