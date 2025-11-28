export const NewsSection = () => {
  const handleReadMore = () => {
    alert('Reading more about Tech Frenzy Instant Wins!');
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 border-t border-gray-200" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
                alt="Tech Frenzy"
                className="w-full h-full object-cover min-h-[180px] sm:min-h-[220px] md:min-h-[250px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x300?text=Tech';
                }}
              />
            </div>
            <div className="md:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-white">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Tech Frenzy Instant Wins Are Here! Snag your entries NOW!
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base">
                Don't miss out on our latest instant win competitions featuring the hottest tech gadgets.
              </p>
              <button 
                onClick={handleReadMore}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 self-start"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

