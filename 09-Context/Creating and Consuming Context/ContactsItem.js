import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";

export const ContactItem = ({ name }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      {name} {theme === "dark" ? "🌑" : "☀"}
    </div>
  );
};
