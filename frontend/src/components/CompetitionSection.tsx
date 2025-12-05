import { Competition } from '../types';
import { CompetitionCard } from './CompetitionCard';

interface CompetitionSectionProps {
  title: string;
  competitions: Competition[];
  columns?: number;
}

export const CompetitionSection = ({ 
  title, 
  competitions, 
  columns = 3 
}: CompetitionSectionProps) => {
  if (competitions.length === 0) return null;

  const gridClass = 
    columns === 2 ? 'lg:grid-cols-2' :
    columns === 4 ? 'lg:grid-cols-4' :
    'lg:grid-cols-3';

  return (
    <section className="py-8 sm:py-10 md:py-12 competitions-section" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 hidden md:block">Browse our premium collection</p>
          </div>
          <button 
            onClick={() => alert(`Viewing all ${title.toLowerCase()}`)}
            className="hidden md:flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold text-sm transition-all duration-300 px-4 py-2 rounded-lg hover:bg-indigo-50 group"
          >
            View All
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-2 ${gridClass} gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8`}>
          {competitions.map((competition, index) => {
            const isLastCard = index === competitions.length - 1;
            const isOddTotal = competitions.length % 2 !== 0;
            const shouldSpanFull = isLastCard && isOddTotal;
            
            return (
              <div 
                key={competition.id} 
                className={`animate-fadeInUp ${shouldSpanFull ? 'col-span-2 sm:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CompetitionCard competition={competition} />
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center md:hidden">
          <button 
            onClick={() => alert(`Viewing all ${title.toLowerCase()}`)}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors"
          >
            View All →
          </button>
        </div>
      </div>
    </section>
  );
};

