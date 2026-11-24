import React from "react";

const MemoDemo = React.memo(function MemoDemo({ name }) {
  console.log("MemoDemo Rendered");

  return (
    <div className="demo-box">
      <h3>React.memo()</h3>
      <p>Name: {name}</p>
      <p>This component re-renders only when its props change.</p>
    </div>
  );
});

export default MemoDemo;