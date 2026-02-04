import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Award,
  Users,
  Zap,
  Target,
  Heart,
  TrendingUp,
  Phone,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <ProgramsPreview />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-red-600/20 border border-red-600 rounded-full text-red-500 font-semibold text-sm uppercase tracking-wider">
              Best Gym in Ballari
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            TRANSFORM YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              BODY & MIND
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Expert trainers, modern equipment, and personalized programs to help you achieve your fitness goals
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/free-trial"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105 flex items-center space-x-2 group w-full sm:w-auto justify-center"
            >
              <span>BOOK FREE TRIAL</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:07090920101"
              className="px-8 py-4 bg-white text-black font-bold rounded-lg text-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>

            <a
              href="https://wa.me/917090920101?text=Hi, I'm interested in joining Energie Fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg text-lg hover:bg-green-600 transition-all hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WHATSAPP</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-red-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: Users, value: 100, label: 'Active Members', suffix: '+' },
    { icon: Award, value: 5, label: 'Years Experience', suffix: '+' },
    { icon: Zap, value: 4, label: 'Expert Trainers', suffix: '' },
    { icon: TrendingUp, value: 95, label: 'Success Rate', suffix: '%' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label, suffix, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 font-semibold uppercase tracking-wider text-sm">
        {label}
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Certified Trainers',
      description: 'Expert trainers with 6+ years of experience and professional certifications',
    },
    {
      icon: Zap,
      title: 'Modern Equipment',
      description: 'State-of-the-art gym equipment and facilities for optimal training',
    },
    {
      icon: Target,
      title: 'Personalized Programs',
      description: 'Custom workout plans tailored to your specific fitness goals',
    },
    {
      icon: Heart,
      title: 'Nutrition Guidance',
      description: 'Complete diet plans and nutritional support for best results',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-red-500">Energie Fitness</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide everything you need to transform your body and achieve lasting results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-black rounded-2xl p-8 hover:bg-gray-800 transition-all group hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const ProgramsPreview = () => {
  const programs = [
    {
      title: 'Weight Loss',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Muscle Gain',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Personal Training',
      image: 'https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-500">Programs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized training programs designed to help you reach your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} delay={index * 0.1} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/programs"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-105"
          >
            <span>VIEW ALL PROGRAMS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ title, image, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="w-12 h-1 bg-red-500 group-hover:w-24 transition-all" />
      </div>
    </motion.div>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of members who have transformed their lives at Energie Fitness
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/free-trial"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg text-lg hover:bg-gray-100 transition-all hover:scale-105 w-full sm:w-auto"
            >
              CLAIM YOUR FREE TRIAL
            </Link>
            <a
              href="tel:07090920101"
              className="px-8 py-4 bg-black text-white font-bold rounded-lg text-lg hover:bg-gray-900 transition-all hover:scale-105 w-full sm:w-auto"
            >
              CALL NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;  