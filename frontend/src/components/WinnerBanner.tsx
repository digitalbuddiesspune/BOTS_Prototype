export const WinnerBanner = () => {
  const handleViewAll = () => {
    alert('Viewing all winners!');
  };

  const handleNextWinner = () => {
    alert('Loading next winner...');
  };

  return (
    <section className="py-6 sm:py-8 md:py-12" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
                alt="BOTS Winner"
                className="w-full h-full object-cover min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Winner';
                }}
              />
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 flex flex-col gap-1 sm:gap-2">
                <span className="bg-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold shadow-lg">
                  BOTS WINNER
                </span>
                <span className="bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold shadow-lg">
                  £40,000 CASH
                </span>
              </div>
            </div>
            <div className="md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center bg-white">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
                BMW X5 XDRIVE30D M SPORT (£78,890) PLUS £40,000 TAX FREE CASH
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">
                Congratulations to our latest winner! Join thousands of others who have won amazing prizes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
          <p className="text-gray-600 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">EST. 1999 - £123+ MILLION IN PRIZES</p>
          <p className="text-gray-800 font-semibold mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base">New winners every week.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button 
              onClick={handleViewAll}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded font-semibold text-sm sm:text-base transition-colors"
            >
              VIEW ALL
            </button>
            <button 
              onClick={handleNextWinner}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded font-semibold text-sm sm:text-base transition-colors"
            >
              NEXT WINNER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

