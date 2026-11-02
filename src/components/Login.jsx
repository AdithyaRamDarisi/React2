import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Login() {

  const { login } = useContext(ThemeContext);

  const [username, setUsername] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.trim() === "") {
      alert("Please enter your username");
      return;
    }

    login(username.trim());
  };

  return (
    <div className="card">

      <h2>User Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;