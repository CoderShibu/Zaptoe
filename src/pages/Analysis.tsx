import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowTrendingUpIcon, 
  ChartBarIcon, 
  UsersIcon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const Analysis = () => {
  const initiativeHighlights = [
    { metric: 'Overview', value: 'New Initiative', trend: 'Launching Now', color: 'text-primary' },
    { metric: 'Mission', value: 'Deliver Value', trend: 'Customer-first', color: 'text-secondary' },
    { metric: 'Vision', value: 'Lead the Market', trend: 'Long-term focus', color: 'text-primary' },
    { metric: 'Premium Quality', value: 'Top-grade', trend: 'No compromises', color: 'text-secondary' },
  ];

  const initiativeSections = [
    {
      icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
      title: 'Overview',
      description:
        'Introducing our new initiative focused on innovation, reliability, and a premium customer experience across every touchpoint.'
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: 'Mission',
      description:
        'To design and deliver products that consistently exceed expectations with service that earns lifelong trust.'
    },
    {
      icon: <GlobeAmericasIcon className="h-6 w-6" />,
      title: 'Vision',
      description:
        'To become the most loved, responsible, and forward-thinking brand in our category.'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
      title: 'Premium Quality',
      description:
        'Materials, craftsmanship, and QC processes that meet stringent standards for durability and comfort.'
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
              New Initiative
            </h1>
            <p className="text-xl text-white/90">
              Overview, Mission, Vision, and our uncompromising commitment to Premium Quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
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
              Initiative at a Glance
            </h2>
            <p className="text-xl text-muted-foreground">
              The pillars guiding our next chapter
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiativeHighlights.map((data, index) => (
              <motion.div
                key={data.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-premium transition-smooth"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {data.metric}
                  </h3>
                  <div className={`text-sm font-semibold ${data.color}`}>
                    {data.trend}
                  </div>
                </div>
                <div className={`text-3xl font-bold ${data.color} mb-2`}>
                  {data.value}
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-2 rounded-full ${
                      data.color.includes('primary') ? 'bg-primary' : 'bg-secondary'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
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
              Mission, Vision & Quality
            </h2>
            <p className="text-xl text-muted-foreground">
              What we stand for and what we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiativeSections.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-premium transition-smooth group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-bounce">
                    {insight.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {insight.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analysis;