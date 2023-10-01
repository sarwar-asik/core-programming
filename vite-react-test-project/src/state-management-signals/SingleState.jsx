import { useState } from "react";
import "./SingleState.css"

const SingleState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  return (
    <div className="count-page">
    <h1>Count Page</h1>
    <div className="count-container">
      <button className="btn increment-btn" onClick={increment}>
        Increment
      </button>
      <p className="count-display">{count}</p>
      <button className="btn decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  </div>
  );
};

export default SingleState;
