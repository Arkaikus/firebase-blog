import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login() {
    const handleSignIn = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Welcome to Posts App</h1>
            <button onClick={handleSignIn}>Sign In with Google</button>
        </div>
    );
}

export default Login;
