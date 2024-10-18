import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar } from 'lucide-react';

interface Tournament {
  id: number;
  name: string;
  game: string;
  begin_at: string;
  end_at: string;
  prizepool: string;
}

const Tournaments: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get('https://api.pandascore.co/tournaments', {
          params: {
            'filter[videogame]': 'cs-go,valorant',
            'sort': '-begin_at',
            'page[size]': 9,
          },
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_PANDASCORE_API_KEY}`,
          },
        });
        setTournaments(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching tournaments:', err);
        setError('Failed to fetch tournaments. Please try again later.');
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  if (loading) {
    return <div className="text-center text-primary">Loading tournaments...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-primary">Upcoming Tournaments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-primary">{tournament.name}</h2>
            <p className="text-secondary mb-2">{tournament.game}</p>
            <div className="flex items-center text-secondary mb-2">
              <Calendar size={18} className="mr-2" />
              <span>{new Date(tournament.begin_at).toLocaleDateString()} - {new Date(tournament.end_at).toLocaleDateString()}</span>
            </div>
            <p className="font-bold text-green-600">Prize Pool: {tournament.prizepool || 'TBA'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;