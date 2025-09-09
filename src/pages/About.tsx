import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  TrophyIcon,
  GlobeAmericasIcon,
  UsersIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import AshrafImage from '@/assets/Ashraf.jpg';
import FaisalImage from '@/assets/Faisal.jpg';
import MustakeemImage from '@/assets/Mustakeem.jpg';
import NeeleshImage from '@/assets/Neelesh.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Us', icon: <UsersIcon className="h-5 w-5" /> },
    { id: 'team', label: 'Team', icon: <UserGroupIcon className="h-5 w-5" /> }
  ];

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

      {/* Tab Navigation */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex bg-muted rounded-lg p-1">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-2 ${
                    activeTab === tab.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'about' && (
        <>
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
        </>
      )}

      {activeTab === 'team' && (
        <>
          {/* Our Masterminds Section */}
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
                  Our Masterminds
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Meet the brilliant minds behind Zaptoe's innovation and success
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Ashraf Khan */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-card rounded-xl p-8 shadow-card hover:shadow-premium transition-smooth"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-6">
                    <img 
                      src={AshrafImage} 
                      alt="Ashraf Khan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ashraf Khan
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With over a decade of experience in Saudi Arabia and 8+ years in creative design, Ashraf specializes in motion graphics and visual storytelling. Combining a Commerce background with expertise in tools like CorelDRAW, SignLab, and Adobe Illustrator, he crafts impactful content for learning and branding. Passionate about innovation and global engagement, Ashraf brings fresh perspectives through photography and animation.
                  </p>
                </motion.div>

                {/* Neelesh Singh */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card rounded-xl p-8 shadow-card hover:shadow-premium transition-smooth"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-6">
                    <img 
                      src={NeeleshImage} 
                      alt="Neelesh Singh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Neelesh Singh
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Neelesh is a technology risk professional with expertise in third-party risk, data protection, and supplier assurance. He has led global vendor risk assessments across APAC, NAR, and EMEA, ensuring compliance and resilience for complex financial ecosystems. His focus lies in enabling secure operations through strategic risk insights and a commitment to operational excellence.
                  </p>
                </motion.div>

                {/* Faisal Khalid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card rounded-xl p-8 shadow-card hover:shadow-premium transition-smooth"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-6">
                    <img 
                      src={FaisalImage} 
                      alt="Faisal Khalid" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Faisal Khalid
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in Lucknow, Faisal brings over a decade of leadership experience in real estate development. As a General Manager, he works closely with developers to drive strategic growth, operational efficiency, and successful project execution. His deep industry knowledge and hands-on approach make him a trusted partner in delivering value-driven solutions across the property landscape.
                  </p>
                </motion.div>

                {/* Mustakeem Khan */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-card rounded-xl p-8 shadow-card hover:shadow-premium transition-smooth"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-6">
                    <img 
                      src={MustakeemImage} 
                      alt="Mustakeem Khan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Mustakeem Khan
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mustakeem is a strategic market analyst with deep expertise in business intelligence and high-impact market insights. Known for translating complex data into actionable strategies, he supports informed decision-making and drives growth across sectors. His analytical precision and industry awareness make him a valuable asset in navigating dynamic market landscapes.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default About;