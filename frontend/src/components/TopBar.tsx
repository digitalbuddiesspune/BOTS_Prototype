import { useState } from 'react';

export const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white text-center py-2.5 sm:py-3 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      
      <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 md:gap-8 px-4">
        {/* Left icon */}
        <div className="hidden sm:block text-xl sm:text-2xl animate-pulse">
          🎁
        </div>
        
        {/* Main message */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span className="font-bold text-xs sm:text-sm md:text-base tracking-wide">
            LOTTERY20
          </span>
          <span className="hidden sm:inline">-</span>
          <span className="text-xs sm:text-sm md:text-base font-semibold">
            20% OFF on £4999+ purchases
          </span>
        </div>
        
        {/* Right icon */}
        <div className="hidden sm:block text-xl sm:text-2xl animate-pulse">
          🎁
        </div>
        
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

