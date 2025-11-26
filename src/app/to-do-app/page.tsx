"use client";

import { useState } from "react";
import { Todo } from "@/utils/types";
import { preconnect } from "react-dom";
import { totalmem } from "os";

// import { useState } from "react";
// export default function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const addTodo = () => {
//     console.log("added");
//     if (inputValue.trim() !== "") {
//       setTodos([
//         ...todos,
//         {
//           id: Date.now(),
//           text: inputValue,
//           completed: false,
//         },
//       ]);
//       setInputValue("");
//     }
//   };

//   console.log("todos", todos);

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") addTodo();
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "500px",
//         margin: "50px auto",
//         padding: "20px",
//       }}
//     >
//       <h1>Simple Todo App</h1>

//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyPress}
//           placeholder="Add a new todo..."
//           style={{
//             padding: "10px",
//             marginRight: "10px",
//             width: "70%",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />

//         <button
//           onClick={addTodo}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#0070f3",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Add
//         </button>
//       </div>

//       <ul
//         style={{
//           listStyle: "none",
//           padding: 0,
//         }}
//       >
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "10px",
//               margin: "5px 0",
//               backgroundColor: "#f5f5f5",
//               borderRadius: "4px",
//               textDecoration: todo.completed ? "line-through" : "none",
//             }}
//           >
//             <span
//               onClick={() => toggleTodo(todo.id)}
//               style={{
//                 cursor: "pointer",
//                 flex: "1",
//                 color: "#000000ff",
//               }}
//             >
//               {todo.text}
//             </span>

//             <button
//               onClick={() => deleteTodo(todo.id)}
//               style={{
//                 backgroundColor: "#ff4444",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "4px",
//                 padding: "5px 10px",
//                 cursor: "pointer",
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       {todos.length === 0 && (
//         <p
//           style={{
//             color: "#666",
//             textAlign: "center",
//           }}
//         >
//           No todos yet. Add one above!
//         </p>
//       )}
//     </div>
//   );
// }

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTodo();
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1>Simple Todo App</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Add a new todo..."
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "70%",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <button
          onClick={addTodo}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              margin: "5px 0",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                flex: "1",
                color: "#000000ff",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                backgroundColor: "#ff4444",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
                cursor: "pointer'",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
