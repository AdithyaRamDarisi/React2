import { useAppContext } from "../context/AppContext";

function Navbar() {

    const {
        user,
        setUser,
        theme,
        toggleTheme
    } = useAppContext();

    return (

        <nav className="navbar">

            <h2>TaskFlow</h2>

            <div>

                <span>Welcome, {user}</span>

                <button
                    onClick={() =>
                        setUser(
                            user === "Adithya"
                                ? "Developer"
                                : "Adithya"
                        )
                    }
                >
                    Change User
                </button>

                <button onClick={toggleTheme}>
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>

            </div>

        </nav>

    );

}

export default Navbar;