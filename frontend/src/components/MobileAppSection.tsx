export const MobileAppSection = () => {
  const handleAppStore = () => {
    alert('Redirecting to App Store...');
  };

  const handleGooglePlay = () => {
    alert('Redirecting to Google Play...');
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
              Play On The Go!
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 text-orange-50">
              Download our mobile app and never miss a competition. Enter instantly, track your tickets, and get notified when you win!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                onClick={handleAppStore}
                className="bg-black hover:bg-gray-900 text-white px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.05-3.5-1.63-3.5-3.5 0-1.43 1.15-2.18 2.4-2.18.9 0 1.85.3 2.6.9.75.6 1.25 1.4 1.85 2.3.6-.9 1.1-1.7 1.85-2.3.75-.6 1.7-.9 2.6-.9 1.25 0 2.4.75 2.4 2.18 0 1.87-1.26 2.45-3.5 3.5-1.16.48-2.15.94-3.24 1.44-1.03.48-2.1.55-3.08-.4z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] sm:text-xs">Download on the</div>
                  <div className="text-sm sm:text-base md:text-lg font-bold">App Store</div>
                </div>
              </button>
              <button
                onClick={handleGooglePlay}
                className="bg-black hover:bg-gray-900 text-white px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm2.27-2.27L17.46 12l2.27-2.27L6.05 2.66l10.76 10.76zm-1.35-4.31L6.05 2.66l8.49 8.49 2.27-2.27z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] sm:text-xs">Get it on</div>
                  <div className="text-sm sm:text-base md:text-lg font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                alt="Mobile App"
                className="w-full rounded-2xl shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x800?text=Mobile+App';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl transform rotate-6 scale-105 opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

