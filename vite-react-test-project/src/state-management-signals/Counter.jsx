import { signal } from "@preact/signals-react";

export const count = signal(0);

const Counter = () => {
  return (
    <div>
      <h3>From Counter ::{count}</h3>
      <hr />
    </div>
  );
};

export default Counter;
