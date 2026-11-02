import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  // Theme Management
  const toggleTheme = () => {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  };

  // User Login
  const login = (username) => {
    setUser({
      name: username
    });
  };

  // User Logout
  const logout = () => {
    setUser(null);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        login,
        logout
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;