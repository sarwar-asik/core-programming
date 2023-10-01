import { useState } from "react";
import "./SingleState.css";

const SingleState = () => {
  const [count, setCount] = useState(0);

  const increment = (num) => {
    setCount(count + num);
  };

  const decrement = (num) => {
    setCount(count - num);
  };
  return (
    <div className="count-page">
      <h1>Count Page</h1>
      <div className="count-container">
        <button className="btn increment-btn" onClick={()=>increment(1)}>
          Increment
        </button>
        <p className="count-display">{count}</p>
        <button className="btn decrement-btn" onClick={()=>decrement(1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default SingleState;
