function UserCard({ user }) {

    return (
        <div className="card">

            <h3>{user.name}</h3>

            <p><strong>Email:</strong> {user.email}</p>

            <p><strong>Phone:</strong> {user.phone}</p>

            <p><strong>Website:</strong> {user.website}</p>

            <p><strong>City:</strong> {user.address.city}</p>

            <p><strong>Country:</strong> India</p>

        </div>
    );
}

export default UserCard;