import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc, getDoc } from "firebase/firestore/lite";

function randomUsername() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let uuid = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uuid += characters[randomIndex];
    }
    return uuid;
}


function Profile({ user, db }) {
    const [profile, setProfile] = useState({});
    const [username, setUsername] = useState('');
    const [usernameEditable, setUsernameEditable] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const docRef = doc(db, "profiles", user.uid)
        getDoc(docRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const profileData = docSnapshot.data();
                setProfile(profileData);
                setUsername(profileData.username);
            } else {
                const username = randomUsername();
                const profileData = { username: username, userId: user.uid, tries: 1 };
                setDoc(docRef, profileData);
                setProfile(profileData);
                setUsername(username);
            }
        });
    }, [db, user.uid]);

    const handleSave = () => {
        if (profile && profile.tries === 1) {
            const sure = window.confirm("Can only change username once, sure?");
            if (!sure) {
                setUsernameEditable(false);
                return;
            }
            const docRef = doc(db, "profiles", user.uid);
            const profileData = {
                ...profile,
                username: username,
                tries: 0
            };
            setDoc(docRef, profileData);
            setProfile(profileData);
        } else {
            alert("You have already changed your username once");
            setUsername(profile.username);
        }
        setUsernameEditable(false);
    };

    const handleCancel = () => {
        navigate('/dashboard');
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleUsernameEdit = () => {
        setUsernameEditable(true);
    };

    return (
        <div className='flex flex-col w-6/12 p-8 mx-auto mt-4 border border-indigo-300 h-fit rounded-xl'>
            <h2 className="p-2">Edit Profile</h2>
            <div className='p-2 my-2'>Name: {user?.displayName}</div>
            <div className='p-2 my-2'>Email: {user?.email}</div>
            {usernameEditable ? (
                <input
                    type="text"
                    className='p-2 my-2'
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            ) : (
                <div className='p-2 my-2'>Username: {username}</div>
            )}
            <div className="flex mt-5">
                {usernameEditable ? (
                    <button className="ms-auto" onClick={handleSave}>Save</button>
                ) : (
                    <button className="ms-auto" onClick={handleUsernameEdit}>Edit Username</button>
                )}
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default Profile;