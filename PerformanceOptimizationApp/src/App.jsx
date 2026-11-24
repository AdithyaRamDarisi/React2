import { useState } from "react";

import NormalComponent from "./components/NormalComponent";
import PureComponentDemo from "./components/PureComponentDemo";
import MemoDemo from "./components/MemoDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("App Rendered");

  return (
    <div className="app">
      <header className="header">
        <h1>React Performance Optimization</h1>
        <p>Explore rendering behaviour and memoization</p>
      </header>

      <section className="dashboard">
        <div className="main-counter">
          <h2>Parent Counter</h2>

          <h1>{count}</h1>

          <button onClick={() => setCount(count + 1)}>
            Increase Parent Counter
          </button>

          <p>
            Increasing this counter re-renders the App component.
            Observe the console to see which child components render.
          </p>
        </div>

        <div className="comparison-grid">
          <NormalComponent name="Adithya" />

          <PureComponentDemo name="Adithya" age={23} />

          <MemoDemo name="Adithya" />

          <UseMemoDemo />

          <UseCallbackDemo />
        </div>
      </section>

      <footer>
        <p>React Performance Optimization Mini Assignment</p>
      </footer>
    </div>
  );
}

export default App;