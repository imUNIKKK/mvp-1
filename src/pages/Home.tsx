import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, User, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-primary">Welcome to NEXTLEVEL.GG</h1>
      <p className="text-xl mb-12 text-secondary">Your ultimate destination for CS:GO and Valorant esports statistics and tournament information.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/player-stats" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <User size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Player Statistics</h2>
          <p className="text-secondary">Track individual player performance in CS:GO and Valorant tournaments.</p>
        </Link>
        
        <Link to="/tournaments" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Trophy size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Tournaments</h2>
          <p className="text-secondary">Stay updated with the latest CS:GO and Valorant tournaments, schedules, and results.</p>
        </Link>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Real-time Updates</h2>
          <p className="text-secondary">Get live updates and analytics from ongoing CS:GO and Valorant matches.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;