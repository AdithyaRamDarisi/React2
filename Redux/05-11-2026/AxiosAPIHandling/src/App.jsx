import { useState, useEffect } from "react";

import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "./services/api";

import "./App.css";

function App() {

    // USERS STATE
    const [users, setUsers] = useState([]);

    // FORM STATE
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "Development"
    });

    // EDIT STATE
    const [editingId, setEditingId] = useState(null);

    // SEARCH STATE
    const [search, setSearch] = useState("");

    // FILTER STATE
    const [filter, setFilter] = useState("All");

    // LOADING STATE
    const [loading, setLoading] = useState(false);

    // ERROR STATE
    const [error, setError] = useState("");

    // SUCCESS STATE
    const [success, setSuccess] = useState("");


    // READ - FETCH USERS

    const fetchUsers = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await getUsers();

            setUsers(response.data);

        } catch (err) {

            setError("Failed to fetch users.");

            console.log(err);

        } finally {

            setLoading(false);

        }

    };


    // FETCH USERS WHEN COMPONENT LOADS

    useEffect(() => {

        fetchUsers();

    }, []);


    // HANDLE INPUT CHANGES

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({

            ...formData,

            [name]: value

        });

    };


    // CREATE AND UPDATE USER

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setError("");
            setSuccess("");

            if (editingId !== null) {

                // UPDATE USER

                const response = await updateUser(
                    editingId,
                    formData
                );

                setUsers((previousUsers) =>
                    previousUsers.map((user) =>
                        user.id === editingId
                            ? response.data
                            : user
                    )
                );

                setSuccess("User updated successfully!");

                setEditingId(null);

            } else {

                // CREATE USER

                const response = await createUser(formData);

                setUsers((previousUsers) => [
                    ...previousUsers,
                    response.data
                ]);

                setSuccess("User created successfully!");

            }

            // RESET FORM

            setFormData({

                name: "",
                email: "",
                department: "Development"

            });

        } catch (err) {

            setError("Failed to save user.");

            console.log(err);

        }

    };


    // EDIT USER

    const handleEdit = (user) => {

        setFormData({

            name: user.name,

            email: user.email,

            department: user.department

        });

        setEditingId(user.id);

        setSuccess("");
        setError("");

    };


    // DELETE USER

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        try {

            setError("");
            setSuccess("");

            await deleteUser(id);

            setUsers((previousUsers) =>
                previousUsers.filter(
                    (user) => user.id !== id
                )
            );

            setSuccess("User deleted successfully!");

        } catch (err) {

            setError("Failed to delete user.");

            console.log(err);

        }

    };


    // CANCEL EDIT

    const handleCancel = () => {

        setEditingId(null);

        setFormData({

            name: "",
            email: "",
            department: "Development"

        });

    };


    // SEARCH AND FILTER

    const filteredUsers = users.filter((user) => {

        const matchesSearch =

            user.name.toLowerCase().includes(
                search.toLowerCase()
            ) ||

            user.email.toLowerCase().includes(
                search.toLowerCase()
            );

        const matchesFilter =

            filter === "All" ||
            user.department === filter;

        return matchesSearch && matchesFilter;

    });


    // UI

    return (

        <div className="container">

            <h1>User Management System</h1>

            <p className="subtitle">
                Manage users with Axios CRUD Operations
            </p>


            {/* FORM */}

            <div className="form-container">

                <h2>
                    {editingId !== null
                        ? "Update User"
                        : "Add New User"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    >

                        <option value="Development">
                            Development
                        </option>

                        <option value="Testing">
                            Testing
                        </option>

                        <option value="Design">
                            Design
                        </option>

                        <option value="HR">
                            HR
                        </option>

                    </select>

                    <button type="submit">
                        {editingId !== null
                            ? "Update User"
                            : "Add User"}
                    </button>

                    {editingId !== null && (

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                    )}

                </form>

            </div>


            {/* SUCCESS MESSAGE */}

            {success && (
                <p className="success">
                    {success}
                </p>
            )}


            {/* ERROR MESSAGE */}

            {error && (
                <p className="error">
                    {error}
                </p>
            )}


            {/* SEARCH AND FILTER */}

            <div className="controls">

                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >

                    <option value="All">
                        All Departments
                    </option>

                    <option value="Development">
                        Development
                    </option>

                    <option value="Testing">
                        Testing
                    </option>

                    <option value="Design">
                        Design
                    </option>

                    <option value="HR">
                        HR
                    </option>

                </select>

            </div>


            {/* USERS LIST */}

            <h2>Users List</h2>

            {loading && (
                <p className="loading">
                    Loading users...
                </p>
            )}

            {!loading && filteredUsers.length === 0 && (
                <p className="empty">
                    No users found.
                </p>
            )}

            <div className="user-list">

                {filteredUsers.map((user) => (

                    <div className="user-card" key={user.id}>

                        <h3>{user.name}</h3>

                        <p>{user.email}</p>

                        <span>{user.department}</span>

                        <div className="actions">

                            <button
                                className="edit-btn"
                                onClick={() => handleEdit(user)}
                            >
                                Edit
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(user.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>


            {/* TOTAL USERS */}

            <p className="total">
                Total Users: {filteredUsers.length}
            </p>

        </div>

    );

}

export default App;