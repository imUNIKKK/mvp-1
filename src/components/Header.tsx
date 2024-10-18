import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, User, Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Trophy size={24} />
              <span>NEXTLEVEL.GG</span>
            </Link>
          </li>
          <li className="flex space-x-4">
            <Link to="/" className="flex items-center space-x-1 hover:text-gray-200">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/player-stats" className="flex items-center space-x-1 hover:text-gray-200">
              <User size={18} />
              <span>Player Stats</span>
            </Link>
            <Link to="/tournaments" className="flex items-center space-x-1 hover:text-gray-200">
              <Trophy size={18} />
              <span>Tournaments</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;