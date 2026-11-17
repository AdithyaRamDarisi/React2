import { useState, useEffect } from "react";

import UserCard from "./components/UserCard";
import PostCard from "./components/PostCard";

import { fetchUsers, fetchPosts } from "./services/api";

import "./App.css";

function App() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const [activeTab, setActiveTab] = useState("users");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    // Fetch Users
    const loadUsers = async () => {

        try {
            setLoading(true);
            setError("");

            const data = await fetchUsers();

            setUsers(data);

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);
        }
    };

    // Fetch Posts
    const loadPosts = async () => {

        try {
            setLoading(true);
            setError("");

            const data = await fetchPosts();

            setPosts(data);

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);
        }
    };

    // useEffect
    useEffect(() => {

        loadUsers();

    }, []);

    // Switch between Users and Posts
    const handleTabChange = (tab) => {

        setActiveTab(tab);
        setSearch("");

        if (tab === "users") {
            loadUsers();
        } else {
            loadPosts();
        }
    };

    // Search Users
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    // Search Posts
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="container">

            <h1>Users & Posts Dashboard</h1>

            <p className="subtitle">
                React API Integration Practice
            </p>

            {/* Navigation Buttons */}

            <div className="tabs">

                <button
                    className={activeTab === "users" ? "active" : ""}
                    onClick={() => handleTabChange("users")}
                >
                    Users
                </button>

                <button
                    className={activeTab === "posts" ? "active" : ""}
                    onClick={() => handleTabChange("posts")}
                >
                    Posts
                </button>

            </div>

            {/* Search */}

            <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search"
            />

            {/* Refresh Button */}

            <button
                className="refresh"
                onClick={activeTab === "users" ? loadUsers : loadPosts}
            >
                Refresh Data
            </button>

            {/* Total Records */}

            <h3>
                Total {activeTab === "users" ? "Users" : "Posts"}:{" "}
                {activeTab === "users"
                    ? filteredUsers.length
                    : filteredPosts.length}
            </h3>

            {/* Loading State */}

            {loading && <h2 className="loading">Loading Data...</h2>}

            {/* Error State */}

            {error && <h2 className="error">{error}</h2>}

            {/* Users */}

            {!loading && !error && activeTab === "users" && (

                <div className="card-container">

                    {filteredUsers.length > 0 ? (

                        filteredUsers.map(user => (
                            <UserCard
                                key={user.id}
                                user={user}
                            />
                        ))

                    ) : (

                        <h3>No Users Found</h3>

                    )}

                </div>
            )}

            {/* Posts */}

            {!loading && !error && activeTab === "posts" && (

                <div className="card-container">

                    {filteredPosts.length > 0 ? (

                        filteredPosts.map(post => (
                            <PostCard
                                key={post.id}
                                post={post}
                            />
                        ))

                    ) : (

                        <h3>No Posts Found</h3>

                    )}

                </div>
            )}

        </div>
    );
}

export default App;