import LightBackground from "../assets/images/bg-desktop-light.jpg"
import DarkBackground from "../assets/images/bg-desktop-dark.jpg"
import LightToggleIcon from "../assets/images/icon-sun.svg"
import DarkToggleIcon from "../assets/images/icon-moon.svg"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const RootLayout = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return ( 
        <>
            <div className="bg-container">
                {theme === "light" ? 
                <img src={LightBackground} alt="bg img" className="bg-image" /> : 
                <img src={DarkBackground} alt="bg img" className="bg-image" />}
            </div>
            <div className="container" id={theme}>
            </div>
            <div className="root-layout" id={theme}>
                <header>
                    <div className="logo">
                        <h1>TODO</h1>
                        {theme === "light" ?
                        <img src={DarkToggleIcon} alt="" onClick={toggleTheme} /> :
                        <img src={LightToggleIcon} alt="" onClick={toggleTheme} />}
                    </div>
                    <div className="text-field">
                        <input type="checkbox" name="" id="" />
                        <input type="text" name="" id="" />
                    </div>
                </header>
                <main>
                    <nav></nav>
                </main>
            </div>
        </>
     );
}
 
export default RootLayout;