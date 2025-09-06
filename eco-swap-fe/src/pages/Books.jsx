import React from 'react';

const products = [
  { id: 1, name: 'Classic Novel', price: '₹350', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Novel' },
  { id: 2, name: 'Science Fiction', price: '₹280', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Sci-Fi' },
  { id: 3, name: 'Cookbook', price: '₹400', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Cookbook' },
  { id: 4, name: 'Children\'s Storybook', price: '₹150', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Storybook' },
  { id: 5, name: 'Fantasy Series', price: '₹600', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Fantasy' },
  { id: 6, name: 'Biography', price: '₹550', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Biography' },
];

export default function Books() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Second-hand Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-green-600 font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
