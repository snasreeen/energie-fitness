import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, TrendingDown, Dumbbell, Target } from 'lucide-react';

const Transformations = () => {
  const transformations = [
    {
      name: 'Rahul Sharma',
      age: 32,
      program: 'Weight Loss',
      duration: '6 Months',
      result: 'Lost 25kg',
      before: 'https://images.pexels.com/photos/4944374/pexels-photo-4944374.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'Energie Fitness transformed my life! The trainers are incredibly supportive and the results speak for themselves.',
    },
    {
      name: 'Priya Reddy',
      age: 28,
      program: 'Toning & Fitness',
      duration: '4 Months',
      result: 'Lost 12kg',
      before: 'https://images.pexels.com/photos/4498374/pexels-photo-4498374.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/4498600/pexels-photo-4498600.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'Best gym in Ballari! The women\'s batches are amazing and the trainers really understand our goals.',
    },
    {
      name: 'Akash Kumar',
      age: 25,
      program: 'Muscle Gain',
      duration: '8 Months',
      result: 'Gained 15kg muscle',
      before: 'https://images.pexels.com/photos/4944513/pexels-photo-4944513.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/4944374/pexels-photo-4944374.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'Arif bhai and the team helped me achieve my dream physique. The guidance on both training and nutrition was perfect!',
    },
    {
      name: 'Sneha Patel',
      age: 35,
      program: 'Weight Loss',
      duration: '5 Months',
      result: 'Lost 18kg',
      before: 'https://images.pexels.com/photos/4498374/pexels-photo-4498374.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/4498598/pexels-photo-4498598.jpeg?auto=compress&cs=tinysrgb&w=800',
      testimonial: 'I never thought I could lose this much weight! The personal training sessions made all the difference.',
    },
  ];

  const reviews = [
    {
      name: 'Vijay Krishna',
      rating: 5,
      text: 'Excellent gym with top-notch equipment and experienced trainers. Highly recommend to anyone serious about fitness!',
      date: '2 weeks ago',
    },
    {
      name: 'Anjali Desai',
      rating: 5,
      text: 'Great atmosphere and very clean facility. The trainers are knowledgeable and always ready to help.',
      date: '1 month ago',
    },
    {
      name: 'Karthik M',
      rating: 5,
      text: 'Best gym in Ballari! Good equipment, professional trainers, and reasonable pricing.',
      date: '3 weeks ago',
    },
    {
      name: 'Deepa Singh',
      rating: 5,
      text: 'Love the women\'s special batches! Feel comfortable and motivated. Lost 10kg in 3 months!',
      date: '2 months ago',
    },
    {
      name: 'Rajesh Gowda',
      rating: 5,
      text: 'Arif and his team are amazing! They helped me transform completely. Worth every rupee!',
      date: '1 week ago',
    },
    {
      name: 'Swati Kulkarni',
      rating: 5,
      text: 'Clean, well-maintained gym with friendly staff. The nutrition guidance is a huge plus!',
      date: '3 weeks ago',
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
              Amazing <span className="text-red-500">Transformations</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real people, real results. See how our members have transformed their bodies and lives at Energie Fitness
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {transformations.map((transformation, index) => (
              <TransformationCard key={index} {...transformation} delay={index * 0.1} />
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Members Say
            </h2>
            <p className="text-gray-400 text-lg">
              Rated 5 stars by our amazing community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready To Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of members who have achieved incredible transformations. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/free-trial"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg text-lg hover:bg-gray-100 transition-all hover:scale-105 w-full sm:w-auto"
              >
                START YOUR TRANSFORMATION
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

const TransformationCard = ({ name, age, program, duration, result, before, after, testimonial, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <div>
          <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setShowAfter(!showAfter)}>
            <AnimatePresence mode="wait">
              <motion.img
                key={showAfter ? 'after' : 'before'}
                src={showAfter ? after : before}
                alt={showAfter ? 'After' : 'Before'}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className="px-4 py-2 bg-black/80 rounded-lg text-white font-bold">
                {showAfter ? 'AFTER' : 'BEFORE'}
              </span>
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="px-4 py-2 bg-red-600 rounded-lg text-white font-bold hover:bg-red-700 transition-colors"
              >
                {showAfter ? 'Show Before' : 'Show After'}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-400 text-lg">{age} years old</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700 rounded-xl p-4">
              <Target className="w-6 h-6 text-red-500 mb-2" />
              <p className="text-gray-400 text-sm mb-1">Program</p>
              <p className="text-white font-bold">{program}</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-4">
              <Dumbbell className="w-6 h-6 text-red-500 mb-2" />
              <p className="text-gray-400 text-sm mb-1">Duration</p>
              <p className="text-white font-bold">{duration}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 mb-6">
            <TrendingDown className="w-8 h-8 text-white mb-2" />
            <p className="text-white/80 text-sm mb-1">Result</p>
            <p className="text-3xl font-bold text-white">{result}</p>
          </div>

          <div className="bg-gray-700 rounded-2xl p-6 relative">
            <Quote className="w-8 h-8 text-red-500 mb-4" />
            <p className="text-gray-300 italic leading-relaxed">"{testimonial}"</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewCard = ({ name, rating, text, date, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
          ))}
        </div>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">{text}</p>
      <p className="text-white font-semibold">{name}</p>
    </motion.div>
  );
};

export default Transformations;
