import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Target, CheckCircle } from 'lucide-react';

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. I'd like to book a free trial session. My fitness goal is: ${formData.goal}. Please call me at ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/917090920101?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const fitnessGoals = [
    'Weight Loss',
    'Muscle Gain',
    'General Fitness',
    'Strength Training',
    'Athletic Performance',
    'Body Toning',
  ];

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 to-black" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-center mb-12">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Book Your <span className="text-red-500">Free Trial</span>
                  </h1>
                  <p className="text-xl text-gray-400">
                    Experience world-class training with no commitment. Fill in your details and we'll contact you right away!
                  </p>
                </div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="bg-gray-900 rounded-3xl p-8 md:p-12 space-y-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <label className="block text-white font-semibold mb-3 text-lg">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-800 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3 text-lg">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-gray-800 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3 text-lg">
                      Fitness Goal
                    </label>
                    <div className="relative">
                      <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        required
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full bg-gray-800 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select your fitness goal</option>
                        {fitnessGoals.map((goal) => (
                          <option key={goal} value={goal}>
                            {goal}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    BOOK FREE TRIAL NOW
                  </motion.button>

                  <p className="text-center text-gray-400 text-sm">
                    By submitting this form, you'll be redirected to WhatsApp to complete your booking
                  </p>
                </motion.form>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <BenefitCard
                    title="No Commitment"
                    description="Try before you join"
                  />
                  <BenefitCard
                    title="Expert Guidance"
                    description="Train with certified coaches"
                  />
                  <BenefitCard
                    title="Full Access"
                    description="Experience all our facilities"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-900 rounded-3xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  You're All Set!
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  We've opened WhatsApp for you. Send the message and our team will contact you shortly to schedule your free trial session.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all"
                >
                  Book Another Trial
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const BenefitCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-2xl p-6 text-center"
    >
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default FreeTrial;
