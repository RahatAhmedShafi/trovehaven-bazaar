
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl">Discover our carefully selected products, designed with precision and crafted for excellence.</p>
          </div>
          <Link to="/products" className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors mt-4 md:mt-0">
            <span className="mr-2">View all products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/products" className="flex items-center">
              View all products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
