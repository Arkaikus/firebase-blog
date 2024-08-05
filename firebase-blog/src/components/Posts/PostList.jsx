import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

export default PostList;