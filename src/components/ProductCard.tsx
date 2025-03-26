
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const hasDiscount = product.discount && product.discount < product.price;
  
  // Calculate discount percentage if applicable
  const discountPercentage = hasDiscount
    ? Math.round(((product.price - (product.discount || 0)) / product.price) * 100)
    : 0;

  return (
    <div 
      className={`group relative flex flex-col bg-white rounded-xl overflow-hidden product-transition animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-square">
        <div className="absolute inset-0 bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 product-image"
            loading="lazy"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {hasDiscount && (
            <Badge className="bg-red-500 hover:bg-red-600">
              {discountPercentage}% OFF
            </Badge>
          )}
          {product.new && (
            <Badge className="bg-blue-500 hover:bg-blue-600">
              NEW
            </Badge>
          )}
          {product.bestSeller && !product.new && !hasDiscount && (
            <Badge className="bg-amber-500 hover:bg-amber-600">
              BEST SELLER
            </Badge>
          )}
        </div>
        
        {/* Quick add button */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
          <Button 
            className="bg-white text-foreground hover:bg-gray-100 shadow-md"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-1 text-sm text-muted-foreground">
          {product.category}
        </div>
        
        <Link to={`/product/${product.id}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-medium text-base md:text-lg line-clamp-2 min-h-[2.5rem] mb-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-2 flex items-baseline">
          {hasDiscount ? (
            <div className="flex items-center">
              <span className="font-semibold text-lg">${product.discount?.toFixed(2)}</span>
              <span className="ml-2 text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
          )}
          
          <div className="ml-auto flex items-center">
            <div className="flex text-amber-400">
              {Array(5).fill(0).map((_, i) => (
                <svg 
                  key={i} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                  stroke="currentColor" 
                  className="w-3 h-3" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
