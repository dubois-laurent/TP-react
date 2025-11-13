import { create } from "zustand";
import { persist } from 'zustand/middleware'


const initialState = {
  theme: "light",
};

export const useThemeStore = create(
    persist((set, get) => ({
        ...initialState,
        toggleTheme: () => {
            const currentTheme = get().theme;
            const newTheme = currentTheme === "light" ? "dark" : "light";
            set({ theme: newTheme });
        }
    }), {  
        name: "theme-storage",
    })
)