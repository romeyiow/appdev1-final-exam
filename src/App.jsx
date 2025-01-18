import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodo } from "./context/TodoContext";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <p className="text-white"> Loading ...</p>
    </div>
  );
}

function App() {

  const { loading } = useTodo();
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen ">

      {
        loading ? <Loading /> :
          <>
            <h1 className="text-3xl">TASK MANAGER</h1>
            <h2 className="text-2xl">Add Todo's</h2>
            <TodoForm />
            <h2 className="text-2xl">Todo List</h2>
            <TodoList />
          </>
      }


    </div>
  );
}

export default App;
