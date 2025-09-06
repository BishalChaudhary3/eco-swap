// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">EcoFinds</Link>
      <div className="space-x-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </nav>
  );
}
