import React, { useState } from "react";
import { useTodo } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {


  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoForm />
      <TodoList />

    </div>
  );
}

export default App;
