
function PostTable({ posts, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>
                            <button onClick={() => onEdit(post)}>Edit</button>
                            <button onClick={() => onDelete(post)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PostTable;