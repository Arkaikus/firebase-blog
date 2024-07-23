import { useState } from 'react';

function PostSave({ post, onSave, onCancel }) {
    const [postTitle, setPostTitle] = useState(post?.title || '');
    const [postBody, setPostBody] = useState(post?.body || '');

    const handleClick = () => {
        const postData = { title: postTitle, body: postBody };
        if (post) { postData.id = post.id; }
        onSave(postData);
    }

    return (
        <div className='flex flex-col w-5/12 p-8 mx-auto mt-4 border border-indigo-300 rounded-xl'>
            <h2 className="p-2">Save a Post</h2>
            <input
                type="text"
                className='p-2 my-2'
                placeholder="Enter post title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
                className='p-2 my-2'
                placeholder="Enter post body"
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
            ></textarea>
            <div className="flex">
                <button className="ms-auto" onClick={handleClick}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>

            <hr className="mt-5" />
        </div>
    )
}

export default PostSave;