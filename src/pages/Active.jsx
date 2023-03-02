import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "../components/Todo";

const Active = () => {
    const {todos} = useContext(TodoContext)
    const activeTodos = todos.filter(todo => todo.status === "active")
    console.log(activeTodos)

    return ( 
        <>
          {activeTodos.map(todo => (
                    <Todo task={todo.task} key={todo.id} />
           ))}
        </>
     );
}
 
export default Active;