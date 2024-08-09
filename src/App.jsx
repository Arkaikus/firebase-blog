import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

import { SessionProvider } from './providers/SessionProvider';
import Landing from './components/Landing';
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

  if (!user) {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    );
  }

  return (
    <SessionProvider db={db} user={user}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="*" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/:username/posts/*" element={<ReadOnly />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </SessionProvider>
  );
}

export default App;
