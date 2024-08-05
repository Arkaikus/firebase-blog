import { useState, useEffect, useMemo } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import PostTable from './Posts/PostTable';
import PostSave from './Posts/PostSave';
import Header from './Header';
import PostManager from './Posts/PostManager';
import Profile from './Profile/Profile';
import { ProfileProvider } from './Profile/ProfileProvider';

function Dashboard(props) {
    const { user, db } = props;
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const postManager = useMemo(() => new PostManager(db, user), [db, user]);
    const navigate = useNavigate();

    useEffect(() => {
        postManager.fetchPosts().then((fetchedPosts) => setPosts(fetchedPosts))
    }, [postManager]);


    const handleSave = (post) => {
        postManager.savePost(post)
            .then(() => postManager.fetchPosts())
            .then(fetchedPosts => {
                setPosts(fetchedPosts);
                setEditingPost(null);
                navigate("/dashboard");
            });
    }

    return (
        <ProfileProvider db={db} user={user}>
            <div className="flex flex-col h-full">
                <Header user={user}>
                    <button className="ms-auto" onClick={() => navigate("/dashboard/new")}>+ Add New Post</button>
                    <button className="flex items-center w-fit" onClick={() => navigate("profile")}>
                        <FaUser className="me-1" /> Profile
                    </button>
                </Header>
                <hr className="my-5" />
                <Routes>
                    <Route path="/new" element={
                        <PostSave
                            post={null}
                            onSave={handleSave}
                            onCancel={() => navigate("/dashboard")}
                        />
                    } />
                    <Route path="/edit/:id" element={
                        <PostSave
                            post={editingPost}
                            onSave={handleSave}
                            onCancel={() => { setEditingPost(null); navigate("/dashboard") }}
                        />
                    } />
                    <Route path="" element={
                        <PostTable
                            posts={posts}
                            onEdit={(post) => {
                                setEditingPost(post);
                                navigate(`/dashboard/edit/${post.id}`);
                            }}
                            onDelete={(post) => {
                                postManager.deletePost(post)
                                    .then(() => postManager.fetchPosts())
                                    .then((fetchedPosts) => setPosts(fetchedPosts));
                            }}
                        />
                    } />

                    <Route path="profile" element={<Profile />} />
                </Routes>
            </div>
        </ProfileProvider>
    );
}


export default Dashboard;