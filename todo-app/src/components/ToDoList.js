import ToDoItem from "./ToDoItem"

export default function ToDoList() {
    const todos = [
        { id: 1, text: 'Clean my room' },
        { id: 2, text: 'Wash the dishes' },
        { id: 3, text: 'Go to the gym' },
    ]
    return (
        <ul>
            {/* {todos.map(todo=><li key={todo.id}>{todo.text}</li>)} */}
            {todos.map(todo => <ToDoItem key={todo.id} todo={todo} />)}
        </ul>
    )
}