export const RecentWinnersSection = () => {
  const winners = [
    {
      name: 'James Wilson',
      prize: 'Diamond Ring',
      date: '2 days ago',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Lisa Anderson',
      prize: 'Diamond Necklace',
      date: '5 days ago',
      image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cf8e66?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Robert Taylor',
      prize: 'Diamond Bracelet',
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Amanda White',
      prize: 'Diamond Earrings',
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1603561596112-0d0395e0f0b1?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Chris Martinez',
      prize: 'Diamond Pendant',
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Jennifer Lee',
      prize: 'Diamond Jewelry Set',
      date: '3 weeks ago',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
              Recent Winners
            </h2>
            <p className="text-sm sm:text-base text-gray-600">See who's winning big prizes every week!</p>
          </div>
          <button 
            onClick={() => alert('Viewing all winners!')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold text-sm sm:text-base transition-colors"
          >
            View All Winners
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {winners.map((winner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group"
            >
              <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden bg-gray-200">
                <img
                  src={winner.image}
                  alt={winner.prize}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (winner.prize.toLowerCase().includes('ring')) {
                      target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop';
                    } else if (winner.prize.toLowerCase().includes('necklace') || winner.prize.toLowerCase().includes('pendant')) {
                      target.src = 'https://images.unsplash.com/photo-1596944924616-7b38e7cf8e66?w=400&h=300&fit=crop';
                    } else if (winner.prize.toLowerCase().includes('earring')) {
                      target.src = 'https://images.unsplash.com/photo-1603561596112-0d0395e0f0b1?w=400&h=300&fit=crop';
                    } else if (winner.prize.toLowerCase().includes('bracelet')) {
                      target.src = 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop';
                    } else {
                      target.src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop';
                    }
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-bold truncate">{winner.prize}</p>
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 truncate">{winner.name}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{winner.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

