import useWindowSize from "../hooks/useWindowSize";

function WindowInfo() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Browser Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>

      {width < 768 ? (
        <h3>Mobile / Small Screen View</h3>
      ) : (
        <h3>Desktop View</h3>
      )}
    </div>
  );
}

export default WindowInfo;