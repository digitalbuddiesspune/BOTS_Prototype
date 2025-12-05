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

  const handleAddToCart = () => {
    addToCart(competition);
    // Show a subtle notification instead of alert
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-slideDown';
    notification.textContent = `✓ Added "${competition.title}" to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 2000);
  };

  // Generate a better fallback image based on title - all diamond images
  const getFallbackImage = () => {
    const title = competition.title.toLowerCase();
    if (title.includes('ring')) {
      return 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop';
    }
    if (title.includes('necklace') || title.includes('pendant') || title.includes('choker')) {
      return 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop';
    }
    if (title.includes('earring')) {
      return 'https://images.unsplash.com/photo-1603561596112-0d0395e0f0b1?w=400&h=300&fit=crop';
    }
    if (title.includes('bracelet') || title.includes('bangle')) {
      return 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop';
    }
    // Default diamond jewelry image
    return 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop';
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
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col transform hover:-translate-y-2">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
        {imageLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-20">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={competition.image}
          alt={competition.title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {competition.price === 'FREE' && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl z-10 transform hover:scale-110 transition-transform">
            FREE
          </div>
        )}
        {competition.price !== 'FREE' && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-3 py-1 rounded-md text-xs font-bold shadow-xl z-10 transform hover:scale-110 transition-transform">
            SALE
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1 bg-gradient-to-b from-white to-gray-50">
        <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg min-h-[3rem] sm:min-h-[3.5rem] leading-tight line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
          {competition.title}
        </h3>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <div>
              <span className="text-indigo-600 font-bold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                {competition.price}
              </span>
              {competition.price !== 'FREE' && (
                <span className="text-gray-400 line-through text-sm sm:text-base ml-2">
                  ₹{(parseFloat(competition.price.replace(/[₹,]/g, '')) * 1.2).toFixed(0)}
                </span>
              )}
            </div>
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full relative overflow-hidden group/btn"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              ADD TO CART
            </span>
            <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

