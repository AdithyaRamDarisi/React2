import { useState } from "react";

function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  return { darkMode, toggleTheme };
}

export default useTheme;