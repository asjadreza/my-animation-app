"use client";

import TodoServices from "@/services/todoService";
import { useEffect, useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    try {
      const res = await TodoServices.getTodos();
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async () => {
    if (!inputValue.trim()) return;
    try {
      const res = await TodoServices.addTodo(inputValue.trim());
      setTodos([res.data, ...todos]);
      setInputValue("");
    } catch (err) {
      console.error("Error adding todo", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await TodoServices.deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting todo", err);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const res = await TodoServices.toggleTodo(id);
      setTodos(todos.map((t) => (t.id === id ? res.data : t)));
    } catch (err) {
      console.error("Error toggling todo", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px, auto",
        padding: "20px",
      }}
    >
      <h1>Simple Todo App</h1>

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new todo..."
          style={{
            padding: "10px",
            width: "70%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        />

        <button
          onClick={addTodo}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: loading ? "#ccc" : "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>

      {loading && todos.length === 0 ? <p>Loading todos...</p> : null}

      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              background: "10px",
              background: "#f5f5f5",
              marginBottom: "5px",
              borderRadius: "4px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                background: "#ff4444",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && !loading ? (
        <p>No todos yet. Add one above!</p>
      ) : null}
    </div>
  );
}
