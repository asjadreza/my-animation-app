"use client";

// what is useMemo
// useMemo is a React Hook that allows you to memoize (cache) a computed value so that React doesn’t recompute it on every render unless its dependencies change.

import { useMemo, useState } from "react";

// 🧠 Purpose:
// Optimize performance
// Prevent expensive calculations from running on every render

// Syntax
// const memoizedValue = useMemo(() => computedFunction(), [dependencies])

export default function UseMemoApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function expensiveCalculation() {
    console.log("calculating...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }

  // without useMemo
  //const value = expensiveCalculation(); // runs on every render
  // Problem: even typing in input causes expensiveCaculation() to run again

  // with useMemo:
  // expensiveCalculation() now only runs when count changes.
  // Typing in the input field will not trigger the expensive function.
  const memoizedVal = useMemo(() => expensiveCalculation(), [count]);

  return (
    <div>
      {/* <h2>Expensive Value: {value}</h2> */}
      <h2>Expensive Value: {memoizedVal}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
