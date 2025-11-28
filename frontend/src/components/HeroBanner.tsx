export const HeroBanner = () => {
  const handleShowMeHow = () => {
    window.scrollTo({ 
      top: document.querySelector('.competitions-section')?.getBoundingClientRect().top || 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative bg-gray-900 text-white">
      <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80"
          alt="Luxury Devon Home"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1400x600/333333/FFFFFF?text=Luxury+Home';
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded font-bold text-[10px] sm:text-xs uppercase tracking-wide">
          LAST CHANCE
        </div>
        <div className="absolute top-12 right-3 sm:top-16 sm:right-4 md:top-20 md:right-6 bg-white text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded font-bold text-base sm:text-lg md:text-xl shadow-lg">
          95P
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
                WIN A £695K LUXURY DEVON HOME
              </h2>
              <button 
                onClick={handleShowMeHow}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md font-bold text-sm sm:text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                SHOW ME HOW
              </button>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Over 100,000 Winners</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Rated Excellent on Trustpilot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

