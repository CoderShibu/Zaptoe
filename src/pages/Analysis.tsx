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
  const marketData = [
    { metric: 'Market Opportunity', value: 'High Growth', trend: 'Scalable demand', color: 'text-primary' },
    { metric: 'Customer Research', value: 'Strong Interest', trend: 'Positive feedback', color: 'text-secondary' },
    { metric: 'Growth Potential', value: 'Significant', trend: 'Year 1 adoption', color: 'text-primary' },
    { metric: 'Global Vision', value: 'Expansion-Ready', trend: 'International markets', color: 'text-secondary' },
  ];

  const topProducts = [
    { name: 'Zaptoe Runner Pro', sales: '2,347', percentage: 85 },
    { name: 'Urban Casual Elite', sales: '1,893', percentage: 68 },
    { name: 'Formal Classic', sales: '1,621', percentage: 58 },
    { name: 'Sport Max', sales: '1,445', percentage: 52 },
    { name: 'Lifestyle Comfort', sales: '1,289', percentage: 46 },
  ];

  const insights = [
    {
      icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
      title: "Sales Growth (Projected)",
      description: "Anticipated strong adoption in initial launch markets",
      trend: "Projected"
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: "Customer Base (Building)",
      description: "Growing waitlist and early adopters showing high retention potential",
      trend: "Building"
    },
    {
      icon: <GlobeAmericasIcon className="h-6 w-6" />,
      title: "Market Expansion (Planned)",
      description: "Launching across key regions before scaling globally",
      trend: "Planned"
    },
    {
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
      title: "Digital Presence (Scaling)",
      description: "Focus on mobile-first experience and community engagement",
      trend: "Scaling"
    }
  ];

  const monthlyData = [
    { month: 'Jan', sales: 45000, customers: 1200 },
    { month: 'Feb', sales: 52000, customers: 1350 },
    { month: 'Mar', sales: 48000, customers: 1280 },
    { month: 'Apr', sales: 67000, customers: 1650 },
    { month: 'May', sales: 71000, customers: 1780 },
    { month: 'Jun', sales: 85000, customers: 2100 },
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
              Market Analysis & Insights
            </h1>
            <p className="text-xl text-white/90">
              Our strategy is built on research-driven insights, identifying opportunities, customer needs, and market trends that shape our growth path.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
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
              Key Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground">
              Early-stage metrics and goals defining our direction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
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

      {/* Market Insights */}
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
              Market Insights
            </h2>
            <p className="text-xl text-muted-foreground">
              Strategic analysis of market trends and opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
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
                      <span className="text-sm font-bold text-secondary">
                        {insight.trend}
                      </span>
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

      {/* Our Roadmap Insights */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Roadmap Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Strategic milestones paving the way for launch and growth
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-lg font-semibold text-secondary mb-2">
                  Sales Growth (Projected)
                </div>
                <div className="text-white/90">
                  Anticipated strong adoption in initial launch markets
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-lg font-semibold text-secondary mb-2">
                  Customer Base (Building)
                </div>
                <div className="text-white/90">
                  Growing waitlist and early adopters showing high retention potential
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-lg font-semibold text-secondary mb-2">
                  Market Expansion (Planned)
                </div>
                <div className="text-white/90">
                  Launching across key regions before scaling globally
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-lg font-semibold text-secondary mb-2">
                  Digital Presence (Scaling)
                </div>
                <div className="text-white/90">
                  Focus on mobile-first experience and community engagement
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Analysis;