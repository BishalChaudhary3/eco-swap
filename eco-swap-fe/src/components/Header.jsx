import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-green-600 text-white p-4 shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Logo / Title */}

      {/* Search Bar */}
      <div className="flex items-center mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-md w-64 text-black"
        />
      </div>

      {/* Nav Links */}
     

      {/* Category Filter */}
      <div className="flex gap-2 mt-3 md:mt-0">
        {["Clothes", "Electronics", "Furniture", "Books"].map((cat) => (
          <button
            key={cat}
            className="bg-white text-green-700 px-3 py-1 rounded-md hover:bg-gray-100"
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}
