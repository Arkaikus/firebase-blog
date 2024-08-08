
function PostTable({ posts, onEdit, onDelete }) {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="w-3/5 p-2 text-center">Title</div>
                <div className="w-2/5 p-2 text-center">Actions</div>
            </div>
            {posts.map((post) => (
                <div className="flex" key={post.id}>
                    <div className="w-3/5 p-2 text-center">{post.title}</div>
                    <div className="w-2/5 p-2 text-center">
                        <button onClick={() => onEdit(post)}>Edit</button>
                        <button onClick={() => onDelete(post)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostTable;