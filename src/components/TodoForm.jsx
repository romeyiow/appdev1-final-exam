import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const { todos, addTodo } = useTodo();
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        addTodo({
            userId: Date.now(),
            id: Date.now(),
            title: newTodo,
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
                    className="p-2 m-4"

                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </>
    );
}

export default TodoForm;
