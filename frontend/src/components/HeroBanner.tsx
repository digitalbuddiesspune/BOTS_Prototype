export const HeroBanner = () => {
  const handleShowMeHow = () => {
    window.scrollTo({ 
      top: document.querySelector('.competitions-section')?.getBoundingClientRect().top || 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&h=600&fit=crop&q=80"
          alt="Diamond Jewelry"
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1400x600/333333/FFFFFF?text=Diamond+Jewelry';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-lg font-bold text-[10px] sm:text-xs uppercase tracking-wide shadow-2xl animate-pulse-slow">
          LAST CHANCE
        </div>
        <div className="absolute top-12 right-3 sm:top-16 sm:right-4 md:top-20 md:right-6 bg-white text-gray-900 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-lg sm:text-xl md:text-2xl shadow-2xl transform hover:scale-110 transition-transform">
          55P
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="max-w-2xl animate-fadeInUp">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight drop-shadow-2xl">
                <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                  Shop Premium Diamond Jewelry
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 drop-shadow-lg font-medium">
                Discover exquisite diamond rings, necklaces, earrings, and more!
              </p>
              <button 
                onClick={handleShowMeHow}
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-600/50 transform hover:scale-110 relative overflow-hidden group/btn"
              >
                <span className="relative z-10 flex items-center gap-2">
                  SHOP NOW
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
              </button>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Over 100,000 Winners</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Rated Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

