
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Cart from './Cart';

const Navbar: React.FC = () => {
  const { totalItems, isCartOpen, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  // Track scroll position to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-bold text-xl md:text-2xl transition-opacity hover:opacity-80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ESSENTIA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
              <Link to="/products" className="text-foreground/80 hover:text-foreground transition-colors">Shop</Link>
              <Link to="/categories" className="text-foreground/80 hover:text-foreground transition-colors">Categories</Link>
              <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
            </nav>

            {/* Search, Cart, User */}
            <div className="hidden md:flex items-center space-x-4">
              <div className={`relative transition-all duration-300 ease-in-out ${searchFocused ? 'w-64' : 'w-48'}`}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border-transparent focus:border-gray-300 focus:ring-0"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-gray-100 rounded-full"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 px-[0.35rem] py-px min-w-[1.2rem] h-[1.2rem] rounded-full bg-primary text-white text-xs flex items-center justify-center"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-100 rounded-full"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-gray-100 rounded-full"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 px-[0.35rem] py-px min-w-[1.2rem] h-[1.2rem] rounded-full bg-primary text-white text-xs flex items-center justify-center"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-100 rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
            <div className="container mx-auto px-4 py-3">
              <div className="mb-4 mt-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border-transparent focus:border-gray-300 focus:ring-0 w-full"
                  />
                </div>
              </div>
              <nav className="flex flex-col space-y-3 pb-3">
                <Link 
                  to="/" 
                  className="text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className="text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link 
                  to="/categories" 
                  className="text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  to="/about" 
                  className="text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/account" 
                  className="text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Account
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      <Cart />
      
      {/* Navbar Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
