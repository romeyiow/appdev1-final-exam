import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";


function TodoList() {
    const { loading, todos, toggleTodo, deleteTodo } = useTodo();
    const [newTodo, setNewTodo] = useState("");

    const handleToggleTodo = (id) => {
        toggleTodo(id);
    };

    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    };

    return (
        <>
            <ul className="p-4 flex flex-col justify-center items-center w-[80%] ">
                {todos.map((todo) => (
                    <li key={todo.id} className="block flex justify-between items-center flex-1 border-3 border-[#440000] ">
                        <input onClick={() => handleToggleTodo(todo.id)} checked={todo.completed} type="checkbox" name="" id={todo.id} />
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}

                            className="m-2"
                        >
                            {todo.title}
                        </span>
                        <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="hover:bg-red-500 border border-0">Delete</button>
                    </li>
                ))}
            </ul>


        </>
    );
}

export default TodoList;
