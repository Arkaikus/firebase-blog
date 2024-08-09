import MDEditor from '@uiw/react-md-editor';

function PostTable({ posts, onEdit, onDelete }) {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="w-3/5 p-2 text-2xl text-left">Title</div>
                <div className="w-2/5 p-2 text-2xl text-left">Actions</div>
            </div>
            <hr className="my-2" />
            {posts.map((post) => (
                <div className="flex" key={post.id}>
                    <div className="w-3/5 p-2 text-center">
                        <MDEditor.Markdown source={post.title} style={{ background: 'unset' }} />
                    </div>
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