import React from 'react';

const products = [
  { id: 1, name: 'Upcycled Dining Table', price: '₹8,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Dining+Table' },
  { id: 2, name: 'Vintage Armchair', price: '₹5,500', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Armchair' },
  { id: 3, name: 'Wooden Bookshelf', price: '₹4,200', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Bookshelf' },
  { id: 4, name: 'Repurposed Coffee Table', price: '₹3,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Coffee+Table' },
  { id: 5, name: 'Retro Floor Lamp', price: '₹1,800', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Floor+Lamp' },
  { id: 6, name: 'Hand-painted Cabinet', price: '₹6,500', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Cabinet' },
];

export default function Furniture() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Upcycled Furniture</h2>
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
