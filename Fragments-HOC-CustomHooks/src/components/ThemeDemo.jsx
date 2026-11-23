import useTheme from "../hooks/useTheme";

function ThemeDemo() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#eee",
        color: darkMode ? "white" : "black",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{darkMode ? "Dark Theme" : "Light Theme"}</h2>

      <p>This component uses a Custom Hook.</p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeDemo;