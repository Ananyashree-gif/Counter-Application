import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Current number: 0 ");

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage(`Increased! Current number: ${newCount}`);
  };

  const handleDecrease = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setMessage(`Decreased! Current number: ${newCount}`);
    } else {
      setMessage("Already at 0! ");
    }
  };

  const handleReset = () => {
    setCount(0);
    setMessage("Reset to 0! ");
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="title">Counter App</h1>

        <div className="count-display">{count}</div>

        <p className="status-message">{message}</p>

        <div className="button-group">
          <button className="btn decrease" onClick={handleDecrease}>
            −
          </button>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn increase" onClick={handleIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;