import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {

    const { theme, toggleTheme } = useTheme();

    return (

        <div>

            <h3>Current Theme: {theme}</h3>

            <button onClick={toggleTheme}>
                Toggle Theme
            </button>

        </div>

    );

}

export default ThemeToggle;