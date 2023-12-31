import React from 'react';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import useDarkTheme from '../hooks/useDarkTheme';

function ThemeSwitcher({className}) {
    const [theme, setDarkTheme] = useDarkTheme();

  const handleThemeSwitch = () => {
    setDarkTheme(theme=== "dark" ? "light" : "dark")
  }
  return (
    <button className={`${className}`} onClick={handleThemeSwitch}>
    {theme !== "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  )
}

export default ThemeSwitcher;
