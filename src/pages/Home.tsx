
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRightIcon, 
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';
import heroShoes from '@/assets/hero-shoes.jpg';
import featuredShoe from '@/assets/featured-shoe.jpg';
import img2 from '@/assets/img2.jpg';
import img3 from '@/assets/img3.jpg';
import img4 from '@/assets/img4.jpg';
import { useCart } from '@/components/cart/CartContext';

const Home = () => {
  const features = [
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Crafted with the finest materials and attention to detail"
    },
    {
      icon: <TruckIcon className="h-6 w-6" />,
      title: "Fast Shipping",
      description: "Express delivery worldwide with tracking"
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Lifetime Warranty",
      description: "Quality guarantee on all our premium footwear"
    }
  ];

  const shoeCategories = [
    { name: "Male", count: "150+ Styles", link: "/shop?category=male" },
    { name: "Female", count: "120+ Styles", link: "/shop?category=female" },
    { name: "Unisex", count: "80+ Styles", link: "/shop?category=unisex" },
    { name: "Kids", count: "60+ Styles", link: "/shop?category=kids" }
  ];

  const { openCart } = useCart();

  // Image animation state
  const heroImages = [heroShoes, img2, img3]; // Use same 3 images for both sections

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Step into
                <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Style with Zaptoe
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Step into the future of footwear - where bold design meets all-day comfort. Find your perfect pair today.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/shop">
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="group"
                  >
                    Shop Now
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/wholesale">
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="group"
                  >
                    Explore Wholesale
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Images - 2 horizontal + 1 vertical */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="space-y-4">
                {/* First row - 2 horizontal images */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {heroImages.slice(0, 2).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                      className="relative hover-3d group"
                    >
                      <button onClick={openCart} className="w-full text-left">
                        <div className="relative w-full h-40 sm:h-48 lg:h-52 rounded-2xl shadow-premium overflow-hidden">
                          <img
                            src={image}
                            alt={`Premium Zaptoe shoe collection ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Second row - 1 vertical image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative hover-3d group"
                >
                  <button onClick={openCart} className="w-full text-left">
                    <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-2xl shadow-premium overflow-hidden">
                      <img
                        src={heroImages[2]}
                        alt="Premium Zaptoe shoe collection 3"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>
                  </button>
                </motion.div>
              </div>
              
              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-card"
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide">Launching With</div>
                  <div className="text-xl font-bold text-primary">50+ Premium Styles</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-card"
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-secondary uppercase tracking-wide">Join Our</div>
                  <div className="text-xl font-bold text-secondary">Early Community</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              Why Choose Zaptoe?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of style, comfort, and quality that sets us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Explore Our Collection
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Discover premium footwear for every member of your family. From stylish men's shoes to elegant women's designs, unisex classics, and adorable kids' styles.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {shoeCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link to={category.link}>
                      <div className="bg-background rounded-xl p-4 shadow-card hover:shadow-premium transition-smooth cursor-pointer group">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.count}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link to="/shop">
                <Button variant="hero" size="lg">
                  View All Categories
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="space-y-4">
                {/* First row - 2 horizontal images */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {heroImages.slice(0, 2).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                      className="relative hover-3d group"
                    >
                      <button onClick={openCart} className="w-full text-left">
                        <div className="relative w-full h-32 sm:h-40 lg:h-44 rounded-2xl shadow-premium overflow-hidden">
                          <img
                            src={image}
                            alt={`Premium Zaptoe shoe collection ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Second row - 1 vertical image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative hover-3d group"
                >
                  <button onClick={openCart} className="w-full text-left">
                    <div className="relative w-full h-40 sm:h-48 lg:h-52 rounded-2xl shadow-premium overflow-hidden">
                      <img
                        src={heroImages[2]}
                        alt="Premium Zaptoe shoe collection 3"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
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
              Ready to Step Up Your Style?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied customers who've made Zaptoe their go-to choice for premium footwear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button variant="secondary" size="lg" className="font-semibold">
                  Start Shopping
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;