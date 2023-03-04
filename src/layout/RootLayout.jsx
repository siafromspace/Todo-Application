import LightBackground from "../assets/images/bg-desktop-light.jpg"
import DarkBackground from "../assets/images/bg-desktop-dark.jpg"
import LightToggleIcon from "../assets/images/icon-sun.svg"
import DarkToggleIcon from "../assets/images/icon-moon.svg"
import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { NavLink, Outlet } from "react-router-dom"
import { TodoContext } from "../context/TodoContext"

const RootLayout = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const {todos, addTodo, clearCompleted} = useContext(TodoContext)
    const [newTodo, setNewTodo] = useState('')

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && newTodo.length > 0) {
            addTodo(newTodo)
            setNewTodo('')
        }
    }

    const activeTodos = todos.filter(todo => todo.status === "active")

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
                        <input type="text" placeholder="Create a new todo..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyDown} />
                    </div>
                </header>
                <main className="todo-container">
                    <Outlet />
                    <div className="last-child">
                        <p>{activeTodos.length} items left</p>
                        <nav>
                            <NavLink to="/">All</NavLink>
                            <NavLink to="active">Active</NavLink>
                            <NavLink to="completed">Completed</NavLink>
                        </nav>
                        <p onClick={() => clearCompleted()}>Clear completed</p>
                    </div>
                </main>
            </div>
        </>
     );
}
 
export default RootLayout;