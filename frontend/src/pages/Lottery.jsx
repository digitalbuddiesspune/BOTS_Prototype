import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { lotteryPrizes } from '../data/products';

const Lottery = () => {
  const { lotteryTickets, redeemTicket } = useCart();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [prizeWon, setPrizeWon] = useState(null);

  const availableTickets = lotteryTickets.filter((ticket) => !ticket.used);
  const usedTickets = lotteryTickets.filter((ticket) => ticket.used);

  const handleRedeem = (ticket) => {
    setSelectedTicket(ticket);
    // Simulate lottery draw
    const randomPrize =
      lotteryPrizes[Math.floor(Math.random() * lotteryPrizes.length)];
    setPrizeWon(randomPrize);
    redeemTicket(ticket.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">
            <h1 className="text-5xl font-extrabold">
              🎫 My Lottery Tickets
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Redeem your tickets for a chance to win amazing prizes!
          </p>
        </div>

        {lotteryTickets.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-16 text-center border border-purple-100">
            <div className="text-8xl mb-6 animate-bounce">🎫</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">No Lottery Tickets Yet</h2>
            <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
              Purchase diamonds worth $1000 or more to receive lottery tickets!
            </p>
            <Link
              to="/products"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            {/* Available Tickets */}
            {availableTickets.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Available Tickets
                  </h2>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {availableTickets.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {availableTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 border-2 border-purple-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -mr-16 -mt-16"></div>
                      <div className="text-center mb-6 relative z-10">
                        <div className="text-6xl mb-4">🎫</div>
                        <p className="font-mono text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                          {ticket.code}
                        </p>
                        <p className="text-sm text-gray-500 mt-3">
                          Issued: {new Date(ticket.date).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRedeem(ticket)}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Redeem Ticket
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Used Tickets */}
            {usedTickets.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Redeemed Tickets
                  </h2>
                  <span className="bg-gray-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {usedTickets.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {usedTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md p-8 border-2 border-gray-200"
                    >
                      <div className="text-center">
                        <div className="text-6xl mb-4">✅</div>
                        <p className="font-mono text-lg font-bold text-gray-500">
                          {ticket.code}
                        </p>
                        <p className="text-sm text-gray-400 mt-3">
                          Redeemed: {new Date(ticket.date).toLocaleDateString()}
                        </p>
                        {ticket.prize && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-purple-600 font-bold">
                              Prize: {ticket.prize}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prize Won Modal */}
            {prizeWon && selectedTicket && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-12 max-w-md w-full text-center transform animate-scaleIn border-4 border-purple-300">
                  <div className="text-8xl mb-6 animate-bounce">{prizeWon.icon}</div>
                  <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    Congratulations!
                  </h2>
                  <p className="text-2xl font-bold mb-6 text-gray-800">
                    You won: {prizeWon.name}
                  </p>
                  <div className="bg-white/80 rounded-2xl p-4 mb-6">
                    <p className="text-lg text-purple-600 font-bold mb-2">Value: {prizeWon.value}</p>
                    <p className="text-sm text-gray-500 font-mono">
                      Ticket: {selectedTicket.code}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setPrizeWon(null);
                      setSelectedTicket(null);
                    }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Awesome! 🎉
                  </button>
                </div>
              </div>
            )}

            {/* Available Prizes Section */}
            <div className="mt-12 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-10 border border-purple-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text inline-block">
                  🎁 Available Prizes
                </h2>
                <p className="text-gray-600">What you could win!</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {lotteryPrizes.map((prize) => (
                  <div
                    key={prize.id}
                    className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-100"
                  >
                    <div className="text-5xl mb-3">{prize.icon}</div>
                    <h3 className="font-bold mb-2 text-gray-800">{prize.name}</h3>
                    <p className="text-purple-600 font-extrabold">
                      {prize.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Lottery;