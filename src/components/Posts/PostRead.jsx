import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore/lite';
import MDEditor from '@uiw/react-md-editor';

function PostRead({ db }) {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const docRef = doc(db, 'posts', postId);
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                setPost(doc.data());
            } else {
                navigate('/404');
            }
        }).catch((error) => {
            console.error('Error getting document:', error);
        });
    }, [db, postId, navigate]);

    if (!post) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            <MDEditor.Markdown source={post.title} style={{ background: 'unset' }} />
            <br />
            <MDEditor.Markdown source={post.body} style={{ background: 'unset' }} />
        </div>
    );
}

export default PostRead;