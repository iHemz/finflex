import Cookies from "js-cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          const cookie = Cookies.get(name);
          return cookie ? JSON.parse(cookie) : null;
        },
        setItem: (name, value) => {
          Cookies.set(name, JSON.stringify(value), {
            expires: 7,
            path: "/",
            sameSite: "lax",
          });
        },
        removeItem: (name) => Cookies.remove(name),
      })),
    }
  )
);
