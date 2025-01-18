
import React, { createContext, useState, useContext, useEffect } from 'react';


const TodoContext = createContext();

export function TodoProvider({ children }) {

    useEffect(() => {
        const fetchTodos = async () => {
            console.log('fetching');
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setTodos(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTodos();
    }, []);

    const [todos, setTodos] = useState();
    const [loading, setLoading] = useState(true)


    const addTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    };


    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };


    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ loading, todos, addTodo, toggleTodo, deleteTodo }}>
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