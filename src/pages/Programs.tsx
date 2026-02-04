import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  TrendingDown,
  Dumbbell,
  User,
  Activity,
  Apple,
  Users,
  Heart,
  Target,
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: TrendingDown,
      title: 'Weight Loss',
      description: 'Scientifically designed fat-burning programs with cardio, strength training, and nutrition guidance to help you lose weight sustainably.',
      features: ['Customized workout plans', 'Cardio & HIIT sessions', 'Diet consultation', 'Progress tracking'],
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-600 to-orange-800',
    },
    {
      icon: Dumbbell,
      title: 'Muscle Gain',
      description: 'Intensive strength training programs focused on building lean muscle mass with proper form, progressive overload, and nutrition.',
      features: ['Progressive strength training', 'Compound exercises', 'Protein-rich diet plans', 'Recovery protocols'],
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-600 to-red-800',
    },
    {
      icon: User,
      title: 'Personal Training',
      description: 'One-on-one dedicated training sessions with expert trainers who focus exclusively on your goals and provide constant motivation.',
      features: ['1-on-1 attention', 'Flexible scheduling', 'Customized programs', 'Faster results'],
      image: 'https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Activity,
      title: 'Functional Training',
      description: 'CrossFit-style functional movements that improve your overall fitness, mobility, and performance in daily activities.',
      features: ['CrossFit workouts', 'Mobility training', 'Core strengthening', 'Athletic performance'],
      image: 'https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-600 to-green-800',
    },
    {
      icon: Apple,
      title: 'Nutrition Guidance',
      description: 'Comprehensive diet plans and nutritional counseling to complement your training and maximize your results.',
      features: ['Custom meal plans', 'Macro tracking', 'Supplement advice', 'Regular check-ins'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-lime-600 to-lime-800',
    },
    {
      icon: Users,
      title: 'Women Special Batches',
      description: 'Exclusive training batches for women with female trainers, focusing on toning, strength, and overall wellness in a comfortable environment.',
      features: ['Female trainers', 'Exclusive timings', 'Toning programs', 'Safe environment'],
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-pink-600 to-pink-800',
    },
    {
      icon: Heart,
      title: 'Rehab & Recovery',
      description: 'Specialized programs for injury rehabilitation and post-recovery training with careful monitoring and gradual progression.',
      features: ['Injury assessment', 'Gentle progression', 'Corrective exercises', 'Pain management'],
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-600 to-teal-800',
    },
    
  ];

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-red-500">Programs</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our comprehensive range of training programs designed to help you achieve your specific fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Not Sure Which Program is Right for You?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a free consultation with our expert trainers and get a personalized fitness assessment
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/free-trial"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg text-lg hover:bg-gray-100 transition-all hover:scale-105 w-full sm:w-auto"
              >
                BOOK FREE CONSULTATION
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
    </div>
  );
};

const ProgramCard = ({ icon: Icon, title, description, features, image, color, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-gray-800 rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-red-500/20 transition-all"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent" />
        <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <Link
          to="/free-trial"
          className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-400 transition-colors group/link"
        >
          <span>Get Started</span>
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default Programs;
