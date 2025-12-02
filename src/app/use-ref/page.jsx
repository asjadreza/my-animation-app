"use client";

import { useRef, useState } from "react";

// useState vs useRef

// | Feature                           | useState                       | useRef                                                                          |
// | --------------------------------- | ------------------------------ | ------------------------------------------------------------------------------- |
// | What it stores                    | State value that affects UI    | Mutable value that does **not** trigger re-render                               |
// | Causes re-render on value change? | ✅ Yes                          | ❌ No                                                                            |
// | Use case                          | Values that need to update UI  | Accessing DOM elements, storing previous values, storing timers, counters, etc. |
// | Typical Usage                     | Form inputs, counters, toggles | DOM manipulation, store any value between renders                               |
// | Persistence                       | Persists between renders       | Persists between renders                                                        |

// useState example

// export default function UseRefApp() {
//     const [ count, setCount ] = useState(0) // use state causes re-render on value change

//     console.log("Component re rendered!");

//     // Behaviour:
//     // Everytime we click button, setCount() changes state
//     // Component re-renders and prints "Component re rendered!"

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//         </div>
//     )
// }

// useRef Example

// export default function UseRefApp() {
//   const countRef = useRef(0);

//   console.log("Component rendered");

//   const handleClick = () => {
//     countRef.current += 1;
//     console.log("Ref value", countRef.current);
//   };

// // Behaviour:
// // Clicking button updates countRef.current
// // UI does not change cause updating ref does not re render the component
// // Value persist in memory between renders

//   return (
//     <div>
//       <h2>Ref Value: {countRef.current}</h2>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }

// Real use cases of useRef
// 1. Accessing and controlling  DOM elements (Focus Input Field)

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // directly focus the DOM input element
  };

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

export default InputFocus;
