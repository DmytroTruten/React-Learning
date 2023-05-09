import { useState, useEffect } from "react";

export const useTheme = (initialState = "dark") => {
  const [theme, setTheme] = useState(initialState);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const isDarkTheme = (theme === 'dark');

  return {onToggleTheme, isDarkTheme}
};
