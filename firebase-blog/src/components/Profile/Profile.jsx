import { useState, useEffect, useRef } from 'react';
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

async function getProfile(db, user) {
    const docRef = doc(db, "profiles", user.uid)
    const snap = await getDoc(docRef);
    if (snap.exists()) {
        return snap.data();

    } else {
        const username = randomUsername();
        const profileData = {
            username: username,
            userId: user.uid,
            tries: 1,
            ollamaUrl: 'http://ollama.local',
        };
        setDoc(docRef, profileData);
        return profileData;
    }
}


function Profile({ user, db }) {
    const [profile, setProfile] = useState({});
    const [userEditable, setUserEditable] = useState(false);
    const navigate = useNavigate();
    const lockRef = useRef(false);

    useEffect(() => {
        if (lockRef.current) return;
        lockRef.current = true;
        getProfile(db, user).then(setProfile);
    }, [db, user]);

    const handleSave = () => {
        const docRef = doc(db, "profiles", user.uid);
        setDoc(docRef, profile);
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
                value={profile.ollamaUrl}
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
