import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-blue-800 to-black">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Achieve Your Marathon Dreams</h2>
      <p className="text-lg text-gray-300 mb-8 text-center">Train smarter with Akura Warriors</p>
      <a href="#plans" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold">Start Training</a>
    </section>
  );
}

