import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/leaderboard')
      .then(res => setLeaders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="leaderboard" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">🏆 Leaderboard</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {leaders.map((athlete, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 w-72 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Rank #{athlete.rank}</h3>
            <p>Athlete: {athlete.athlete_name}</p>
            <p>Distance: {athlete.distance} KM</p>
            <p>Cadence: {athlete.cadence} SPM</p>
          </div>
        ))}
      </div>
    </section>
  );
}

