import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['070909 20101'],
      action: 'tel:07090920101',
      actionText: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['070909 20101'],
      action: 'https://wa.me/917090920101?text=Hi, I want to know more about Energie Fitness',
      actionText: 'Chat on WhatsApp',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['energie34fitness@gmail.com'],
      action: 'mailto:energie34fitness@gmail.com',
      actionText: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Hospet Road Opposite',"St.philomena's PU college",' Ballari',' Karnataka', 583104],
      action: 'https://maps.google.com/?q=LLC+Colony+Devi+Nagar+Ballari+Karnataka+583104',
      actionText: 'Get Directions',
    },
  ];

  const timings = [
    { days: 'Monday - Saturday', hours: '5:30 AM - 10:00 PM' },
    { days: 'Sunday', hours: '5:30 AM - 10:00 AM' },
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
              Get In <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions? We're here to help you start your fitness journey. Reach out to us anytime!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} delay={index * 0.1} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Opening Hours</h2>
              </div>

              <div className="space-y-6">
                {timings.map((timing, index) => (
                  <div key={index} className="flex justify-between items-center pb-6 border-b border-gray-700 last:border-0">
                    <div>
                      <p className="text-white font-semibold text-lg">{timing.days}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-red-500 font-bold text-lg">{timing.hours}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-600 rounded-2xl">
                <p className="text-white font-semibold mb-2">Walk-ins Welcome!</p>
                <p className="text-gray-400">
                  Visit us anytime during our operating hours for a free gym tour and consultation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Find Us</h2>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.234567890123!2d76.9184!3d15.1394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA4JzIxLjgiTiA3NsKwNTUnMDYuMiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>

              <div className="space-y-3 text-gray-400">
                <p className="text-white font-semibold text-lg">Hospet Road Opposite, St.philomena's PU college, Ballari, Karnataka 583104</p>
               
                <a
                  href="https://maps.app.goo.gl/gCpyXXZwtLjotDkW9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-400 transition-colors mt-4"
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>
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
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait another day. Contact us now and take the first step towards a healthier, stronger you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/917090920101?text=Hi, I want to join Energie Fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg text-lg hover:bg-green-600 transition-all hover:scale-105 w-full sm:w-auto flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WHATSAPP NOW</span>
              </a>
              <a
                href="tel:07090920101"
                className="px-8 py-4 bg-black text-white font-bold rounded-lg text-lg hover:bg-gray-900 transition-all hover:scale-105 w-full sm:w-auto flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>CALL NOW</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ icon: Icon, title, details, action, actionText, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all group"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <div className="space-y-1 mb-4">
        {details.map((detail: string, idx: number) => (
          <p key={idx} className="text-gray-400">
            {detail}
          </p>
        ))}
      </div>
      <a
        href={action}
        target={action.startsWith('http') ? '_blank' : undefined}
        rel={action.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-400 transition-colors group/link"
      >
        <span>{actionText}</span>
        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
      </a>
    </motion.div>
  );
};

export default Contact;
