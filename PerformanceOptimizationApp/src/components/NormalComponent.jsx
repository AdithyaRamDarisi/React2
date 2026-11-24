function NormalComponent({ name }) {
  console.log("NormalComponent Rendered");

  return (
    <div className="demo-box">
      <h3>Normal Component</h3>
      <p>Name: {name}</p>
      <p>This component re-renders whenever its parent renders.</p>
    </div>
  );
}

export default NormalComponent;