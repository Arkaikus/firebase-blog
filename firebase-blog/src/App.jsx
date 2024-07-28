import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ReadOnly from './components/Posts/ReadOnly';
import NotFound from './components/404';
import './styles/App.css';

// Initialize Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {user && <Route path="/login" element={<Navigate to="/dashboard" />} />}
          {user && <Route path="/dashboard/*" element={<Dashboard user={user} db={db} />} />}
          {!user && <Route path="/login" element={<Login />} />}
          {!user && <Route path="/dashboard/*" element={<Navigate to="/login" />} />}
          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
          <Route path="/:username/posts/*" element={<ReadOnly db={db} />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
