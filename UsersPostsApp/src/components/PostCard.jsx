function PostCard({ post }) {

    return (
        <div className="card">

            <h3>{post.title}</h3>

            <p>{post.body}</p>

            <span>User ID: {post.userId}</span>

        </div>
    );
}

export default PostCard;