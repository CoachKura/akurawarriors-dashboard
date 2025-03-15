import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Message</label>
          <textarea className="w-full border border-gray-300 rounded p-2"></textarea>
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">Send Message</button>
      </form>
    </section>
  );
}

