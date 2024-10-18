import React, { useState } from 'react';
import { Search } from 'lucide-react';

const PlayerStats: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [playerStats, setPlayerStats] = useState(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to fetch player stats
    // For now, we'll use mock data
    setPlayerStats({
      name: searchTerm,
      game: 'CS:GO',
      kdr: '1.2',
      winRate: '55%',
      headShotPercentage: '62%',
      averageDamagePerRound: '85.5',
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-primary">Player Statistics</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a player..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="bg-primary text-white p-2 rounded-r-md hover:bg-opacity-90 transition-colors">
            <Search size={24} />
          </button>
        </div>
      </form>

      {playerStats && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{playerStats.name}</h2>
          <p className="text-secondary"><strong>Game:</strong> {playerStats.game}</p>
          <p className="text-secondary"><strong>KDR:</strong> {playerStats.kdr}</p>
          <p className="text-secondary"><strong>Win Rate:</strong> {playerStats.winRate}</p>
          <p className="text-secondary"><strong>Headshot %:</strong> {playerStats.headShotPercentage}</p>
          <p className="text-secondary"><strong>ADR:</strong> {playerStats.averageDamagePerRound}</p>
        </div>
      )}
    </div>
  );
};

export default PlayerStats;