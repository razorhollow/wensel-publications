import { Link } from "react-router";

const Navigation = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
          Wensel Publications
        </Link>
        <nav className="flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation; 