import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore/lite';
import { signOut } from 'firebase/auth';


function Dashboard({ auth, db, user }) {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
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

  const deletePost = async (postId) => {
    await deleteDoc(doc(db, 'posts', postId));
    fetchPosts();
  };

  const updatePost = async (postId, newTitle) => {
    await updateDoc(doc(db, 'posts', postId), { title: newTitle });
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
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <input
              type="text"
              value={post.title}
              onChange={(e) => updatePost(post.id, e.target.value)}
            />
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;