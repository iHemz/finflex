import Cookies from "js-cookie";
import { create } from "zustand";
import { queryClient } from "@/libs/reactQuery";

export interface User {
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

const STORAGE_KEY = "auth-storage";

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => {
    const state = { user, isAuthenticated: true };
    Cookies.set(STORAGE_KEY, JSON.stringify(state), {
      expires: 7,
      path: "/",
      sameSite: "lax",
    });
    set(state);
  },
  logout: () => {
    Cookies.remove(STORAGE_KEY, { path: "/" });
    queryClient.clear();
    set({ user: null, isAuthenticated: false });
  },
}));

// Initialize state from cookie
const storedState = Cookies.get(STORAGE_KEY);
if (storedState) {
  try {
    const state = JSON.parse(storedState);
    useAuthStore.setState(state);
  } catch (e) {
    Cookies.remove(STORAGE_KEY, { path: "/" });
  }
}
