import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Welcome to <strong className="text-purple-600">DiamondLottery</strong>, 
              your premier destination for exquisite American diamonds!
            </p>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-purple-600">Our Mission</h2>
              <p>
                We are committed to providing you with the finest quality American 
                diamonds while offering an exciting lottery experience. Every purchase 
                of $1000 or more earns you a lottery ticket with the chance to win 
                incredible prizes!
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-purple-600">Why Choose Us?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Premium quality American diamonds</li>
                <li>Competitive pricing</li>
                <li>Exciting lottery rewards program</li>
                <li>Secure and easy checkout process</li>
                <li>Excellent customer service</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-purple-600">How It Works</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Browse our collection of beautiful diamonds</li>
                <li>Add items to your cart</li>
                <li>Purchase diamonds worth $1000 or more</li>
                <li>Receive lottery tickets automatically</li>
                <li>Redeem tickets for a chance to win amazing prizes!</li>
              </ol>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-3 text-purple-600">Contact Us</h2>
              <p>
                Have questions? We're here to help! Visit our{' '}
                <a href="/contact" className="text-purple-600 hover:underline">
                  contact page
                </a>{' '}
                to get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

