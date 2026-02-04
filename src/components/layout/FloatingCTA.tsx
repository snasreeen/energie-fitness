import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCTA = () => {
  const phoneNumber = '07090920101';
  const whatsappNumber = '917090920101';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in joining Energie Fitness`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 hover:scale-110 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
      </motion.a>

      <motion.a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/50 hover:scale-110 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        <Phone className="w-7 h-7 text-white group-hover:animate-pulse" />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;
