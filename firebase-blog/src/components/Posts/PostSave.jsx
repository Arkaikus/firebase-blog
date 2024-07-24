import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function prompt(text) {
    return fetch('http://127.0.0.1:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: "gemma:7b",
            prompt: text,
            stream: true,
        })
    })
}

function parse_response(response) {
    let decodedChunk = new TextDecoder().decode(response);
    let chunkData = JSON.parse(decodedChunk);
    return chunkData.response;
}


function PostSave({ post, onSave, onCancel }) {
    const [postTitle, setPostTitle] = useState(post?.title || '');
    const [postBody, setPostBody] = useState(post?.body || '');
    const [generating, setGenerating] = useState(false);
    const abort = new AbortController();
    // const mdParser = new MarkdownIt(/* Markdown-it options */);

    const handleSave = () => {
        const postData = { title: postTitle, body: postBody };
        if (post) { postData.id = post.id; }
        onSave(postData);
    }
    const handleCancel = () => {
        abort.abort();
        onCancel();
    }

    const handleGenerate = async () => {
        let title = '';
        let body = '';
        setGenerating(true);
        const bodyResponse = await prompt(`Create a short text from the following idea: ${postBody}`);
        for await (const response of bodyResponse.body) {
            if (abort.signal.aborted) break;
            body += parse_response(response);
            setPostBody(body);
        }

        const titleResponse = await prompt(`Create a title for the following text: ${body}`);
        for await (const response of titleResponse.body) {
            if (abort.signal.aborted) break;
            title += parse_response(response);
            setPostTitle(title);
        }
        setGenerating(false);
    }

    return (
        <div className='flex flex-col w-10/12 p-8 mx-auto mt-4 border border-indigo-300 h-5/6 rounded-xl' >
            <h2 className="p-2">Save a Post</h2>
            <input
                type="text"
                className='p-2 my-2'
                placeholder="Enter post title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <MDEditor
                value={postBody}
                onChange={setPostBody}
                height="100%"
                textareaProps={{
                    placeholder: 'Please enter Markdown text',
                }}
            />
            <div className="flex mt-5">
                <button onClick={handleGenerate}>Generate</button>
                {generating && <button onClick={() => abort.abort()}>Stop</button>}
                <button className="ms-auto" onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default PostSave;