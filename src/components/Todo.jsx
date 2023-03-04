import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import crossIcon from "../assets/images/icon-cross.svg"

const Todo = ({task, id, status}) => {
  
  const {removeTodo, deleteTodo} = useContext(TodoContext)
  const styles = status === "completed" ? 'line-through' : ''

    return ( 
        <div className="text-field">
          {/* <div></div> */}
          <p className={styles} onClick={() => removeTodo(id)}>{task}</p>
          <img className="cross-icon" src={crossIcon} alt="delete todo" onClick={() => deleteTodo(id)} />
        </div>
     );
}
 
export default Todo;