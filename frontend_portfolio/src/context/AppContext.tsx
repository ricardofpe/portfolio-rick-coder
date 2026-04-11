"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";
type Theme = "dark" | "light";

interface AppContextType {
  lang: Lang;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType>({
  lang: "en",
  theme: "dark",
  toggleLang: () => {},
  toggleTheme: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleLang = () => setLang((l) => (l === "en" ? "pt" : "en"));

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light-mode", next === "light");
      return next;
    });
  };

  return (
    <AppContext.Provider value={{ lang, theme, toggleLang, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
