import { useState } from "react";

export const Child = ({ value, clickHandle }) => {
  const handleInc = () => {
    clickHandle(1);
  };
  const handleDec = () => {
    clickHandle(-1);
  };
  return (
    <>
      <div>
        <h1>Child Value: {value}</h1>
        <button onClick={() => handleInc(1)}>+</button>
        <button onClick={() => handleDec(-1)}>-</button>
      </div>
    </>
  );
};

// In childTOParent flow the data count goes from child to parent.
// we set the counts inside the Child Component
//  We access that data count from parent and do the calculations
//  Handle Change should be inside the Child Component but the Increment and decrement would be in parent one.

export const ChildToParent = () => {
  const [count, setCount] = useState(20);
  const handleChange = (value) => {
    setCount(count + value);
  };
  return (
    <>
      <div>
        <h1>Child to Parent</h1>
        <Child value={count} clickHandle={handleChange} />
      </div>
    </>
  );
};
