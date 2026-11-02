import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const { theme, toggleTheme, user, logout } =
    useContext(ThemeContext);

  return (
    <nav>
      <h2>Context API Application</h2>

      <div className="nav-actions">

        <span>Theme: {theme}</span>

        <button onClick={toggleTheme}>
          Toggle Theme
        </button>

        {user && (
          <button onClick={logout}>
            Logout
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;