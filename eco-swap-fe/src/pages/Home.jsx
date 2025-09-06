import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center p-4">
      <h1 className="text-5xl font-extrabold text-green-700 mb-4 animate-fade-in">Welcome to EcoFinds</h1>
      <p className="text-xl text-gray-700 mb-8 animate-fade-in delay-200">Your marketplace for sustainable products. Find pre-loved clothes, refurbished electronics, and more!</p>
      <div className="flex space-x-4">
        <Link 
          to="/clothes" 
          className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105"
        >
          Explore Clothes
        </Link>
        <Link 
          to="/register" 
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300 transform hover:scale-105"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
}
