export const TrustBadgesSection = () => {
  const badges = [
    {
      title: 'Secure Payments',
      description: 'SSL encrypted transactions',
      icon: '🔒',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Licensed & Regulated',
      description: 'Fully compliant with UK regulations',
      icon: '✅',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '24/7 Support',
      description: 'Always here to help',
      icon: '💬',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Instant Notifications',
      description: 'Get notified when you win',
      icon: '🔔',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 border-t border-gray-200" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 rounded-lg transition-colors"
              style={{ backgroundColor: '#EFEFEF' }}
            >
              <div className={`text-3xl sm:text-4xl mb-2 sm:mb-3 bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}>
                {badge.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">
                {badge.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

