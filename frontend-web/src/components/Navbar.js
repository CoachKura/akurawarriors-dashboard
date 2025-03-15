import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Akura Warriors</h1>
      <ul className="flex space-x-6 text-sm">
        <li><a href="#home">Home</a></li>
        <li><a href="#plans">Training Plans</a></li>
        <li><a href="#drills">Running Drills</a></li>
        <li><a href="#athletes">Athletes</a></li>
        <li><a href="#coaches">Coaches</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

