import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Profile() {

  const { user } = useContext(ThemeContext);

  return (
    <div className="card">

      <h2>User Profile</h2>

      <h3>Welcome, {user.name}!</h3>

      <p>Username: {user.name}</p>

      <p>Authentication Status: Logged In</p>

    </div>
  );
}

export default Profile;