import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [filter, setFilter] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  const categories = ['all', ...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          💎 Our Diamond Collection
        </h1>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-purple-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link to={`/products/${product.id}`}>
                <div className="text-6xl text-center py-8 bg-gradient-to-br from-purple-50 to-pink-50">
                  {product.image}
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {product.carat} Carat • {product.category} Cut
                  </p>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-purple-600">
                    ${product.price}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

