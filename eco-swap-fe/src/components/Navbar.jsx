// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const categories = [
    { name: "Clothes", path: "/clothes" },
    { name: "Electronics", path: "/electronics" },
    { name: "Furniture", path: "/furniture" },
    { name: "Books", path: "/books" },
  ];

  return (
    <header className="bg-green-600 text-white shadow-md">
      {/* Navbar */}
      <nav className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Link to="/" className="font-bold text-xl">EcoFinds</Link>

        {/* Search */}
        <div className="flex justify-center md:justify-start">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md w-64 text-black"
          />
        </div>

        {/* Auth Links */}
        <div className="space-x-4 flex justify-center md:justify-end">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Sign Up</Link>
        </div>
      </nav>

      {/* Categories below navbar */}
      <div className="p-3 bg-green-700 flex gap-2 flex-wrap justify-center">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            className="bg-white text-green-700 px-3 py-1 rounded-md hover:bg-gray-100"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
