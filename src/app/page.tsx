"use client";

import { useCallback, useEffect, useState } from "react";
import Button from "@/components/MemoizedChild";
import Button1 from "@/components/Button";
import Greeting from "@/components/Greeting";



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

  const handleIncreaseCount = () => {
    setCount((prev) => prev + 1)
  }

  const handleDecreaseCount = () => {
    setCount((prev) => prev - 1 )
  }

  // useCallback
  const handleClick1 = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const handleClick2 = useCallback(() => {
    setCount((prev) => prev - 1)
  }, [])

  const user = {
    name: "Asjad",
    role: "Software Developer"
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Counter Example</h1>
      <h2>Count: {count}</h2>

      {/* <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Increase Count
      </button> */}

      {/* <Button onClick={handleClick1} /> */}
      <Button onClick={handleIncreaseCount} />

      <button
        onClick={() => setCount(0)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "10px",
          marginLeft: "1rem"
        }}
      >
        Reset
      </button>

      <Greeting user={user} />

    </div>

    // <div>
    //   <h1>Count: {count1}</h1>
    //   <Button onClick={handleClick} />
    // </div>

  );
}



