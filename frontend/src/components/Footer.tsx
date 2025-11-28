export const Footer = () => {
  const handleLinkClick = (linkName: string) => {
    alert(`${linkName} page coming soon!`);
  };

  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 md:py-12">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 md:mb-4">WEEKLY COMPETITION WINNERS</h3>
          <p className="text-gray-400 text-sm sm:text-base">Check back soon for the latest winners!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Competitions</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li><button onClick={() => handleLinkClick('Featured')} className="hover:text-white text-left">Featured</button></li>
              <li><button onClick={() => handleLinkClick('Daily Draw')} className="hover:text-white text-left">Daily Draw</button></li>
              <li><button onClick={() => handleLinkClick('Spot The Ball')} className="hover:text-white text-left">Spot The Ball</button></li>
              <li><button onClick={() => handleLinkClick('Instant Wins')} className="hover:text-white text-left">Instant Wins</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleLinkClick('Our Story')} className="hover:text-white text-left">Our Story</button></li>
              <li><button onClick={() => handleLinkClick('How It Works')} className="hover:text-white text-left">How It Works</button></li>
              <li><button onClick={() => handleLinkClick('Winners')} className="hover:text-white text-left">Winners</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleLinkClick('Contact Us')} className="hover:text-white text-left">Contact Us</button></li>
              <li><button onClick={() => handleLinkClick('FAQs')} className="hover:text-white text-left">FAQs</button></li>
              <li><button onClick={() => handleLinkClick('Help Center')} className="hover:text-white text-left">Help Center</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleLinkClick('Terms & Conditions')} className="hover:text-white text-left">Terms & Conditions</button></li>
              <li><button onClick={() => handleLinkClick('Privacy Policy')} className="hover:text-white text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleLinkClick('Cookie Policy')} className="hover:text-white text-left">Cookie Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex gap-3 sm:gap-4">
              <button onClick={() => handleLinkClick('Facebook')} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button onClick={() => handleLinkClick('Instagram')} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button onClick={() => handleLinkClick('Twitter')} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button onClick={() => handleLinkClick('YouTube')} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-gray-400 text-xs sm:text-sm font-semibold">Visa</span>
                <span className="text-gray-400 text-xs sm:text-sm font-semibold">Mastercard</span>
                <span className="text-gray-400 text-xs sm:text-sm font-semibold">Maestro</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <button onClick={() => handleLinkClick('App Store')} className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.05-3.5-1.63-3.5-3.5 0-1.43 1.15-2.18 2.4-2.18.9 0 1.85.3 2.6.9.75.6 1.25 1.4 1.85 2.3.6-.9 1.1-1.7 1.85-2.3.75-.6 1.7-.9 2.6-.9 1.25 0 2.4.75 2.4 2.18 0 1.87-1.26 2.45-3.5 3.5-1.16.48-2.15.94-3.24 1.44-1.03.48-2.1.55-3.08-.4z"/>
                  </svg>
                </button>
                <button onClick={() => handleLinkClick('Google Play')} className="opacity-80 hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm2.27-2.27L17.46 12l2.27-2.27L6.05 2.66l10.76 10.76zm-1.35-4.31L6.05 2.66l8.49 8.49 2.27-2.27z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} BOTS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

