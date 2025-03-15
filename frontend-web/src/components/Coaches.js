import React from 'react';

export default function Coaches() {
  const coaches = [
    { name: 'Coach Kura', specialization: 'Marathon & Endurance' },
    { name: 'Coach Priya', specialization: 'Strength & Conditioning' }
  ];

  return (
    <section id="coaches" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Coaches</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {coaches.map((coach, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 w-72 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{coach.name}</h3>
            <p>Specialization: {coach.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

