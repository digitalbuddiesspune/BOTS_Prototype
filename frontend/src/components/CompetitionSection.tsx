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
    <section className="py-6 sm:py-8 md:py-10 competitions-section" style={{ backgroundColor: '#EFEFEF' }}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          <button 
            onClick={() => alert(`Viewing all ${title.toLowerCase()}`)}
            className="hidden md:block text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
          >
            View All →
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
            className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
          >
            View All →
          </button>
        </div>
      </div>
    </section>
  );
};

