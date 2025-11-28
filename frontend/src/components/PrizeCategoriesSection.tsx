export const PrizeCategoriesSection = () => {
  const handleCategoryClick = (category: string) => {
    alert(`Filtering by ${category} category`);
  };
  const categories = [
    {
      title: 'Luxury Cars',
      icon: '🚗',
      count: '50+',
      description: 'Supercars, sports cars, and luxury vehicles',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50'
    },
    {
      title: 'Cash Prizes',
      icon: '💰',
      count: '100+',
      description: 'Win tax-free cash up to £50,000',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Homes & Property',
      icon: '🏠',
      count: '20+',
      description: 'Luxury homes worth up to £695K',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Tech & Electronics',
      icon: '📱',
      count: '75+',
      description: 'Latest gadgets and tech bundles',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    },
    {
      title: 'Lifestyle',
      icon: '✨',
      count: '60+',
      description: 'Vacations, experiences, and more',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      title: 'Free Competitions',
      icon: '🎁',
      count: '15+',
      description: 'Enter for free and win amazing prizes',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Prize Categories
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Explore our wide range of amazing prizes across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.title)}
              className={`bg-gradient-to-br ${category.bgColor} rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 cursor-pointer group`}
            >
              <div className={`text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                {category.title}
              </h3>
              <p className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.count}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

