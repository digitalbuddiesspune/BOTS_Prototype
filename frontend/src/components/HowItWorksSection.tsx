export const HowItWorksSection = () => {
  const steps = [
    {
      step: '1',
      title: 'Choose Your Competition',
      description: 'Browse our wide selection of amazing prizes and pick the competition you want to enter.',
      icon: '🎯',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      step: '2',
      title: 'Purchase Your Entry',
      description: 'Buy your entry ticket - prices start from just 95p. Multiple entries increase your chances!',
      icon: '💳',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '3',
      title: 'Wait for the Draw',
      description: 'Sit back and wait for the competition to close. We\'ll notify you when the draw happens.',
      icon: '⏰',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '4',
      title: 'Win Amazing Prizes',
      description: 'If you\'re the lucky winner, we\'ll contact you immediately to arrange prize delivery!',
      icon: '🎉',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Getting started is easy! Follow these simple steps to enter and win.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                {item.step}
              </div>
              <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-600 to-transparent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

