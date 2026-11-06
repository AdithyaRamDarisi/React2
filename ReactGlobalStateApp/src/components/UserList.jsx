import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../features/users/userSlice";

import UserCard from "./UserCard";

function UserList() {

    const dispatch = useDispatch();

    const { users, loading, error, status } = useSelector(
        (state) => state.users
    );

    useEffect(() => {

        dispatch(fetchUsers());

    }, [dispatch]);

    return (

        <div>

            <h2>User Management</h2>

            {loading && <h3>Loading Users...</h3>}

            {error && <h3>Error: {error}</h3>}

            {status === "succeeded" && (

                <h3>Users Loaded Successfully!</h3>

            )}

            {users.map((user) => (

                <UserCard key={user.id} user={user} />

            ))}

            <button onClick={() => dispatch(fetchUsers())}>
                Refresh Users
            </button>

        </div>

    );

}

export default UserList;