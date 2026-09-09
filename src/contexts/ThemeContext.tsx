"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { THEME_STORAGE_KEY } from "@/config";

type TTheme = "light" | "dark";

type TThemeContextValue = {
  theme: TTheme;
  isDarkModeOn: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<TThemeContextValue | null>(null);

/**
 * Holds the theme in one place so every page and component reads the same
 * value, and mirrors it to `<html class="dark">` plus localStorage.
 * The class itself is applied before paint by the inline script in the layout,
 * so there is no flash of the wrong theme on a reload.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>("light");

  // Adopt whatever the pre-paint script already put on <html>.
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((previous) => {
      const next = previous === "dark" ? "light" : "dark";

      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Private mode or blocked storage: the theme still works for this visit.
      }

      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, isDarkModeOn: theme === "dark", toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
};
