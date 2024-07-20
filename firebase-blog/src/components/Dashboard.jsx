import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { signOut } from 'firebase/auth';
import PostTable from './PostTable';
import EditModal from './EditModal';

function Dashboard({ auth, db, user }) {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [editingPost, setEditingPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const postsCollection = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        const postsData = postsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts(postsData);
    };

    const addPost = async () => {
        if (newPostTitle.trim() !== '') {
            const newPost = { title: newPostTitle, userId: user.uid };
            await addDoc(collection(db, 'posts'), newPost);
            setNewPostTitle('');
            fetchPosts();
        }
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
            <h1>Dashboard</h1>
            <p>Welcome, {user.displayName}</p>
            <button onClick={handleSignOut}>Sign Out</button>
            <div>
                <input
                    type="text"
                    placeholder="Enter post title"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                />
                <button onClick={addPost}>Add Post</button>
            </div>
            <PostTable
                posts={posts}
                onEdit={setEditingPost}
                onDelete={fetchPosts}
                db={db}
            />
            {editingPost && (
                <EditModal
                    post={editingPost}
                    onClose={() => setEditingPost(null)}
                    onSave={fetchPosts}
                    db={db}
                />
            )}
        </div>
    );
}

export default Dashboard;