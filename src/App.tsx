import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlayerStats from './pages/PlayerStats';
import Tournaments from './pages/Tournaments';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player-stats" element={<PlayerStats />} />
            <Route path="/tournaments" element={<Tournaments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;