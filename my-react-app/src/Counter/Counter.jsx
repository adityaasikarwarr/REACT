import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <p className="count">{count}</p>
      <button className="counter-button" onClick={Decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={Increment}>
        Increment
      </button>
    </div>
  );
}
export default Counter;
