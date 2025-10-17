
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-10 max-w-md text-center animate-fadeIn">
        <FaExclamationTriangle className="text-yellow-400 w-20 h-20 mx-auto mb-6 animate-bounce" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-6 text-white/90">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-yellow-400 text-purple-800 font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
