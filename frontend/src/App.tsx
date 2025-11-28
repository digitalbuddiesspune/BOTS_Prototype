import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { NavigationTabs } from './components/NavigationTabs';
import { CompetitionSection } from './components/CompetitionSection';
import { StatisticsSection } from './components/StatisticsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PrizeCategoriesSection } from './components/PrizeCategoriesSection';
import { RecentWinnersSection } from './components/RecentWinnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WinnerBanner } from './components/WinnerBanner';
import { NewsSection } from './components/NewsSection';
import { MobileAppSection } from './components/MobileAppSection';
import { TrustBadgesSection } from './components/TrustBadgesSection';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import {
  featuredCompetitions,
  endsTodayCompetitions,
  endsTomorrowCompetitions,
  instantWinsCompetitions,
  endsSoonCompetitions,
  freeCompetitions
} from './data/competitions';

function App() {
  const [activeTab, setActiveTab] = useState('featured');

  const getCompetitionsForTab = () => {
    switch (activeTab) {
      case 'featured':
        return featuredCompetitions;
      case 'daily':
        return endsTodayCompetitions;
      case 'spot':
        return featuredCompetitions.filter(c => c.title.toLowerCase().includes('spot'));
      case 'instant':
        return instantWinsCompetitions;
      case 'free':
        return freeCompetitions;
      default:
        return featuredCompetitions;
    }
  };

  return (
    <CartProvider>
      <SearchProvider>
        <div className="min-h-screen" style={{ backgroundColor: '#EFEFEF' }}>
          <TopBar />
          <Header />
          <HeroBanner />
          <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {activeTab === 'featured' && (
            <>
              <StatisticsSection />
              <CompetitionSection 
                title="Featured Competitions" 
                competitions={featuredCompetitions}
                columns={3}
              />
            </>
          )}

          {activeTab === 'daily' && (
            <CompetitionSection 
              title="Daily Draw" 
              competitions={endsTodayCompetitions}
              columns={3}
            />
          )}

          {activeTab === 'spot' && (
            <CompetitionSection 
              title="Spot The Ball" 
              competitions={featuredCompetitions.filter(c => c.title.toLowerCase().includes('spot'))}
              columns={3}
            />
          )}

          {activeTab === 'instant' && (
            <CompetitionSection 
              title="Instant Wins" 
              competitions={instantWinsCompetitions}
              columns={2}
            />
          )}

          {activeTab === 'free' && (
            <CompetitionSection 
              title="Free Competitions" 
              competitions={freeCompetitions}
              columns={2}
            />
          )}

          {activeTab === 'winners' && (
            <>
              <WinnerBanner />
              <RecentWinnersSection />
            </>
          )}

          {activeTab === 'featured' && (
            <>
              <HowItWorksSection />
              <CompetitionSection 
                title="Ends Today" 
                competitions={endsTodayCompetitions}
                columns={3}
              />
              <PrizeCategoriesSection />
              <CompetitionSection 
                title="Ends Tomorrow" 
                competitions={endsTomorrowCompetitions}
                columns={3}
              />
              <RecentWinnersSection />
              <TestimonialsSection />
              <CompetitionSection 
                title="Ending Soon" 
                competitions={endsSoonCompetitions}
                columns={4}
              />
              <WinnerBanner />
              <NewsSection />
              <MobileAppSection />
              <TrustBadgesSection />
            </>
          )}
          
          <Footer />
        </div>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;

