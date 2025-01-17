// src/TodoContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create a context for the Todo list
const TodoContext = createContext();

// TodoProvider component to provide the context to children
export function TodoProvider({ children }) {
  // Use state to store the todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
	setTodos((prevTodos) => [...prevTodos, todo]);
  };

  // Function to toggle the completion state of a todo
  const toggleTodo = (id) => {
	setTodos((prevTodos) =>
  	prevTodos.map((todo) =>
    	todo.id === id ? { ...todo, completed: !todo.completed } : todo
  	)
	);
  };

  // Function to delete a todo by id
  const deleteTodo = (id) => {
	setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
	<TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
  	{children}
	</TodoContext.Provider>
  );
}

// Custom hook to access the TodoContext
export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
	throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}

