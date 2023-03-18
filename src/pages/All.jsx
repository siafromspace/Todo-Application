import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "../components/Todo";

const All = () => {
    const {todos} = useContext(TodoContext)

    return ( 
        <>
          {todos.map((todo, index) => (
            <Todo index={index} task={todo.task} key={todo.id} id={todo.id} status={todo.status} />
          ))}
        </>
     );
}
 
export default All;