export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Manchester',
      prize: 'BMW X5 + £40,000 Cash',
      rating: 5,
      text: 'I still can\'t believe I won! The process was so smooth and the team was incredibly helpful. Thank you BOTS!',
      image: '👩'
    },
    {
      name: 'Michael Chen',
      location: 'London',
      prize: 'Lamborghini Huracan',
      rating: 5,
      text: 'Amazing experience from start to finish. The car arrived in perfect condition. Highly recommend!',
      image: '👨'
    },
    {
      name: 'Emma Williams',
      location: 'Birmingham',
      prize: '£250,000 Home',
      rating: 5,
      text: 'Life-changing win! The support team guided us through everything. This is 100% legitimate.',
      image: '👩'
    },
    {
      name: 'David Brown',
      location: 'Leeds',
      prize: '£10,000 Cash',
      rating: 5,
      text: 'Quick and easy to enter, and I actually won! The money was in my account within days.',
      image: '👨'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            What Our Winners Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Real winners, real prizes, real stories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="text-3xl sm:text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-3 sm:pt-4 border-t border-gray-100">
                <p className="text-[10px] sm:text-xs font-semibold text-orange-600">
                  Won: {testimonial.prize}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

