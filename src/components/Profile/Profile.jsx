import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../providers/SessionProvider';

function Profile() {
    const { user, profile, setProfile, saveProfile } = useSession();
    const [userEditable, setUserEditable] = useState(false);
    const navigate = useNavigate();

    const handleSave = () => {
        saveProfile();
        setUserEditable(false);
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    const handleUsernameChange = (e) => {
        setProfile({ ...profile, username: e.target.value });
    };

    const handleUserEdit = () => {
        if (profile.tries === 0) {
            alert("You have already changed your username once");
            return;
        }
        if (window.confirm("Can only change username once, sure?")) {
            setProfile({ ...profile, tries: 0 });
            setUserEditable(true);
        }
    };

    return (
        <div className='flex flex-col w-6/12 p-8 mx-auto mt-4 border border-indigo-300 h-fit rounded-xl'>
            <h2 className="p-2">Edit Profile</h2>
            <div className='p-2 my-2'>Name: {user?.displayName}</div>
            <div className='p-2 my-2'>Email: {user?.email}</div>
            {userEditable ? (
                <input
                    type="text"
                    className='p-2 my-2'
                    placeholder="Username"
                    value={profile.username}
                    onChange={handleUsernameChange}
                />
            ) : (
                <div className="flex flex-row align-middle">
                    <div className='p-2 my-2'>Username: {profile.username}</div>
                    <button className="h-10 my-2 ms-auto" onClick={handleUserEdit}>Edit Username</button>
                </div>
            )}
            <input
                type="text"
                className='p-2 my-2'
                placeholder="Ollama url"
                value={profile?.ollamaUrl || ''}
                onChange={(e) => setProfile({ ...profile, ollamaUrl: e.target.value })}
            />
            <div className="flex mt-5">
                <button className="ms-auto" onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default Profile;
