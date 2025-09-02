import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrophyIcon,
  GlobeAmericasIcon,
  UsersIcon,
  HeartIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const milestones = [
    { year: '2018', event: 'Founded Zaptoe with a vision for premium footwear' },
    { year: '2019', event: 'Launched our first athletic shoe line' },
    { year: '2020', event: 'Expanded to formal and casual collections' },
    { year: '2021', event: 'Reached 5,000+ satisfied customers' },
    { year: '2022', event: 'Opened wholesale division for retailers' },
    { year: '2023', event: 'Achieved 10,000+ customers milestone' },
    { year: '2024', event: 'Pioneering sustainable shoe manufacturing' },
  ];

  const values = [
    {
      icon: <TrophyIcon className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for perfection in every pair, from design to delivery."
    },
    {
      icon: <GlobeAmericasIcon className="h-8 w-8" />,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and responsible manufacturing."
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Community",
      description: "Building lasting relationships with customers and partners worldwide."
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Passion",
      description: "Every shoe is crafted with love and dedication to quality."
    }
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
              About Zaptoe
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Born from a passion for exceptional footwear, Zaptoe represents the perfect fusion of style, comfort, and quality. We believe every step you take should be confident and comfortable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Centered */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To revolutionize the footwear industry by creating shoes that don't just look good, but feel incredible and last for years. We're committed to sustainable practices, fair manufacturing, and delivering value to both retail and wholesale customers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every pair of Zaptoe shoes represents our dedication to craftsmanship, innovation, and the belief that great shoes can make any journey more enjoyable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Zaptoe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-bounce shadow-card">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
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
              Be Part of Our Story
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of customers who trust Zaptoe for their footwear needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold shadow-premium hover:shadow-glow transition-smooth"
                >
                  Shop Our Collection
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-smooth"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;