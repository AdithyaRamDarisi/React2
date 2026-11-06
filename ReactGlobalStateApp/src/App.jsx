import UserList from "./components/UserList";

import ThemeToggle from "./components/ThemeToggle";

import { useTheme } from "./context/ThemeContext";

function App() {

    const { theme } = useTheme();

    return (

        <div className={theme}>

            <h1>React Global State Management</h1>

            <ThemeToggle />

            <hr />

            <UserList />

        </div>

    );

}

export default App;