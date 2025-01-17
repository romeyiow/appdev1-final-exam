import React, { useState } from "react";
import { useTodo } from "./TodoContext";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    addTodo({
      id: Date.now(),
      text: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="App flex flex-col items-center justify-center h-screen border-2 border-gray-200 w-full mx-auto p-4">
        <h1>Todo List</h1>

        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
            placeholder="Add a new todo"
            className="p-2 border border-gray-200"

          />
          <button
            onClick={handleAddTodo}
            disabled={!newTodo.trim()}
          >Add Todo</button>
        </div>

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
      </div>
    </div>

  );
}

export default App;