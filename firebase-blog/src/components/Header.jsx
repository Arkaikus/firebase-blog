import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Header({ user, children }) {
    const auth = getAuth();
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => navigate('/login'));
    };

    return (
        <div className="flex flex-wrap justify-between align-middle">
            <img src={user.photoURL} className="w-8 h-8 mx-2 ml-2 rounded-full" />
            <div className="text-2xl me-auto"> Welcome, {user.displayName}</div>
            {children}
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default Header;
