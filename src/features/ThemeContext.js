import { createContext, useEffect, useState } from "react";

const themes = {
  dark: {
    backgroundColor: "#161819",
    backgroundContainer: "#262a2e",
    backgroundContent: "#262a2e",
    colorTitle: "#fff",
    color: "#d4d4d4",
    tagColor: "#383c41",
    shadow: "0 10px 10px rgba(0, 0, 0, 0.2)",
  },
  light: {
    backgroundColor: "#ffffff",
    backgroundContainer: "#f9f9ff",
    backgroundContent: "#f9f9ff",
    colorTitle: "#000",
    color: "#2D3350",
    tagColor: "#e8eaee",
    shadow: "0 15px 40px 5px rgba(132, 132, 133, 0.15)",
  },
};

const initalState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = createContext(initalState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  //On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    console.log("On mount => isDark: ", isDark);
    //store the state mode to the local storage
    setDark(isDark);
  }, [dark]);

  //To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
