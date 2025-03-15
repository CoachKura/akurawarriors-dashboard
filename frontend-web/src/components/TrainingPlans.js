import React from 'react';

export default function TrainingPlans() {
  const plans = [
    { level: 'Beginner', description: 'Start running with a structured 8-week program.' },
    { level: 'Intermediate', description: 'Boost endurance and improve pacing strategies.' },
    { level: 'Advanced', description: 'Prepare for race day with elite-level workouts.' }
  ];

  return (
    <section id="plans" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Training Plans</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-blue-900 text-white rounded-xl shadow-lg p-6 w-80 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{plan.level}</h3>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

