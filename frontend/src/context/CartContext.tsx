import { createContext, useContext, useState, ReactNode } from 'react';
import { Competition } from '../types';

interface CartItem extends Competition {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  addToCart: (competition: Competition) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('bots-cart');
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (competition: Competition) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === competition.id);
      let newCart;
      if (existingItem) {
        newCart = prevCart.map((item) =>
          item.id === competition.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { ...competition, quantity: 1 }];
      }
      localStorage.setItem('bots-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem('bots-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      localStorage.setItem('bots-cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('bots-cart');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      if (item.price === 'FREE') return total;
      const price = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
      return total + price * item.quantity;
    }, 0);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};




