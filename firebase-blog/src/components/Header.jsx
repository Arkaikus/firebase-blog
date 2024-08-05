import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useProfile } from './Profile/ProfileProvider';
import { FaUser } from "react-icons/fa";

function Header() {
    const { user, profile } = useProfile();
    const auth = getAuth();
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => navigate('/login'));
    };

    return (
        <div className="flex flex-wrap justify-between align-middle">
            <img src={user.photoURL} className="w-8 h-8 mx-2 ml-2 rounded-full" />
            <div className="text-2xl me-auto"> Welcome, {user.displayName}</div>
            <button className='ms-auto' onClick={() => navigate(`/${profile.username}/posts`)}>Page</button>
            <button onClick={() => navigate("/dashboard/new")}>+ Add New Post</button>
            <button className="flex items-center w-fit" onClick={() => navigate("profile")}>
                <FaUser className="me-1" /> Profile
            </button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default Header;
