import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// The entire application is contained within this single file,
// including all components, hooks, and routing logic.

// --- Component Definitions ---

function Navbar() {
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

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 mt-auto">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EcoFinds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Home() {
  const categories = [
    { name: "Clothes", path: "/clothes", description: "Discover unique pre-loved clothes and vintage styles.", image: "https://placehold.co/400x300/a7f3d0/10b981?text=Clothes" },
    { name: "Electronics", path: "/electronics", description: "Find refurbished gadgets and second-hand devices.", image: "https://placehold.co/400x300/a7f3d0/10b981?text=Electronics" },
    { name: "Furniture", path: "/furniture", description: "Shop for upcycled furniture and home decor.", image: "https://placehold.co/400x300/a7f3d0/10b981?text=Furniture" },
    { name: "Books", path: "/books", description: "Explore a wide range of used books for every genre.", image: "https://placehold.co/400x300/a7f3d0/10b981?text=Books" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 animate-fade-in">Welcome to EcoFinds</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
          Your marketplace for sustainable products. Find pre-loved clothes, refurbished electronics, upcycled furniture, and more, all in one place.
        </p>
        <Link 
          to="/clothes" 
          className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Exploring
        </Link>
      </section>

      <section className="w-full">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.name} to={category.path} className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition duration-300">{category.name}</h3>
                  <p className="text-gray-500 mt-2 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Add login logic here
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="********"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords don't match!");
      return;
    }
    console.log('Register attempt with:', { email, password });
    // Add registration logic here
  };

  return (
    <div className="flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Create an Account</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="********"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="********"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

function Clothes() {
  const products = [
    { id: 1, name: 'Vintage Jacket', price: '₹1200', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Jacket' },
    { id: 2, name: 'Denim Jeans', price: '₹950', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Jeans' },
    { id: 3, name: 'Pre-loved Shirt', price: '₹450', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Shirt' },
    { id: 4, name: 'Handmade Scarf', price: '₹300', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Scarf' },
    { id: 5, name: 'Cotton T-shirt', price: '₹600', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=T-shirt' },
    { id: 6, name: 'Woolen Sweater', price: '₹1800', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Sweater' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Sustainable Fashion</h2>
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

function Electronics() {
  const products = [
    { id: 1, name: 'Refurbished Smartphone', price: '₹15,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Smartphone' },
    { id: 2, name: 'Pre-owned Tablet', price: '₹8,500', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Tablet' },
    { id: 3, name: 'Used Laptop', price: '₹22,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Laptop' },
    { id: 4, name: 'Wireless Headphones', price: '₹2,500', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Headphones' },
    { id: 5, name: 'Digital Camera', price: '₹7,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Camera' },
    { id: 6, name: 'Smartwatch', price: '₹4,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Smartwatch' },
  ];

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

function Furniture() {
  const products = [
    { id: 1, name: 'Upcycled Dining Table', price: '₹8,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Dining+Table' },
    { id: 2, name: 'Vintage Armchair', price: '₹5,500', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Armchair' },
    { id: 3, name: 'Wooden Bookshelf', price: '₹4,200', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Bookshelf' },
    { id: 4, name: 'Repurposed Coffee Table', price: '₹3,000', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Coffee+Table' },
    { id: 5, name: 'Retro Floor Lamp', price: '₹1,800', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Floor+Lamp' },
    { id: 6, name: 'Hand-painted Cabinet', price: '₹6,500', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Cabinet' },
  ];

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

function Books() {
  const products = [
    { id: 1, name: 'Classic Novel', price: '₹350', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Novel' },
    { id: 2, name: 'Science Fiction', price: '₹280', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Sci-Fi' },
    { id: 3, name: 'Cookbook', price: '₹400', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Cookbook' },
    { id: 4, name: 'Children\'s Storybook', price: '₹150', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Storybook' },
    { id: 5, name: 'Fantasy Series', price: '₹600', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Fantasy' },
    { id: 6, name: 'Biography', price: '₹550', imageUrl: 'https://placehold.co/400x300/a7f3d0/10b981?text=Biography' },
  ];

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


// Main App Component
export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
