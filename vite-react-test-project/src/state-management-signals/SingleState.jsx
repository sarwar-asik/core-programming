/* eslint-disable no-unused-vars */
// import { useState } from "react";
import Counter, { count } from "./Counter";
import "./SingleState.css";


import { batch, computed, effect, signal } from "@preact/signals-react";


//  const count = signal(0);


const SingleState = () => {
  //   const [count, setCount] = useState(0);

  //   const increment = (num) => {
  //     setCount(count + num);
  //   };

  //   const decrement = (num) => {
  //     setCount(count - num);
  //   };

 

  //   const increment = (val) => (count.value += val);
  const decrement = (val) => (count.value -= val);

  //! without useEffect //

  effect(() => console.log(`Hello world`));
  effect(() => console.log(`Update count is  ${count.value}`));

  //! double signal

  //   const double = signal(0);
  //   const increment = (val) => {
  //     //! batch for multiple operation //
  //     batch(() => {
  //       count.value += val;
  //       double.value = count.value * 2;
  //     });
  //   };

  //! computed value for change multiple action with a computed ///

  const double = computed(() => count.value * 2);
  const increment = (val) => (count.value += val);


  return (
    <div className="count-page">
      <h1>Count Page with PReact Signal</h1>
      <div className="count-container">
        <button className="btn increment-btn" onClick={() => increment(1)}>
          Increment
        </button>
        <p className="count-display">
          c={count} and d={double}
        </p>
        <button className="btn decrement-btn" onClick={() => decrement(1)}>
          Decrement
        </button>
      </div>
      <Counter></Counter>
    </div>
  );
};

export default SingleState;
