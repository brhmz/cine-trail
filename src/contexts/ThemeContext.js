import { useState, createContext, useEffect } from "react";
export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage?.getItem('darkMode')
        if (!theme) {
            localStorage.setItem('darkMode', true)
        } else { setDarkMode(JSON.parse(theme)) }
    }, [])

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
            {props.children}
        </ThemeContext.Provider>
    )
}