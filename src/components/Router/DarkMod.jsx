import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  // Apply theme to <html> tag and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:text-sky-400 dark:hover:text-yellow-400 cursor-pointer"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span
        className="transition-transform duration-500 ease-in-out inline-block"
        style={{
          transform: theme === "dark" ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        {theme === "dark" ? (
          <FaSun size={22} className="text-yellow-400" />
        ) : (
          <FaMoon size={22} className="text-gray-800 dark:text-gray-200" />
        )}
      </span>
    </button>
  );
};

export default DarkMode;
