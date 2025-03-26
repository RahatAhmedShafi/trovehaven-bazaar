import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import { ChevronRight, HeadphonesIcon, Sparkles, Star, Zap } from 'lucide-react';
import { getBestSellerProducts, getNewProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Index: React.FC = () => {
  const bestSellers = getBestSellerProducts().slice(0, 4);
  const newArrivals = getNewProducts().slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="p-6 bg-gray-50 rounded-xl flex flex-col items-center text-center animate-fade-up">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Meticulously crafted products with superior materials and finishes.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: "100ms" }}>
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">Quick delivery with careful packaging to ensure safe arrival.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Satisfaction Guarantee</h3>
                <p className="text-muted-foreground">Love your purchase or we'll make it right with our 30-day returns.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: "300ms" }}>
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Our dedicated team is always available to assist with any questions.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <FeaturedProducts />
        
        {/* Best Sellers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Best Sellers</h2>
                <p className="text-muted-foreground max-w-2xl">Our most popular products based on sales. Updated hourly.</p>
              </div>
              <a href="/best-sellers" className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors mt-4 md:mt-0">
                <span className="mr-2">View all bestsellers</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {bestSellers.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* New Arrivals Banner */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 text-white">
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="New arrivals" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center py-8 animate-fade-up">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">New Arrivals</h2>
                  <p className="text-lg mb-8 text-white/80 max-w-lg">
                    Discover our latest products featuring cutting-edge technology and innovative design.
                  </p>
                  <div>
                    <a 
                      href="/new-arrivals" 
                      className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Explore Collection
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {newArrivals.map((product, index) => (
                    <div 
                      key={product.id} 
                      className="bg-white/10 backdrop-blur-sm p-5 rounded-xl flex flex-col animate-fade-up"
                      style={{ animationDelay: `${index * 100 + 100}ms` }}
                    >
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                      <div className="text-white/70 text-sm mb-3">{product.shortDescription}</div>
                      <div className="mt-auto flex justify-between items-center">
                        <span className="font-semibold text-lg">
                          ${(product.discount || product.price).toFixed(2)}
                        </span>
                        <a 
                          href={`/product/${product.id}`} 
                          className="text-sm font-medium hover:text-primary transition-colors"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
