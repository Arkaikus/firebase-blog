import { useEffect, useState, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { SmallLoading, GreenLight, RedLight } from '../Loading';

const ollamaUrl = "https://ollama.local/";

function prompt(url, text) {
    return fetch(url, {
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
    try {
        let decodedChunk = new TextDecoder().decode(response);
        let chunkData = JSON.parse(decodedChunk);
        return chunkData.response;
    } catch (e) {
        console.error("Error parsing response", e, response);
        return "";
    }
}



function OllamaAvailable({ available, loading }) {
    if (loading) return <SmallLoading text="Checking Ollama availability..." />;
    return (available) ? <GreenLight text="Ollama Available" /> : <RedLight text="Ollama Unavailable" />;
}


function PostSave({ post, onSave, onCancel }) {
    const [postTitle, setPostTitle] = useState(post?.title || '');
    const [postBody, setPostBody] = useState(post?.body || '');
    const [generating, setGenerating] = useState(false);
    const [abort, setAbort] = useState(false);
    const [ollamaLoading, setOllamaLoading] = useState(false);
    const [ollamaAvailable, setOllamaAvailable] = useState(false);
    const lockRef = useRef(false); // Initialize the lock

    useEffect(() => {
        if (lockRef.current) return;
        lockRef.current = true;
        setOllamaLoading(true);
        console.log("Checking Ollama availability");
        fetch(ollamaUrl)
            .then(response => {
                console.log("Response", response);
                setOllamaAvailable(response.ok)
                setOllamaLoading(false);
            })
            .catch(console.log);

    }, []);

    const handleSave = () => {
        const postData = { title: postTitle, body: postBody };
        if (post) { postData.id = post.id; }
        onSave(postData);
    }
    const handleCancel = () => {
        setAbort(true);
        onCancel();
    }

    const handleGenerate = async () => {
        let title = '';
        let body = '';
        setGenerating(true);
        if (postBody === '') {
            alert("Please enter some text to generate a post");
            setGenerating(false);
            return;
        }

        const bodyResponse = await prompt(ollamaUrl, `Create a short text from the following idea: ${postBody}`);
        for await (const response of bodyResponse.body) {
            if (abort) break;
            body += parse_response(response);
            setPostBody(body);
        }

        const titleResponse = await prompt(ollamaUrl, `Create a title, no explanation, for the following text: ${body}`);
        for await (const response of titleResponse.body) {
            if (abort) break;
            title += parse_response(response);
            setPostTitle(title);
        }
        setGenerating(false);
        setAbort(false);
    }

    return (
        <div className='flex flex-col w-10/12 p-8 mx-auto mt-4 border border-indigo-300 h-fit rounded-xl' >
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
                height="50dvh"
                textareaProps={{
                    placeholder: 'Please enter Markdown text',
                }}
            />
            <div className="flex mt-5">
                {generating && <SmallLoading text="Generating..." />}
                {(ollamaAvailable && !generating) &&
                    <button onClick={handleGenerate}>Generate</button>
                }
                <OllamaAvailable className="mx-2" available={ollamaAvailable} loading={ollamaLoading} />
                <button className="ms-auto" onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default PostSave;