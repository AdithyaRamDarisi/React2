import { useState } from "react";

function PerformanceDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="section-tag">PERFORMANCE LAB</span>
        <h1>Performance Demo</h1>
        <p>Explore component rendering and lazy loading.</p>
      </div>

      <div className="demo-card">
        <h2>Component Loaded Successfully</h2>
        <p>
          This component can be loaded normally or dynamically
          using React.lazy().
        </p>

        <div className="counter-display">{count}</div>

        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
    );
}

export default PerformanceDemo;