interface NavigationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const NavigationTabs = ({ activeTab, setActiveTab }: NavigationTabsProps) => {

  const tabs = [
    { id: 'featured', label: 'Featured Competitions' },
    { id: 'daily', label: 'Daily Draw' },
    { id: 'spot', label: 'Spot The Ball' },
    { id: 'instant', label: 'Instant Wins' },
    { id: 'free', label: 'Free Competitions' },
    { id: 'winners', label: 'Past Winners' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-14 md:top-16 z-40">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 sm:py-4 px-2 sm:px-3 border-b-2 transition-colors whitespace-nowrap text-xs sm:text-sm font-medium flex-shrink-0 ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-orange-600 hover:border-orange-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

