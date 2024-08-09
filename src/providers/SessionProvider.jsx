import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { setDoc, doc, getDoc } from "firebase/firestore/lite";

const SessionContext = createContext();

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

const useSession = () => useContext(SessionContext);

function SessionProvider({ db, user, children }) {
    const [profile, setProfile] = useState({});
    const lockRef = useRef(false);

    useEffect(() => {
        if (lockRef.current) return;
        lockRef.current = true;
        getProfile(db, user).then(setProfile);
    }, [db, user]);

    const saveProfile = () => {
        const docRef = doc(db, "profiles", user.uid);
        setDoc(docRef, profile);
    }

    if (!profile.username) return <div>Loading...</div>;

    return (
        <SessionContext.Provider value={{ db: db, user: user, profile: profile, setProfile, saveProfile }}>
            {children}
        </SessionContext.Provider>
    );
}

export { SessionProvider, useSession };