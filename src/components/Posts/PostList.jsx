import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from "react-icons/fa";
import MDEditor from '@uiw/react-md-editor';

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
            <div className="flex flex-col">
                {filteredPosts.map((post) => (
                    <Link className="flex my-2" to={`/${username}/posts/${post.id}`} key={post.id}>
                        <FaBook className="text-2xl me-2" />
                        <MDEditor.Markdown source={post.title} style={{ background: 'unset' }} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default PostList;