import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { lotteryPrizes } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel images - using high-quality diamond images from Unsplash
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
      title: 'Premium Collection',
      subtitle: 'Exquisite Diamonds'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80',
      title: 'Luxury Selection',
      subtitle: 'Timeless Elegance'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1596944924616-7b38e6cf5f92?w=1200&q=80',
      title: 'Exclusive Designs',
      subtitle: 'Rare Beauty'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Auto-rotate slides
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Marigold-like decorative strings */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 w-1 h-32 bg-gradient-to-b from-yellow-400 via-orange-400 to-transparent opacity-30"
                style={{
                  left: `${i * 5}%`,
                  animation: `sway ${3 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-800">DiamondLottery's</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Premium
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Diamond Collection
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Buy diamonds worth $1000 and get a chance to win amazing prizes including houses, cars, bikes, and more!
              </p>
              <Link
                to="/products"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Now
              </Link>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/1200x600/9333EA/FFFFFF?text=${encodeURIComponent(slide.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-2xl font-bold mb-1">{slide.title}</h3>
                      <p className="text-lg opacity-90">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 bg-purple-600'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">1. Shop Diamonds</h3>
              <p className="text-gray-600">
                Browse our collection of premium American diamonds
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">2. Spend $1000+</h3>
              <p className="text-gray-600">
                Purchase diamonds worth $1000 or more
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-xl font-semibold mb-2">3. Get Lottery Ticket</h3>
              <p className="text-gray-600">
                Receive a coupon code for every $1000 spent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Diamonds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl text-center py-8 bg-gray-50">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-purple-600">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="text-purple-600 font-semibold hover:underline"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Lottery Prizes */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            🎁 Amazing Lottery Prizes
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Win incredible prizes with your lottery tickets!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {lotteryPrizes.map((prize) => (
              <div
                key={prize.id}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-3">{prize.icon}</div>
                <h3 className="font-semibold mb-1">{prize.name}</h3>
                <p className="text-purple-600 font-bold">{prize.value}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/lottery"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
            >
              View My Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-pink-800 text-white text-center py-3 text-sm font-semibold">
        Additional up to 25% off on Credit Cards, Debit Cards & Net Banking payments
      </div>
    </div>
  );
};

export default Home;

