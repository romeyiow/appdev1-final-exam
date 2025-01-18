import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const { todos, addTodo } = useTodo();
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        addTodo({
            id: Date.now(),
            text: newTodo,
            completed: false,
        });
        setNewTodo("");
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </>
    );
}

export default TodoForm;
