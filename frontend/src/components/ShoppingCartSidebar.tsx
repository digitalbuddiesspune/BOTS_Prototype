import { useCart } from '../context/CartContext';

interface ShoppingCartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingCartSidebar = ({ isOpen, onClose }: ShoppingCartSidebarProps) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Proceeding to checkout with ${cart.length} items. Total: ₹${getCartTotal().toLocaleString('en-IN')}`);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-2"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg className="w-24 h-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-gray-500 text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-gray-400 text-sm">Add items to your cart to see them here</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => {
                  const itemPrice = item.price === 'FREE' ? 0 : parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
                  const itemTotal = itemPrice * item.quantity;

                  return (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-indigo-600 font-bold text-sm sm:text-base mb-2">
                          ₹{itemPrice.toLocaleString('en-IN')}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 hover:text-red-700 p-1 transition-colors"
                            aria-label="Remove item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Subtotal: <span className="font-semibold text-gray-900">₹{itemTotal.toLocaleString('en-IN')}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer with Total and Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-indigo-600">
                  ₹{getCartTotal().toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors shadow-md hover:shadow-lg"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

