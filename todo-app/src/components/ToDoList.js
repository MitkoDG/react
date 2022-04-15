import { useState, useEffect } from "react"
import uniqid from 'uniqid'
import ToDoItem from "./ToDoItem"

export default function ToDoList() {
    const [todos, setToDos] = useState([
        { id: uniqid(), text: 'Clean my room', isDone: false },
        { id: uniqid(), text: 'Wash the dishes', isDone: false },
        { id: uniqid(), text: 'Go to the gym', isDone: false },
    ])



    // const todos = [

    // ]

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false,
        };

        setToDos(oldTodos => [
            ...oldTodos,
            todo
        ]);
    }

    const deleteTodoItemClickHandler = (e, id) => {
        e.stopPropagation();
        setToDos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    };

    const toggleTodoItemClickHandler = (id) => {
        setToDos(oldTodos => {
            // let selectedTodo = oldTodos.find(x => x.id === id);
            // let selectedIntex = oldTodos.findIndex(x => x.id === id);
            // let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone }

            // return [
            //     ...oldTodos.slice(0,selectedIntex),
            //     toggledTodo,
            //     ...oldTodos.slice(selectedIntex + 1)
            // ];
            return oldTodos.map(todo =>
                todo.id === id
                    ? {...todo, isDone: !todo.isDone}
                    : todo
            )
            
        })
    };

    return (
        <>
            <ul>
                <label htmlFor="todo-name">Add ToDo</label>
                <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo" />
                {/* {todos.map(todo=><li key={todo.id}>{todo.text}</li>)} */}
                {/* {todos.map(todo => <ToDoItem key={todo.id} id={todo.id} text={todo.text} onDelete={() =>deleteTodoItemClickHandler(todo.id)} />)} */}
                {todos.map(todo =>
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                    />)}
            </ul>
        </>
    )
}