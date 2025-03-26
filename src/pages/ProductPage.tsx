
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getFeaturedProducts, Product } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  
  // Get related products (excluding current product)
  const relatedProducts = getFeaturedProducts()
    .filter(p => p.id !== Number(id))
    .slice(0, 4);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you are looking for does not exist or has been removed.</p>
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <span>/</span>
              <a href="/products" className="hover:text-foreground transition-colors">Products</a>
              <span>/</span>
              <a href={`/category/${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors">{product.category}</a>
              <span>/</span>
              <span className="text-foreground truncate">{product.name}</span>
            </div>
          </div>
        </div>
        
        {/* Product Detail */}
        <ProductDetail product={product} />
        
        {/* Related Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-10 text-center">You Might Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
