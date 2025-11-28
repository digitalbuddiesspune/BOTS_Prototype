import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">💎 DiamondLottery</h3>
            <p className="text-gray-400">
              Premium American diamonds with exciting lottery prizes!
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Diamonds
                </Link>
              </li>
              <li>
                <Link to="/lottery" className="hover:text-white transition-colors">
                  My Tickets
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Lottery Prizes</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>🏠 House</li>
              <li>🏍️ Bike</li>
              <li>🚗 BMW Car</li>
              <li>❄️ AC</li>
              <li>⌚ Expensive Watches</li>
              <li>✨ And More!</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DiamondLottery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

