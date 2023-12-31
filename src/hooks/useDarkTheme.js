import { useEffect, useState } from 'react';

export default function useDarkTheme() {
    const isDarkMode = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
    const [theme, setTheme] = useState(isDarkMode ? "dark" : "light");


    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return [theme,setTheme];
}