import React from 'react';
import { Navigate } from 'react-router-dom';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore/lite';
import { getAuth, signOut } from 'firebase/auth';
import PostTable from './Posts/PostTable';
import PostSave from './Posts/PostSave';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPost: false,
            editingPost: null,
            logout: false,
        };
        this.auth = getAuth();
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        const { db } = this.props;
        const postsCollection = collection(db, 'posts');
        getDocs(postsCollection).then((postsSnapshot) => {
            const postsData = postsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            this.setState({ posts: postsData });
        });
    };

    savePost = async (post) => {
        const { db, user } = this.props;
        if (post.title.trim() !== '') {
            const postData = { userId: user.uid, title: post.title, body: post.body };
            if (post?.id) {
                await updateDoc(doc(db, 'posts', post.id), postData);
            } else {
                await addDoc(collection(db, 'posts'), postData);
            }
            this.fetchPosts();
            this.setState({ newPost: false, editingPost: null });
        }
    };

    deletePost = async (post) => {
        const { db } = this.props;
        await deleteDoc(doc(db, 'posts', post.id));
        this.fetchPosts();
    };

    handleSignOut = () => {
        signOut(this.auth).then(() => this.setState({ logout: true }));
    };

    render() {
        const { user } = this.props;
        const { posts, newPost, editingPost } = this.state;

        if (this.state.logout) {
            return <Navigate to="/login" />;
        }

        return (
            <div className="flex flex-col justify-center">
                <div className="flex justify-between">
                    <h1>Welcome, {user.displayName}</h1>
                    <button className="ms-auto" onClick={() => this.setState({ newPost: true })}>+ Add New Post</button>
                    <button onClick={this.handleSignOut}>Sign Out</button>
                </div>
                <hr className="my-5" />
                {newPost &&
                    <PostSave
                        post={null}
                        onSave={this.savePost}
                        onCancel={() => this.setState({ newPost: false })}
                    />
                }
                {editingPost &&
                    <PostSave
                        post={editingPost}
                        onSave={this.savePost}
                        onCancel={() => this.setState({ editingPost: null })}
                    />
                }
                {
                    !(newPost || editingPost) &&
                    <PostTable
                        posts={posts}
                        onEdit={(post) => this.setState({ editingPost: post })}
                        onDelete={this.deletePost}
                    />
                }
            </div>
        );
    }
}

export default Dashboard;