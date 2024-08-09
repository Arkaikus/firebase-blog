import { signIn } from "../providers/SessionProvider";
import { FaGoogle, FaFireAlt } from "react-icons/fa";

const Landing = () => {
    return (
        <div className="flex flex-col h-full text-white">
            <header className="py-8">
                <nav className="container flex items-center justify-between mx-auto">
                    <a href="/" className="flex items-center text-2xl font-bold text-orange-400">
                        <FaFireAlt className="text-orange-400 me-2" />
                        Fire Blog
                    </a>
                    <button className="flex items-center px-4 py-2 text-gray-900 bg-white rounded-md" onClick={signIn}>
                        <FaGoogle className="me-2" />
                        Sign In
                    </button>
                </nav>
            </header>
            <main className="container mx-auto">
                <section className="py-16 text-center">
                    <div className="flex flex-row justify-center w-full mb-4 text-4xl font-bold">Welcome to @Arkaikus <FaFireAlt className="mx-2 text-orange-400" /> Fire Blog</div>
                    <p className="mb-8 text-lg">Supercharge your writing with Ollama LLM</p>
                    <button className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">Get Started</button>
                </section>
            </main>
            <footer className="py-4 mt-auto text-center bg-gray-800">
                <p className="text-gray-500">© 2024 @Arkaikus Fire Blog. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;