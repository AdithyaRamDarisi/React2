import { useMemo, useState } from "react";

function UseMemoDemo() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const calculation = useMemo(() => {
    console.log("Expensive Calculation Executed");

    let result = 0;

    for (let i = 0; i < 1000000; i++) {
      result += number;
    }

    return result;
  }, [number]);

  return (
    <div className="demo-box">
      <h3>useMemo()</h3>

      <p>Number: {number}</p>
      <p>Calculation Result: {calculation}</p>
      <p>Unrelated Counter: {count}</p>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <p>
        The calculation runs only when the number changes,
        not when the counter changes.
      </p>
    </div>
  );
}

export default UseMemoDemo;