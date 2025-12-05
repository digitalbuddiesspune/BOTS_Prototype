export const StatisticsSection = () => {
  const stats = [
    {
      number: '₹1,291+',
      label: 'Crore in Prizes',
      icon: '💰',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '100,000+',
      label: 'Winners',
      icon: '🏆',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '1999',
      label: 'Established',
      icon: '📅',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '4.8/5',
      label: 'Trustpilot Rating',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Why Choose BOTS?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Trusted by thousands of winners since 1999
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className={`text-3xl sm:text-4xl mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.icon}
              </div>
              <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

