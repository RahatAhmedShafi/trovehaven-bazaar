
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProductsByCategory, getAllCategories, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const CategoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();
  
  // Get products for the selected category, or all products if no category is selected
  const categoryProducts: Product[] = selectedCategory 
    ? getProductsByCategory(selectedCategory)
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-8 pb-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 mb-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Product Categories</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive collection of products organized by category. Find exactly what you're looking for with ease.
            </p>
          </div>
        </section>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="font-medium text-lg mb-4">Categories</h2>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Products
                  </Button>
                  
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              {selectedCategory === null ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-4">Select a category to view products</h3>
                  <p className="text-muted-foreground">Choose a product category from the sidebar to browse our offerings.</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-medium">{selectedCategory}</h2>
                    <p className="text-muted-foreground">{categoryProducts.length} products</p>
                  </div>
                  
                  {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                      <h3 className="text-xl font-medium mb-2">No products found</h3>
                      <p className="text-muted-foreground mb-4">We couldn't find any products in this category.</p>
                      <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                        View all categories
                      </Button>
                    </div>
                  )}
                  
                  {/* Pagination - only shown if we have products */}
                  {categoryProducts.length > 0 && (
                    <div className="mt-10">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#" isActive>
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext href="#" />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
