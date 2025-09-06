import React from 'react';

const products = [
  { id: 1, name: 'Refurbished Smartphone', price: '₹15,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Smartphone' },
  { id: 2, name: 'Pre-owned Tablet', price: '₹8,500', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Tablet' },
  { id: 3, name: 'Used Laptop', price: '₹22,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Laptop' },
  { id: 4, name: 'Wireless Headphones', price: '₹2,500', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Headphones' },
  { id: 5, name: 'Digital Camera', price: '₹7,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Camera' },
  { id: 6, name: 'Smartwatch', price: '₹4,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Smartwatch' },
];

export default function Electronics() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Refurbished Electronics</h2>
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
