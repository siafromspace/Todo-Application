import { createContext, useState } from "react";

export const TodoContext = createContext()

const todoList = [
    {
        id: 1,
        task: "Complete online Javascript course",
        status: "active"
    },
    {
        id: 2,
        task: "Jog around the park three times",
        status: "active"
    },
    {
        id: 3,
        task: "10 minutes meditation",
        status: "completed"
    },
    {
        id: 4,
        task: "Read for one hour",
        status: "active"
    },
    {
        id: 5,
        task: "Pick up groceries",
        status: "completed"
    },
    {
        id: 6,
        task: "Complete todo app on frontend mentor",
        status: "completed"
    }
]

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState(todoList)

    return (
        <TodoContext.Provider value={{todos}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider