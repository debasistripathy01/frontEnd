import { useEffect, useState } from "react";

export const Counter = ({ prop }) => {
  const [count, setCount] = useState(0);

  const handleClick = (num) => {
    setCount(count + num);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => handleClick(1)}>ADD</button>
      <button onClick={() => handleClick(-1)}>REDUCE</button>
    </div>
  );
};
