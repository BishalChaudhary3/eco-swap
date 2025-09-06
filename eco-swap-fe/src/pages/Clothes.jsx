// src/pages/Clothes.jsx
import React from "react";

const clothesData = [
  { id: 1, name: "T-Shirt", price: "$20" },
  { id: 2, name: "Jeans", price: "$40" },
  { id: 3, name: "Jacket", price: "$60" },
  { id: 4, name: "Sneakers", price: "$80" },
];

export default function Clothes() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothesData.map((item) => (
          <div
            key={item.id}
            className="border rounded-md p-4 bg-white shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-green-700 font-bold">{item.price}</p>
            <button className="mt-2 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
