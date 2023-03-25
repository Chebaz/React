import React from "react";
import { useState } from "react";

export function UseCount() {
  const [count, setCount] = useState(0);

  const handleModify = (event) => {
    if (event.target.name === "increment") {
      setCount((count) => count + 1);
    } else {
      setCount((count) => count - 1);
    }
  };
  const handleReset = () => {
    setCount((count) => (count = 0));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleModify} name="increment">
        Increment
      </button>
      <button onClick={handleModify}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
