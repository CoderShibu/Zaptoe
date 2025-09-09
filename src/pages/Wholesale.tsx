import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  TruckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAmericasIcon
} from '@heroicons/react/24/outline';

const Wholesale = () => {
  const benefits = [
    {
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      title: "Competitive Pricing",
      description: "Volume discounts starting at 50 pairs with tiered pricing for larger orders"
    },
    {
      icon: <TruckIcon className="h-8 w-8" />,
      title: "Fast Shipping",
      description: "Express logistics network with 2-5 day delivery worldwide"
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: "Dedicated Support",
      description: "Personal account manager for all your wholesale needs"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "100% quality assurance with flexible return policies"
    }
  ];

  const pricingTiers = [
    { range: "50-199 pairs", discount: "15% off", price: "₹339-₹849" },
    { range: "200-499 pairs", discount: "25% off", price: "₹299-₹749" },
    { range: "500-999 pairs", discount: "35% off", price: "₹259-₹649" },
    { range: "1000+ pairs", discount: "45% off", price: "₹219-₹549" }
  ];

  const stats = [
    { number: "500+", label: "Retail Partners" },
    { number: "50+", label: "Countries" },
    { number: "10M+", label: "Pairs Sold" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

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
              Wholesale Partnership
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Partner with Zaptoe for premium footwear wholesale. Competitive pricing, reliable supply chain, and dedicated support for your business growth.
            </p>
            <Button variant="secondary" size="lg">
              Request Wholesale Catalog
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Zaptoe Wholesale?
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to succeed in the footwear retail business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
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
              Wholesale Pricing Tiers
            </h2>
            <p className="text-xl text-muted-foreground">
              Volume-based pricing to maximize your profit margins
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.range}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-premium transition-smooth"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {tier.range}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {tier.discount}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Price range: {tier.price}
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Apply for Wholesale Partnership
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our network of successful retail partners worldwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name
                  </label>
                  <Input placeholder="Your business name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact Person
                  </label>
                  <Input placeholder="Your full name" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="business@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Type
                  </label>
                  <Input placeholder="Retail store, Online store, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Expected Monthly Volume
                  </label>
                  <Input placeholder="Number of pairs per month" />
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </motion.div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our wholesale team for personalized consultation and pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Download Catalog
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Schedule Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Wholesale;