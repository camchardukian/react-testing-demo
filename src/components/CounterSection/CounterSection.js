import { useState } from "react";
const CounterSection = () => {
  const handleIncrement = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };
  const handleDecrement = () => {
    setCounter((prevState) => {
      return prevState - 1;
    });
  };
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter-section-container">
      <h1 className="counter-section-title">Counter Section</h1>
      <div className="counter-value">{counter}</div>
      <button onClick={handleIncrement} className="increment-counter-btn">
        Click to Increment
      </button>
      <button onClick={handleDecrement} className="decrement-counter-btn">
        Click to Increment
      </button>
    </div>
  );
};

export default CounterSection;
