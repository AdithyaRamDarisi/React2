import React, { useCallback, useState } from "react";

const ChildButton = React.memo(function ChildButton({ onClick }) {
  console.log("ChildButton Rendered");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child Button Clicked");
    alert("Child button clicked!");
  }, []);

  console.log("UseCallbackDemo Rendered");

  return (
    <div className="demo-box">
      <h3>useCallback()</h3>

      <p>Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <ChildButton onClick={handleClick} />

      <p>
        The child component avoids unnecessary re-renders
        because the function reference remains the same.
      </p>
    </div>
  );
}

export default UseCallbackDemo;