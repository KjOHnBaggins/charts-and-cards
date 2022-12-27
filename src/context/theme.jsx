import { createContext, useRef } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  let dark = useRef(false);
  const setDark = (value) => {
    dark.current = value;
  };

  const toggleDark = () => {
    setDark(!dark.current);
    dark.current
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  // const theme = dark.current ? "dark" : "";
  return (
    <ThemeContext.Provider value={[{ dark }, toggleDark]}>
      {children}
    </ThemeContext.Provider>
  );
};
