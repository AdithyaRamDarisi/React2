import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <section>
      <h2>User Profile</h2>

      {user ? (
        <>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Status: Logged In</p>
        </>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </section>
  );
}

export default Profile;