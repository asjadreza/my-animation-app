"use client";

import { useCallback, useEffect, useState } from "react";
import Button from "@/components/MemoizedChild";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);

  // useEffect to update the document title whenever the count changes
  useEffect(() => {
    if(count === 0) {
      document.title = `My Animation App`
    } else {
      document.title = `Count: ${count}`
    }
  }, [count]); // runs every time count updates

  // useCallback
  const handleClick = useCallback(() => {
    setCount1((prev) => prev + 1)
  }, [])

  return (


    // <div style={{ textAlign: "center", marginTop: "30px" }}>
    //   <h1>Counter Example</h1>
    //   <h2>Count: {count}</h2>

    //   <button
    //     onClick={() => setCount((prev) => prev + 1)}
    //     style={{
    //       padding: "10px 20px",
    //       fontSize: "18px",
    //       cursor: "pointer",
    //       marginTop: "10px",
    //     }}
    //   >
    //     Increase Count
    //   </button>

    //   <button
    //     onClick={() => setCount(0)}
    //     style={{
    //       padding: "10px 20px",
    //       fontSize: "18px",
    //       cursor: "pointer",
    //       marginTop: "10px",
    //       marginLeft: "1rem"
    //     }}
    //   >
    //     Reset
    //   </button>
    // </div>

    <div>
      <h1>Count: {count1}</h1>
      <Button onClick={handleClick} />
    </div>

  );
}