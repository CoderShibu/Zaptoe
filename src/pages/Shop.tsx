import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import heroShoes from '@/assets/hero-shoes.jpg';
import { useCart } from '@/components/cart/CartContext';

const Shop = () => {
  const categories = [
    { name: "Athletic", count: "120+ Styles", image: "🏃‍♂️" },
    { name: "Casual", count: "85+ Styles", image: "👟" },
    { name: "Formal", count: "60+ Styles", image: "👞" },
    { name: "Running", count: "95+ Styles", image: "🏃‍♀️" },
    { name: "Lifestyle", count: "70+ Styles", image: "👟" },
    { name: "Business", count: "45+ Styles", image: "👔" }
  ];

  const featuredProducts = [
    { id: 'runner-pro', name: "Zaptoe Runner Pro", price: 2999, rating: "4.9" },
    { id: 'urban-casual', name: "Urban Casual Elite", price: 2199, rating: "4.8" },
    { id: 'formal-classic', name: "Formal Classic", price: 3499, rating: "4.7" },
    { id: 'sport-max', name: "Sport Max", price: 2799, rating: "4.9" },
  ];

  const { addItem, openCart } = useCart();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Shop Premium Footwear
            </h1>
            <p className="text-xl text-white/90">
              Discover our complete collection of premium shoes designed for every occasion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find the perfect shoes for any occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-smooth cursor-pointer group"
              >
                <div className="text-4xl mb-4">{category.image}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">{category.count}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Browse {category.name}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground">
              Our most popular and highly-rated shoes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-smooth group"
              >
                <div className="aspect-square bg-muted/50 relative">
                  <img 
                    src={heroShoes} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm font-semibold">
                    ⭐ {product.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => {
                      addItem({ id: product.id, name: product.name, price: product.price, imageUrl: heroShoes });
                      openCart();
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our team for personalized recommendations or custom orders
            </p>
            <Button variant="secondary" size="lg">
              Contact Sales Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shop;