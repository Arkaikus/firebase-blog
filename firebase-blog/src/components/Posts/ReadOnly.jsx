import { useEffect, useState } from 'react';
import { useParams, useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import PostRead from './PostRead';

function PostList({ username, posts }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(() => {
        const filtered = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredPosts(filtered);
    }, [posts, searchTerm]);

    return (
        <>
            <input
                className="w-full p-2 mb-4 border border-indigo-500"
                type="text"
                placeholder="Search posts"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredPosts.map((post) => (
                <Link to={`/${username}/posts/${post.id}`} key={post.id}>
                    <h3>{post.title}</h3>
                </Link>
            ))}
        </>
    );
}

const ReadOnly = ({ db }) => {
    const { username } = useParams(); // Retrieve the username from the path parameter
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const profileRef = query(collection(db, 'profiles'), where('username', '==', username));
                const profileSnapshot = await getDocs(profileRef);
                if (profileSnapshot.empty) {
                    navigate('/404');
                    return;
                }
                const profile = profileSnapshot.docs[0].data();
                const q = query(collection(db, 'posts'), where('userId', '==', profile.userId));
                const snapshot = await getDocs(q);

                const fetchedPosts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setPosts(fetchedPosts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [db, username, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="flex">
                <div className="text-2xl">Posts by {username}</div>
                {(/.+\/posts$/).test(location.pathname)
                    && <button className="ms-auto" onClick={() => { navigate("/dashboard") }}>Go Home</button>}
                {(/.+\/posts\/.+/).test(location.pathname)
                    && <button className="ms-auto" onClick={() => { navigate(-1) }}>Go Back</button>}
            </div>

            <hr className="my-5" />
            <Routes>
                <Route path="/" element={<PostList username={username} posts={posts} />} />
                <Route path="/:postId" element={<PostRead db={db} />} />
            </Routes>
        </div>
    );
};

export default ReadOnly;