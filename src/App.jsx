import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Indian Names
  const indianNames = [
    "Adithya Ram",
    "Rahul Sharma",
    "Priya Reddy",
    "Arjun Kumar",
    "Sneha Patel",
    "Vikram Singh",
    "Ananya Rao",
    "Karthik Varma",
    "Pooja Mehta",
    "Rohit Verma"
  ];

  // Indian Cities
  const indianCities = [
    "Ongole",
    "Hyderabad",
    "Vijayawada",
    "Visakhapatnam",
    "Bengaluru",
    "Chennai",
    "Mumbai",
    "New Delhi",
    "Pune",
    "Kolkata"
  ];

  // Fetch Users from API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      // Replace API names and cities
      const updatedUsers = data.map((person, index) => ({
        ...person,
        name: indianNames[index],
        address: {
          ...person.address,
          city: indianCities[index]
        }
      }));

      setUsers(updatedUsers);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Users when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // Search and Filter Users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesCity =
      selectedCity === "All" ||
      user.address.city === selectedCity;

    return matchesSearch && matchesCity;
  });

  // Get Unique Cities
  const cities = [
    ...new Set(users.map((user) => user.address.city))
  ];

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>Indian User Management</h1>
        <p>Fetch, Search and Filter Indian Users</p>
      </header>

      <div className="container">

        {/* Search and Filter */}
        <div className="controls">

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
          >
            <option value="All">All Cities</option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <button onClick={fetchUsers}>
            Refresh
          </button>

        </div>

        {/* User Count */}
        <h3 className="count">
          Total Users: {filteredUsers.length}
        </h3>

        {/* Loading */}
        {loading && (
          <h2 className="message">
            Loading Users...
          </h2>
        )}

        {/* Error */}
        {error && (
          <div className="error">
            <p>{error}</p>

            <button onClick={fetchUsers}>
              Try Again
            </button>
          </div>
        )}

        {/* User Cards */}
        {!loading && !error && (
          <div className="user-grid">

            {filteredUsers.length > 0 ? (

              filteredUsers.map((user) => (

                <div className="user-card" key={user.id}>

                  <div className="avatar">
                    {user.name.charAt(0)}
                  </div>

                  <h2>{user.name}</h2>

                  <p>
                    <strong>Username:</strong> {user.username}
                  </p>

                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>

                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>

                  <p>
                    <strong>City:</strong> {user.address.city}
                  </p>

                  <p>
                    <strong>Company:</strong> {user.company.name}
                  </p>

                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>

                </div>

              ))

            ) : (

              <h2 className="message">
                No Users Found
              </h2>

            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default App;