import React from 'react';

export default function Gallery() {
  const images = [
    '/assets/images/run1.jpg',
    '/assets/images/run2.jpg',
    '/assets/images/run3.jpg'
  ];

  return (
    <section id="gallery" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="Athlete" className="w-72 h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
        ))}
      </div>
    </section>
  );
}

