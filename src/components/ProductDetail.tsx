
import React, { useState } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Share2, ChevronDown, Check, Star, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  
  const hasDiscount = product.discount && product.discount < product.price;
  const price = hasDiscount ? product.discount! : product.price;
  
  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(q => q + 1);
  };
  
  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={mainImage} 
              alt={product.name}
              className="w-full h-full object-cover animate-fade-in image-fade"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className={`relative aspect-square rounded-md overflow-hidden bg-gray-100 ${
                    mainImage === img ? 'ring-2 ring-primary' : 'hover:opacity-80'
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col animate-slide-up">
          {/* Product Title and Rating */}
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center">
              <div className="flex text-amber-400">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline">
              <div className="text-2xl md:text-3xl font-semibold">
                ${price.toFixed(2)}
              </div>
              {hasDiscount && (
                <div className="ml-3 text-lg text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </div>
              )}
              {hasDiscount && (
                <div className="ml-3 text-sm px-2 py-1 bg-red-100 text-red-700 rounded-full">
                  Save ${(product.price - product.discount!).toFixed(2)}
                </div>
              )}
            </div>
            
            {/* Stock Status */}
            <div className="mt-2 flex items-center">
              {product.stock > 0 ? (
                <>
                  <div className="size-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-muted-foreground">
                    In Stock ({product.stock} available)
                  </span>
                </>
              ) : (
                <>
                  <div className="size-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm text-muted-foreground">Out of Stock</span>
                </>
              )}
            </div>
          </div>
          
          {/* Short Description */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {product.shortDescription}
            </p>
          </div>
          
          {/* Add to Cart */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border rounded-md">
              <button 
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-50"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="w-12 text-center font-medium">
                {quantity}
              </div>
              <button 
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700"
                onClick={increaseQuantity}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            
            {/* Add to Cart Button */}
            <Button 
              className="flex-1 h-10 sm:h-auto rounded-md"
              onClick={() => addToCart(product, quantity)}
              disabled={product.stock <= 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            
            {/* Wishlist Button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 sm:h-auto rounded-md"
            >
              <Heart className="h-4 w-4" />
            </Button>
            
            {/* Share Button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 sm:h-auto rounded-md"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Shipping & Returns */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col sm:items-center text-center">
                <Truck className="mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium">Free Shipping</div>
                <div className="text-xs text-muted-foreground">On orders over $50</div>
              </div>
              <div className="flex flex-col sm:items-center text-center">
                <ShieldCheck className="mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium">2 Year Warranty</div>
                <div className="text-xs text-muted-foreground">Full coverage</div>
              </div>
              <div className="flex flex-col sm:items-center text-center">
                <RotateCcw className="mb-2 h-5 w-5 text-primary" />
                <div className="text-sm font-medium">30 Day Returns</div>
                <div className="text-xs text-muted-foreground">Hassle-free returns</div>
              </div>
            </div>
          </div>
          
          {/* Specifications */}
          {product.specifications && (
            <div className="mb-8">
              <button 
                className="flex items-center justify-between w-full py-2 text-left"
                onClick={() => setExpandedSpecs(!expandedSpecs)}
              >
                <span className="font-medium">Specifications</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${expandedSpecs ? 'transform rotate-180' : ''}`} />
              </button>
              
              {expandedSpecs && (
                <div className="mt-3 space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex py-2 border-b last:border-b-0">
                      <div className="w-1/3 text-sm text-muted-foreground">{key}</div>
                      <div className="w-2/3 text-sm">{value}</div>
                    </div>
                  ))}
                </div>
              )}
              <Separator className="my-6" />
            </div>
          )}
          
          {/* Description Tabs */}
          <Tabs defaultValue="description" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="text-muted-foreground">
              <p>{product.description}</p>
            </TabsContent>
            <TabsContent value="features">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Premium design with exceptional build quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Advanced technology for optimal performance</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Intuitive controls for seamless user experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Long-lasting durability for everyday use</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Energy efficient design for extended battery life</span>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="text-center py-10">
                <h3 className="text-lg font-medium mb-2">Customer Reviews</h3>
                <p className="text-muted-foreground mb-4">Reviews will be available soon.</p>
                <Button variant="outline">Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
