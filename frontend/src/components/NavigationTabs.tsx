interface NavigationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const NavigationTabs = ({ activeTab, setActiveTab }: NavigationTabsProps) => {

  const tabs = [
    { id: 'featured', label: 'All Products' },
    { id: 'daily', label: 'Electronics' },
    { id: 'spot', label: 'Vehicles' },
    { id: 'instant', label: 'Home & Living' },
    { id: 'free', label: 'Free Items' },
    { id: 'winners', label: 'Best Sellers' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-14 md:top-16 z-40 shadow-sm">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 sm:py-4 px-3 sm:px-4 md:px-6 border-b-4 transition-all duration-300 whitespace-nowrap text-xs sm:text-sm font-bold flex-shrink-0 relative ${
                activeTab === tab.id
                  ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50'
                  : 'border-transparent text-gray-600 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/30'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-indigo-700"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

