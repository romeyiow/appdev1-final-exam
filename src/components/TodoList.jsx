import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoList() {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();
    const [newTodo, setNewTodo] = useState("");

    const handleToggleTodo = (id) => {
        toggleTodo(id);
    };

    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    };

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                            }}
                            onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
