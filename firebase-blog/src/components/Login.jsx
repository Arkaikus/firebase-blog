import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

async function handleSignIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.log(error);
    }
}

function Login() {
    return (
        <div>
            <h1>Welcome to Posts App</h1>
            <button onClick={handleSignIn}>Sign In with Google</button>
        </div>
    );
}

export default Login;
