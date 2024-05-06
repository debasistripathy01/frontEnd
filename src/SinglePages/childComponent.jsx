import React, { useState } from "react";

// Destructuring via child component
export const ChildValue = ({ value }) => {
  return (
    <div>
      <h1>Child Component: {value}</h1>
    </div>
  );
};

const Button = ({ handleClick, label }) => {
  <Button oNClick={handleClick}>Click</Button>;
};

export const Siblings = () => {
  const [count, setTcount] = useState(50);
  // Parent Siblings networks
  const handleCount = (value) => {
    setTcount(count + value);
  };

  return (
    <>
      <div>
        <h1>Siblings</h1>
        <ChildValue value={count}></ChildValue>
        <Button label="-" handleClick={() => handleCount(-1)}></Button>
        <Button label="+" handleClick={() => handleCount(1)}></Button>
      </div>
    </>
  );
};
