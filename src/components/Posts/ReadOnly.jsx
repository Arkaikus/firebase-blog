import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import { useSession } from '../../providers/SessionProvider';
import PostRead from './PostRead';
import PostList from './PostList';
import Loading from '../Loading';


const ReadOnly = () => {
    const { db } = useSession();
    const { username } = useParams(); // Retrieve the username from the path parameter
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const lockRef = useRef(false);
    useEffect(() => {
        if (lockRef.current) return;
        lockRef.current = true;
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

    if (loading) return <Loading />;
    return (
        <div className="p-8">
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