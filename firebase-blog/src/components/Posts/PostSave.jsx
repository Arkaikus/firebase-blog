import { useEffect, useState, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';

function prompt(text) {
    return fetch('http://ollama.local/api/generate', {
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

function Generating() {
    return (
        <div role="status" className="flex flex-row items-center align-middle">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 me-4 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            Generating...
        </div>
    )
}

function AIAvailable({ available }) {
    if (available) {

        return (
            <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                Ollama Available
            </div>
        )
    } else {
        return (
            <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-red-500 rounded-full"></div>
                Ollama Unavailable
            </div>
        )
    }
}


function PostSave({ post, onSave, onCancel }) {
    const [postTitle, setPostTitle] = useState(post?.title || '');
    const [postBody, setPostBody] = useState(post?.body || '');
    const [generating, setGenerating] = useState(false);
    const [abort, setAbort] = useState(false);
    const [ollamaAvailable, setOllamaAvailable] = useState(false);
    const lockRef = useRef(false); // Initialize the lock

    useEffect(() => {
        if (lockRef.current) return;
        lockRef.current = true;
        console.log("Checking if Ollama is available");
        fetch("http://ollama.local/", {
            signal: AbortSignal.timeout(10000),
        })
            .then(response => {
                console.log("Response", response);
                setOllamaAvailable(response.ok)
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

        const bodyResponse = await prompt(`Create a short text from the following idea: ${postBody}`);
        for await (const response of bodyResponse.body) {
            if (abort) break;
            body += parse_response(response);
            setPostBody(body);
        }

        const titleResponse = await prompt(`Create a title, no explanation, for the following text: ${body}`);
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
                {generating && <Generating />}
                {(ollamaAvailable && !generating) &&
                    <button onClick={handleGenerate}>Generate</button>
                }
                <AIAvailable className="mx-2" available={ollamaAvailable} />
                <button className="ms-auto" onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default PostSave;