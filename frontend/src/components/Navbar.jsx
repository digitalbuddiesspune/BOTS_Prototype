import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartItemCount } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const isActive = (path) => location.pathname === path;

  const categories = [
    { to: '/products', label: 'COLLECTION', hasDropdown: true },
    { to: '/products?category=men', label: 'MEN', hasDropdown: true },
    { to: '/products?category=women', label: 'WOMEN', hasDropdown: true },
    { to: '/products?category=premium', label: 'PREMIUM', hasDropdown: true },
  ];

  return (
    <>
      {/* Top Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-pink-800 text-white text-center py-2 text-sm font-semibold">
        LOTTERY20 - 20% off on $4999+ purchases
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Categories */}
            <div className="hidden lg:flex items-center space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.to}
                  to={category.to}
                  className="text-gray-800 font-semibold text-sm hover:text-purple-600 transition-colors flex items-center space-x-1 group"
                >
                  <span>{category.label}</span>
                  {category.hasDropdown && (
                    <svg 
                      className="w-4 h-4 group-hover:rotate-180 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Center - Logo */}
            <Link 
              to="/" 
              className="absolute left-1/2 transform -translate-x-1/2"
            >
              <span className="text-3xl font-bold text-gray-900 tracking-wider">
                DIAMONDLOTTERY
              </span>
            </Link>

            {/* Right Side - Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative"
                aria-label="Search"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </button>

              {/* Profile Icon */}
              <Link
                to="/lottery"
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="Profile"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
              </Link>

              {/* Wishlist Icon */}
              <Link
                to="/lottery"
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative"
                aria-label="Wishlist"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                  />
                </svg>
              </Link>

              {/* Cart Icon */}
              <Link
                to="/cart"
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative"
                aria-label="Cart"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                  />
                </svg>
                {getCartItemCount() > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="border-t border-gray-200 py-4 animate-slideDown">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search diamonds..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  autoFocus
                />
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 animate-slideDown">
              <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.to}
                    to={category.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-semibold"
                  >
                    {category.label}
                  </Link>
                ))}
                <Link
                  to="/lottery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 font-semibold transition-colors ${
                    isActive('/lottery')
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  My Tickets
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

