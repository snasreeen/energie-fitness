import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const membershipPlans = [
    {
      name: 'Monthly',
      price: '1,500',
      duration: '1 Month',
      popular: false,
      features: [
        'Access to all gym equipment',
        'Locker facility',
        'Basic fitness assessment',
        'Group training sessions',
        'Free gym orientation',
        'Workout tracking',
      ],
      icon: Zap,
    },
   
    {
      name: 'Quarterly',
      price: '3,500',
      duration: '3 Months',
      popular: true,
      
      features: [
        'All Monthly features included',
        'Customized workout plan',
        'Diet consultation',
        'Progress assessment',
        'Priority support',
      ],
      icon: Star,
    },
     {
      name: 'Monthly',
      price: '5,000',
      duration: '6 Month',
      popular: false,
      features: [
        'Access to all gym equipment',
        'Locker facility',
        'Basic fitness assessment',
        'Group training sessions',
        'Free gym orientation',
        'Workout tracking',
      ],
      icon: Zap,
    },
    {
      name: 'Yearly',
      price: '8,000',
      duration: '12 Months',
      popular: false,
      features: [
        'All Quarterly features included',
        
        'Advanced body composition analysis',
        'Monthly diet plan updates',
        'Supplement guidance',
      ],
      icon: Crown,
    },
  ];

  const personalTraining = [
    {
      Duration: '12 Sessions',
      price: '6,000',
      validity: '30 Days',
      features: ['1-on-1 personal training',
      'Customized workout plan',
      'Personal diet plan',
      'Flexible training timings',
      'Progress monitoring',],
    },
    {
      Duration: '3 months',
      price: '15,000',
      validity: '90 Days',
      features: ['1-on-1 training', 'Flexible training timings','Customized program', 'Diet consultation', 'Weekly assessments'],
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
              Simple, Transparent <span className="text-red-500">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey. All plans include access to premium equipment and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Membership Plans
            </h2>
            <p className="text-gray-400 text-lg">
              Flexible plans to suit your fitness goals and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {membershipPlans.map((plan, index) => (
              <MembershipCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Personal Training
            </h2>
            <p className="text-gray-400 text-lg">
              Get dedicated one-on-one attention from expert trainers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {personalTraining.map((plan, index) => (
              <PersonalTrainingCard key={index} {...plan} delay={index * 0.1} />
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Visit us for a free tour or call us to discuss the best plan for your goals
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/free-trial"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg text-lg hover:bg-gray-100 transition-all hover:scale-105 w-full sm:w-auto"
              >
                BOOK FREE TRIAL
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

const MembershipCard = ({ name, price, duration, popular, discount, features, icon: Icon, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className={`relative bg-gray-800 rounded-3xl p-8 hover:scale-105 transition-all ${
        popular ? 'ring-4 ring-red-500 shadow-2xl shadow-red-500/30' : ''
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full text-sm uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-5xl font-bold text-white">₹{price}</span>
          <span className="text-gray-400 ml-2">/{duration}</span>
        </div>
        {discount && (
          <span className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">
            {discount}
          </span>
        )}
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      <Link
        to="/free-trial"
        className={`block w-full py-4 rounded-lg font-bold text-center transition-all hover:scale-105 ${
          popular
            ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg hover:shadow-red-500/50'
            : 'bg-white text-black hover:bg-gray-100'
        }`}
      >
        GET STARTED
      </Link>
    </motion.div>
  );
};

const PersonalTrainingCard = ({ sessions, price, validity, popular, features, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className={`bg-gray-800 rounded-3xl p-8 hover:scale-105 transition-all ${
        popular ? 'ring-4 ring-red-500 shadow-2xl shadow-red-500/30' : ''
      }`}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{sessions}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold text-white">₹{price}</span>
        </div>
        <span className="text-gray-400">{validity}</span>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      <Link
        to="/free-trial"
        className={`block w-full py-4 rounded-lg font-bold text-center transition-all hover:scale-105 ${
          popular
            ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg hover:shadow-red-500/50'
            : 'bg-white text-black hover:bg-gray-100'
        }`}
      >
        BOOK NOW
      </Link>
    </motion.div>
  );
};

export default Pricing;
