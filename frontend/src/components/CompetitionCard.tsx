import { useState } from 'react';
import { Competition } from '../types';
import { useCart } from '../context/CartContext';

interface CompetitionCardProps {
  competition: Competition;
}

export const CompetitionCard = ({ competition }: CompetitionCardProps) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const progressPercentage = (competition.entriesSold / competition.totalEntries) * 100;

  const handlePlayNow = () => {
    addToCart(competition);
    alert(`Added "${competition.title}" to cart!`);
  };

  // Generate a better fallback image based on title
  const getFallbackImage = () => {
    const title = competition.title.toLowerCase();
    if (title.includes('car') || title.includes('audi') || title.includes('bmw') || title.includes('lamborghini') || title.includes('nissan') || title.includes('mini')) {
      return 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop';
    }
    if (title.includes('cash') || title.includes('money')) {
      return 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop';
    }
    if (title.includes('home') || title.includes('house')) {
      return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop';
    }
    if (title.includes('tech') || title.includes('iphone') || title.includes('apple') || title.includes('playstation') || title.includes('headphone') || title.includes('macbook')) {
      return 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop';
    }
    return 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop';
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    setImageLoading(false);
    const target = e.target as HTMLImageElement;
    target.src = getFallbackImage();
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group">
      <div className="relative overflow-hidden bg-gray-200">
        {imageLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={competition.image}
          alt={competition.title}
          className={`w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        {competition.price === 'FREE' && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
            FREE
          </div>
        )}
      </div>
      <div className="p-2 sm:p-3 md:p-4 lg:p-5">
        <h3 className="font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3 text-[10px] sm:text-xs md:text-sm min-h-[2rem] sm:min-h-[2.5rem] leading-tight line-clamp-2">
          {competition.title}
        </h3>
        <div className="flex flex-col gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
          <div className="flex items-center justify-between">
            <span className="text-orange-600 font-bold text-base sm:text-lg md:text-xl">{competition.price}</span>
          </div>
          <button 
            onClick={handlePlayNow}
            className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2.5 rounded-md font-semibold text-[10px] sm:text-xs md:text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 w-full"
          >
            PLAY NOW
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 md:h-2.5 mb-1 sm:mb-1.5 md:mb-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-500 to-orange-600 h-1.5 sm:h-2 md:h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 font-medium">
          {competition.entriesSold.toLocaleString()} / {competition.totalEntries.toLocaleString()} entries
        </p>
      </div>
    </div>
  );
};

