
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[75vh] md:min-h-[80vh] items-center py-16 md:py-28">
          {/* Text Content */}
          <div className="flex flex-col max-w-xl mx-auto md:mx-0 text-center md:text-left animate-fade-up">
            <span className="text-sm uppercase tracking-wider text-primary font-medium mb-3">
              Premium Collection
            </span>
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 md:mb-6">
              Discover Perfect Solutions for Modern Life
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
              Thoughtfully designed products that blend innovation with elegance, enhancing your everyday experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full text-base px-8">
                <Link to="/products">
                  Shop Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base">
                <Link to="/categories" className="flex items-center">
                  Explore Categories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block animate-fade-in">
            <div className="relative h-[500px] w-full">
              <div className="absolute inset-y-0 right-0 w-full overflow-hidden rounded-2xl image-fade">
                <img 
                  src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1001&q=80" 
                  alt="Premium headphones" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Product Card */}
              <div className="absolute bottom-10 -left-10 max-w-xs glass-panel rounded-xl p-5 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-lg overflow-hidden bg-white">
                    <img 
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Premium Wireless Headphones" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Premium Headphones</h3>
                    <p className="text-sm text-foreground/70">Immersive sound experience</p>
                    <div className="mt-2 font-semibold">$249.99</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Circles */}
              <div className="absolute -right-10 top-16 size-20 rounded-full bg-primary/10 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "200ms" }}></div>
              <div className="absolute left-10 top-20 size-12 rounded-full bg-white/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
