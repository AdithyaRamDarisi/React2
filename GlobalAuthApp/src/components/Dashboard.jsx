import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import Login from "./Login";
import Profile from "./Profile";

function Dashboard() {

  const { user, theme } = useContext(ThemeContext);

  return (
    <main className={`dashboard ${theme}`}>

      <h1>Dashboard</h1>

      {user ? <Profile /> : <Login />}

    </main>
  );
}

export default Dashboard;