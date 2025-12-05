import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { ShoppingCartSidebar } from './ShoppingCartSidebar';

export const Header = () => {
  const { cartCount } = useCart();
  const { isSearchOpen, setIsSearchOpen } = useSearch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = () => {
    alert('Login functionality coming soon!');
  };

  const handlePlayNow = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14 md:h-16">
          <nav className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: document.querySelector('.competitions-section')?.getBoundingClientRect().top || 0, behavior: 'smooth' })}
              className="text-gray-800 font-bold hover:text-indigo-600 transition-all duration-300 text-xs sm:text-sm md:text-base hidden sm:block px-3 py-2 rounded-lg hover:bg-indigo-50"
            >
              CATEGORIES
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent tracking-tight">
              BOTS
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button 
              onClick={handleLogin}
              className="text-gray-800 hover:text-indigo-600 transition-all duration-300 font-bold text-xs sm:text-sm hidden md:block px-4 py-2 rounded-lg hover:bg-indigo-50"
            >
              LOGIN
            </button>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="relative text-gray-800 hover:text-indigo-600 transition-all duration-300 p-2 sm:p-2.5 rounded-lg hover:bg-indigo-50"
              aria-label="Search"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              onClick={() => setCartOpen(true)}
              className="relative text-gray-800 hover:text-indigo-600 transition-all duration-300 p-2 sm:p-2.5 rounded-lg hover:bg-indigo-50"
              aria-label="Cart"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-[10px] sm:text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-xs sm:text-sm md:text-base font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 py-4 animate-slideDown">
            <form onSubmit={handleSearch} className="flex items-center gap-2 px-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
                autoFocus
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-600 hover:text-gray-800 p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-200 py-4">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 font-semibold hover:text-indigo-600"
            >
              CATEGORIES
            </button>
            <button 
              onClick={() => {
                handleLogin();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 font-semibold hover:text-indigo-600"
            >
              LOGIN
            </button>
          </div>
        )}
      </div>
      <ShoppingCartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

