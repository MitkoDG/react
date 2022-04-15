import styles from './ToDoItem.module.css'
import { useEffect } from "react"
export default function ToDoItem({
    todo,
    onDelete,
    onClick,
}) {
    // useEffect(() => {
    //     console.log(`${id} - Mounted`);
    //     return () => {
    //         console.log(`${id} - UnMounted`);
    //     }
    // }, [id])

    let listItemClasses = ['todoItem']
    if (todo.isDone) {
        listItemClasses.push('todoItemDone')
    }
    return <li
        onClick={() => onClick(todo.id)} 
        className={listItemClasses.join(' ')} >
        {todo.text}
        <button onClick={(e) => onDelete(e, todo.id)}>x</button>
    </li>
}