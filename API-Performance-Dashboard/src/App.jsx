import { useEffect, useState, useCallback } from "react";

import UserCard from "./components/UserCard";
import StatsPanel from "./components/StatsPanel";
import MethodPanel from "./components/MethodPanel";
import Toast from "./components/Toast";

import {
  fetchUsers,
  fetchUsersAxios,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
} from "./services/userService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [requestCount, setRequestCount] = useState(0);
  const [lastMethod, setLastMethod] = useState("NONE");

  const [toast, setToast] = useState({
    message: "",
    type: "success",
  });

  // Toast message
  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast({ message: "", type: "success" });
    }, 3000);
  };

  // Request tracker
  const trackRequest = (method) => {
    setRequestCount((previous) => previous + 1);
    setLastMethod(method);
  };

  // GET - Fetch API
  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError("");

    trackRequest("GET - FETCH");

    try {
      const data = await fetchUsers();
      setUsers(data);

      showToast("Users fetched using Fetch API!");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  }, []);

  // GET - Axios
  const loadUsersAxios = useCallback(async () => {
    setLoading(true);
    setError("");

    trackRequest("GET - AXIOS");

    try {
      const data = await fetchUsersAxios();
      setUsers(data);

      showToast("Users fetched using Axios!");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  }, []);

  // API call using useEffect
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  // POST
  const handleAddUser = async () => {
    setLoading(true);
    setError("");

    trackRequest("POST");

    const newUser = {
      name: "New React User",
      username: "reactuser",
      email: "reactuser@example.com",
      company: {
        name: "React Learning",
      },
    };

    try {
      const data = await createUser(newUser);

      setUsers((previous) => [
        { ...data, id: Date.now() },
        ...previous,
      ]);

      showToast("POST: User created successfully!");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // PUT
  const handleEditUser = async (user) => {
    setLoading(true);
    setError("");

    trackRequest("PUT");

    const updatedUser = {
      ...user,
      name: user.name + " (Updated)",
      email: user.email,
      username: user.username,
      company: user.company,
    };

    try {
      const data = await replaceUser(user.id, updatedUser);

      setUsers((previous) =>
        previous.map((item) =>
          item.id === user.id
            ? { ...item, ...data }
            : item
        )
      );

      showToast("PUT: User completely updated!");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // PATCH
  const handlePatchUser = async (user) => {
    setLoading(true);
    setError("");

    trackRequest("PATCH");

    const partialUpdate = {
      name: user.name + " (Patched)",
    };

    try {
      const data = await updateUser(user.id, partialUpdate);

      setUsers((previous) =>
        previous.map((item) =>
          item.id === user.id
            ? { ...item, ...data }
            : item
        )
      );

      showToast("PATCH: User name partially updated!");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const handleDeleteUser = async (id) => {
    setLoading(true);
    setError("");

    trackRequest("DELETE");

    try {
      await deleteUser(id);

      setUsers((previous) =>
        previous.filter((user) => user.id !== id)
      );

      showToast("DELETE: User removed successfully!");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Search
  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <Toast message={toast.message} type={toast.type} />

      <header className="header">
        <div>
          <p className="eyebrow">REACT LAB / 2026</p>
          <h1>
            API <span>Dashboard</span>
          </h1>
          <p className="subtitle">
            API integration, HTTP methods & performance monitoring
          </p>
        </div>

        <div className="live-status">
          <span className="status-dot"></span>
          SYSTEM ACTIVE
        </div>
      </header>

      <StatsPanel
        totalUsers={users.length}
        requestCount={requestCount}
        method={lastMethod}
      />

      <section className="control-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HTTP OPERATIONS</p>
            <h2>Request Console</h2>
          </div>
        </div>

        <MethodPanel
          onFetch={loadUsers}
          onFetchAxios={loadUsersAxios}
          onAdd={handleAddUser}
        />

        <p className="method-hint">
          PUT replaces a user's data · PATCH updates only selected fields
          · DELETE removes a user
        </p>
      </section>

      <section className="users-section">
        <div className="users-header">
          <div>
            <p className="eyebrow">DATABASE / USERS</p>
            <h2>User Directory</h2>
          </div>

          <div className="user-count">
            {filteredUsers.length} RECORDS
          </div>
        </div>

        <input
          type="text"
          className="search-input"
          placeholder="Search users by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading && (
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Communicating with API...</p>
          </div>
        )}

        {error && (
          <div className="error-box">
            ERROR: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="user-list">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={handleEditUser}
                onPatch={handlePatchUser}
                onDelete={handleDeleteUser}
              />
            ))}

            {filteredUsers.length === 0 && (
              <div className="empty-state">
                No users found.
              </div>
            )}
          </div>
        )}
      </section>

      <footer>
        <p>BUILT WITH REACT · FETCH · AXIOS · MEMO</p>
      </footer>
    </div>
  );
}

export default App;