
const Loading = ({ text = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="w-10 h-10 border-8 border-gray-300 rounded-full animate-spin border-t-blue-600" ></div>
            {text}
        </div>
    );
};

export function SmallLoading({ text = "Loading..." }) {
    return (
        <div className="flex items-center align-middle">
            <div className="w-5 h-5 border-2 border-gray-300 rounded-full me-2 animate-spin border-t-blue-600"></div>
            {text}
        </div>
    )
}

export function GreenLight({ text = "Available" }) {
    return (
        <div className="flex items-center">
            <div className="w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
            {text}
        </div>
    )
}

export function RedLight({ text = "Unavailable" }) {
    return (
        <div className="flex items-center">
            <div className="w-4 h-4 mr-2 bg-red-500 rounded-full"></div>
            {text}
        </div>
    )
}

export default Loading;