import React from 'react';

export default function RunningDrills() {
  const drills = [
    { name: 'High Knees', description: 'Improve running form and cadence.' },
    { name: 'Butt Kicks', description: 'Enhance hamstring activation and stride.' },
    { name: 'A-Skip', description: 'Develop proper knee lift and foot placement.' }
  ];

  return (
    <section id="drills" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Running Drills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {drills.map((drill, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 w-72 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{drill.name}</h3>
            <p>{drill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

