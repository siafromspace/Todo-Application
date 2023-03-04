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

    const addTodo = (task) => {
        setTodos(curr => [
            ...curr,
            {
                id: Math.random(),
                task,
                status:"active"
            }
        ])
    }

    const removeTodo = (id) => {
    setTodos(currTodos => currTodos.map(todo => {
        return (
            todo.id === id ? 
            {
                ...todo,
                status: todo.status === "active" ? "completed" : "active"
            } : todo
        )
    }))
    }

    const deleteTodo = (id) => {
        setTodos(currTodos => currTodos.filter(todo => todo.id !== id))
    }

    const clearCompleted = () => {
        setTodos(currTodos => currTodos.filter(todo => todo.status !== "completed"))
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo, deleteTodo, clearCompleted}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider