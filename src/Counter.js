import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function handleButtonClickPos() {
    setNumber(number + 1);
  }
  function handleButtonClickNeg() {
    setNumber(number - 1);
  }

  return (
    <div className="counter">
      <button onClick={handleButtonClickPos}>+1</button>
      <p>{number}</p>
      <button onClick={handleButtonClickNeg}>-1</button>
    </div>
  );
}
