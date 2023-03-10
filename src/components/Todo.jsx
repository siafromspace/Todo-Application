import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import crossIcon from "../assets/images/icon-cross.svg"
import checkIcon from "../assets/images/icon-check.svg"

const Todo = ({task, id, status}) => {
  
  const {removeTodo, deleteTodo} = useContext(TodoContext)
  const styles = status === "completed" ? 'line-through' : ''
  const check = status === "completed" ? 'checked' : 'check-box'

    return ( 
        <div className="text-field">
          <div className={check} onClick={() => removeTodo(id)}>
            {status === "completed" && <img src={checkIcon} alt="done todo" />}
          </div>
          <p className={styles} onClick={() => removeTodo(id)}>{task}</p>
          <img className="cross-icon" src={crossIcon} alt="delete todo" onClick={() => deleteTodo(id)} />
        </div>
     );
}
 
export default Todo;