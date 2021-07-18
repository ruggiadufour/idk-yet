import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add{count}
      </button>
    </>
  );
};

export default Counter;
