import React, { useState } from "react";

const Click = () => {
  const [count, setcount] = useState(0);
  const handleIncrease = () => {
    setcount(count + 1);
  };
  const handleDecrease = () => {
    setcount(count - 1);
  };
  const handleReset = () => {
    setcount(count * 0);
  };

  return (
    <div>
      <button onClick={handleIncrease}> Increase </button>
      <p> {count} </p>
      <button onClick={handleReset}> Reset </button>
      <button onClick={handleDecrease}> decrease </button>
    </div>
  );
};

export default Click;
