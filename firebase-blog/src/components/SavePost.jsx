import { useState } from 'react';

function SavePost({ post, onSave, onClose }) {
    const [postTitle, setPostTitle] = useState(post.title || '');
    const [postBody, setPostBody] = useState(post.body || '');

    const handleClick = () => {
        const postData = { title: postTitle, body: postBody };
        if (post) {
            postData.id = post.id;
        }
        onSave(postData);
        onClose();
    }

    return (
        <div className='flex flex-col p-8 mt-2 w-5/12 border border-indigo-300 rounded-xl'>
            <h2 className="p-2">Save a Post</h2>
            <input
                type="text"
                className='my-2 p-2'
                placeholder="Enter post title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
                className='my-2 p-2'
                placeholder="Enter post body"
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
            ></textarea>
            <button onClick={handleClick}>Add Post</button>
            <button onClick={onClose}>Cancel</button>
            <hr className="mt-5" />
        </div>
    )
}

export default SavePost;