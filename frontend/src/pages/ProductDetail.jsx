import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-purple-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="text-purple-600 hover:underline mb-4 inline-block"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-12">
              <div className="text-9xl">{product.image}</div>
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-bold text-purple-600 mb-6">
                ${product.price}
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <span className="font-semibold">Category:</span>{' '}
                  <span className="text-gray-600">{product.category} Cut</span>
                </div>
                <div>
                  <span className="font-semibold">Carat:</span>{' '}
                  <span className="text-gray-600">{product.carat} Carat</span>
                </div>
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Quantity:</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 <strong>Lottery Bonus:</strong> Purchase diamonds worth $1000 or
                  more to receive lottery tickets for amazing prizes!
                </p>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              >
                Add to Cart (${product.price * quantity})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

