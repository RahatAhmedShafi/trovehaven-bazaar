
import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingCart, ChevronLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    clearCart, 
    totalItems,
    subtotal
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 max-w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-4 py-4 border-b flex items-center justify-between">
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsCartOpen(false)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-medium flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Your Cart ({totalItems})
            </h2>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsCartOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">Looks like you haven't added any products to your cart yet.</p>
                <Button 
                  variant="default" 
                  className="rounded-full"
                  onClick={() => setIsCartOpen(false)}
                >
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem 
                    key={item.product.id} 
                    item={item} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t py-4 px-4">
              <div className="flex justify-between mb-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 px-2"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear cart
                </Button>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Subtotal</div>
                  <div className="text-lg font-semibold">${subtotal.toFixed(2)}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button 
                  className="w-full rounded-full"
                  asChild
                  onClick={() => setIsCartOpen(false)}
                >
                  <Link to="/checkout">
                    Checkout
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full"
                  asChild
                  onClick={() => setIsCartOpen(false)}
                >
                  <Link to="/cart">
                    View Cart
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
