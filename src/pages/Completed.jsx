import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "../components/Todo";

const Completed = () => {
    const {todos} = useContext(TodoContext)
    const completedTodos = todos.filter(todo => todo.status === "completed")
    console.log(completedTodos)

    return ( 
        <>
          {completedTodos.map(todo => (
                    <Todo task={todo.task} key={todo.id} />
           ))}
        </>
     );
}
 
export default Completed;