import React from 'react';

export default function Athletes() {
  const athletes = [
    { name: 'John Doe', distance: '120 km', rank: 1 },
    { name: 'Jane Smith', distance: '110 km', rank: 2 }
  ];

  return (
    <section id="athletes" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Top Athletes</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {athletes.map((athlete, idx) => (
          <div key={idx} className="bg-gray-100 rounded-xl shadow-md p-6 w-72 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{athlete.name}</h3>
            <p>Total Distance: {athlete.distance}</p>
            <p>Rank: #{athlete.rank}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

