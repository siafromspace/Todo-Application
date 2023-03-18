import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "../components/Todo";

const Completed = () => {
    const {todos} = useContext(TodoContext)
    const completedTodos = todos.filter(todo => todo.status === "completed")

    return ( 
        <>
          {completedTodos.map((todo, index) => (
                    <Todo index={index} task={todo.task} key={todo.id} id={todo.id} status={todo.status} />
           ))}
        </>
     );
}
 
export default Completed;