import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore/lite';
import { getAuth, signOut } from 'firebase/auth';
import PostTable from './PostTable';
import SavePost from './SavePost';


function Dashboard({ db, user }) {
    const auth = getAuth();
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState(null);
    const [editingPost, setEditingPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => { fetchPosts() });

    const fetchPosts = async () => {
        const postsCollection = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        const postsData = postsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts(postsData);
    };

    const savePost = async (post) => {
        if (post.title.trim() !== '') {
            const postData = { userId: user.uid, title: post.title, body: post.body };
            if (post?.id) {
                await updateDoc(doc(db, 'posts', post.id), postData);
            } else {
                await addDoc(collection(db, 'posts'), postData);
            }
        }
    };

    const deletePost = async (post) => {
        await deleteDoc(doc(db, 'posts', post.id));
        fetchPosts();
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex justify-between">
                <h1>Welcome, {user.displayName}</h1>
                <button className='ms-auto mx-2' onClick={() => setNewPost(true)}>+ Add New Post</button>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
            {newPost && (
                <SavePost
                    onSave={savePost}
                    onClose={() => { setNewPost(null) }}
                />
            )}
            <PostTable
                posts={posts}
                onEdit={setEditingPost}
                onDelete={deletePost}
            />
            {editingPost && (
                <SavePost
                    post={editingPost}
                    onSave={savePost}
                    onClose={() => { setEditingPost(null) }}
                />
            )}
        </div>
    );
}

export default Dashboard;