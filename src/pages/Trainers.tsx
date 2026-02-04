import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Award, Target, Heart, Zap } from 'lucide-react';

import arifImg from '../trainers/arif.jpg';


const Trainers = () => {
  const trainers = [
    {
      name: 'Arif Shaikh',
      role: 'Owner',
      experience: '5+ Years',
      specialization: ['Strength Training', 'Muscle Gain', 'Nutrition'],
      certifications: ['Functional Training Expert', 'Personal Trainer' ],
      image: arifImg,
      description: 'Dedicated fitness trainer focused on helping members improve strength, endurance, and overall health through structured workouts and consistent guidance.',
    },
    {
      name: 'Anitha',
      role: 'Women\'s Fitness Trainer',
      experience: '3+ Years',
      specialization: ['Women\'s Fitness', 'Weight Loss'],
      certifications: ['Certified Fitness Trainer', 'Women\'s Health Specialist'],
      image: 'https://images.pexels.com/photos/4944375/pexels-photo-4944375.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'anitha specializes in women\'s fitness, creating safe and effective programs for all fitness levels.',
    },
    {
      name: 'Rihan',
      role: 'Personal Trainer  ',
      experience: '7+ Years',
      specialization: ['Powerlifting', 'CrossFit' ,'Weight Loss', 'Nutrition Planning'],
      certifications: ['Certified Strength Coach' ,'Personal Trainer'],
      image: 'https://images.pexels.com/photos/4944375/pexels-photo-4944375.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experienced gym trainer committed to supporting members in their fitness journey.',
    },
    {
      name: 'Shakir',
      role: 'personal trainer',
      experience: '4+ Years',
      specialization: ['Weight Loss', 'Nutrition Planning', 'Metabolic Training', 'Body Transformation'],
      certifications: ['Personal Trainer', 'Weight Management Specialist'],
      image: 'https://images.pexels.com/photos/4944376/pexels-photo-4944376.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Passionate fitness trainer providing guidance, motivation, and support to help members achieve their fitness goals.',
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
              Meet Our <span className="text-red-500">Expert Trainers</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our certified professionals are dedicated to helping you achieve your fitness goals with personalized training and expert guidance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} {...trainer} delay={index * 0.1} />
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Our Trainers Are The Best
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <BenefitCard
              icon={Award}
              title="Certified Experts"
              description="All trainers hold recognized certifications and credentials"
              delay={0}
            />
            <BenefitCard
              icon={Target}
              title="Goal-Focused"
              description="Personalized programs tailored to your specific objectives"
              delay={0.1}
            />
            <BenefitCard
              icon={Heart}
              title="Passionate"
              description="Dedicated to your success and transformation journey"
              delay={0.2}
            />
            <BenefitCard
              icon={Zap}
              title="Results-Driven"
              description="Proven track record of helping clients achieve results"
              delay={0.3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Train With The Best
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your free trial session and experience world-class training from our expert coaches
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

const TrainerCard = ({ name, role, experience, specialization, certifications, image, description, delay }: any) => {
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
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
          <p className="text-red-500 font-semibold text-lg">{role}</p>
        </div>
        <div className="absolute top-6 right-6 px-4 py-2 bg-red-600 rounded-full">
          <span className="text-white font-bold text-sm">{experience}</span>
        </div>
      </div>

      <div className="p-8">
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

        <div className="mb-6">
          <h4 className="text-white font-bold mb-3 text-lg">Specializations</h4>
          <div className="flex flex-wrap gap-2">
            {specialization.map((spec: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-lg">Certifications</h4>
          <div className="space-y-2">
            {certifications.map((cert: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ icon: Icon, title, description, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-black rounded-2xl p-8 text-center hover:bg-gray-800 transition-all group hover:scale-105"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default Trainers;
