import { doc, deleteDoc } from 'firebase/firestore/lite';

function PostTable({ posts, onEdit, onDelete, db }) {
    const deletePost = async (postId) => {
        await deleteDoc(doc(db, 'posts', postId));
        onDelete();
    };

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
                            <button onClick={() => deletePost(post.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PostTable;