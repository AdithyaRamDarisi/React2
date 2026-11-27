import React from "react";

const UserCard = React.memo(function UserCard({
  user,
  onEdit,
  onPatch,
  onDelete,
}) {
  console.log("Rendering UserCard:", user.name);

  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>

      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <span>{user.company?.name || "No Company"}</span>
      </div>

      <div className="user-actions">
        <button className="edit-btn" onClick={() => onEdit(user)}>
          PUT
        </button>

        <button className="patch-btn" onClick={() => onPatch(user)}>
          PATCH
        </button>

        <button className="delete-btn" onClick={() => onDelete(user.id)}>
          DELETE
        </button>
      </div>
    </div>
  );
});

export default UserCard;