import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo_pm.png" alt="Logo" className="h-14 w-auto" />
          <div className="hidden sm:block leading-tight">
            <span className="block text-xl font-bold">SafeShift Logistics</span>
            <span className="text-xs opacity-80">Beyond Moving – We Deliver Peace of Mind</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium relative">
  <Link to="/" className="hover:text-green-400">Home</Link>
  <Link to="/about" className="hover:text-green-400">About</Link>

  {/* Dropdown for Services */}
  <div className="relative group">
    <button className="hover:text-green-400">Services ▾</button>
    <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-56">
      <Link to="/domestic" className="block px-4 py-2 hover:bg-blue-100">Domestic</Link>
      <Link to="/corporate" className="block px-4 py-2 hover:bg-blue-100">Corporate Shifting</Link>
      <Link to="/international" className="block px-4 py-2 hover:bg-blue-100">International Shifting</Link>
      <Link to="/local" className="block px-4 py-2 hover:bg-blue-100">Local Shifting</Link>
      <Link to="/storage" className="block px-4 py-2 hover:bg-blue-100">Storage Facility</Link>
      <Link to="/bulk" className="block px-4 py-2 hover:bg-blue-100">Bulk/Commercial Movements</Link>
      <Link to="/parcel" className="block px-4 py-2 hover:bg-blue-100">Parcel Services</Link>
      <Link to="/factory" className="block px-4 py-2 hover:bg-blue-100">Factory Relocation</Link>
      <Link to="/warehousing" className="block px-4 py-2 hover:bg-blue-100">Warehousing</Link>
      <Link to="/odc" className="block px-4 py-2 hover:bg-blue-100">ODC</Link>
    </div>
  </div>

  <Link to="/blog" className="hover:text-green-400">Blog</Link>
  <Link to="/reviews" className="hover:text-green-400">Reviews</Link>
  <Link to="/contact" className="hover:text-green-400">Contact</Link>
</div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

     {/* Mobile Menu */}
<div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-blue-800 text-white p-4 space-y-3`}>
  <Link to="/" className="block hover:text-green-400">Home</Link>
  <Link to="/about" className="block hover:text-green-400">About</Link>

  {/* Services Dropdown */}
  <details className="bg-blue-700 rounded">
    <summary className="cursor-pointer px-3 py-2 hover:text-green-400">Services</summary>
    <div className="pl-4 py-2 space-y-2">
      <Link to="/domestic" className="block hover:text-green-400">Domestic</Link>
      <Link to="/corporate" className="block hover:text-green-400">Corporate Shifting</Link>
      <Link to="/international" className="block hover:text-green-400">International Shifting</Link>
      <Link to="/local" className="block hover:text-green-400">Local Shifting</Link>
      <Link to="/storage" className="block hover:text-green-400">Storage Facility</Link>
      <Link to="/bulk" className="block hover:text-green-400">Bulk/Commercial Movements</Link>
      <Link to="/parcel" className="block hover:text-green-400">Parcel Services</Link>
      <Link to="/factory" className="block hover:text-green-400">Factory Relocation</Link>
      <Link to="/warehousing" className="block hover:text-green-400">Warehousing</Link>
      <Link to="/odc" className="block hover:text-green-400">ODC</Link>
    </div>
  </details>

  <Link to="/blog" className="block hover:text-green-400">Blog</Link>
  <Link to="/reviews" className="block hover:text-green-400">Reviews</Link>
  <Link to="/contact" className="block hover:text-green-400">Contact</Link>
</div>

    </nav>
  );
}
