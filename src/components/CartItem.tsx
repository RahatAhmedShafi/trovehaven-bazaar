
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Product } from '../data/products';
import { MinusCircle, PlusCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: {
    product: Product;
    quantity: number;
  };
  isCheckout?: boolean;
}

const CartItem: React.FC<CartItemProps> = ({ item, isCheckout = false }) => {
  const { updateQuantity, removeFromCart, setIsCartOpen } = useCart();
  const { product, quantity } = item;
  
  const price = product.discount || product.price;
  const totalPrice = price * quantity;

  return (
    <div className="flex gap-4 py-3 animate-fade-in">
      {/* Product Image */}
      <Link 
        to={`/product/${product.id}`} 
        className="relative block h-20 w-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden"
        onClick={() => setIsCartOpen(false)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-grow min-w-0">
        <div className="flex justify-between">
          <Link 
            to={`/product/${product.id}`} 
            className="font-medium text-sm hover:text-primary transition-colors line-clamp-2"
            onClick={() => setIsCartOpen(false)}
          >
            {product.name}
          </Link>
          
          {!isCheckout && (
            <button 
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => removeFromCart(product.id)}
              title="Remove item"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="text-sm text-muted-foreground mt-1">
          ${price.toFixed(2)} {product.discount && (
            <span className="line-through text-xs ml-1">${product.price.toFixed(2)}</span>
          )}
        </div>

        <div className="flex justify-between items-center mt-2">
          {/* Quantity Controls */}
          <div className="flex items-center">
            <button
              disabled={quantity <= 1}
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MinusCircle className="h-4 w-4" />
            </button>
            
            <span className="mx-2 min-w-[24px] text-center text-sm">
              {quantity}
            </span>
            
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="text-gray-500 hover:text-gray-700"
            >
              <PlusCircle className="h-4 w-4" />
            </button>
          </div>

          {/* Total Price */}
          <div className="font-medium">
            ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
