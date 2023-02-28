import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider