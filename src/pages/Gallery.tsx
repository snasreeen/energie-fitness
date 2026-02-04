import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// images
import gym1 from '../gallery/gym1.jpeg';
import gym2 from '../gallery/gym2.jpeg';
import gym3 from '../gallery/gym3.jpeg';
import gym4 from '../gallery/gym4.jpeg';
import gym5 from '../gallery/gym5.jpeg';
import gym6 from '../gallery/gym6.jpeg';
import gym7 from '../gallery/gym7.jpeg';
import gym8 from '../gallery/gym8.jpeg';
import gym9 from '../gallery/gym9.jpeg';
import gym10 from '../gallery/gym10.jpeg';
import gym11 from '../gallery/gym11.jpeg';
import gym12 from '../gallery/gym12.jpeg';
import gym13 from '../gallery/gym13.jpeg';
import gym14 from '../gallery/gym14.jpeg';
import gym15 from '../gallery/gym15.jpeg';
import gymarea from '../gallery/gymarea.webp';
import dumbles from '../gallery/dumbles.webp';
import cycling from '../gallery/cycling.webp';
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const galleryImages = [
    { src: gym1, category: 'Facility', title: 'Gym Interior' },
    { src: gym2, category: 'Equipment', title: 'Workout Equipment' },
    { src: gym3, category: 'Training', title: 'Training Area' },
    { src: gym4, category: 'Training', title: 'Strength Training' },
    { src: gym5, category: 'Equipment', title: 'Workout Area' },
    { src: gym6, category: 'Training', title: 'Workout Session' },
    { src: gym7, category: 'Facility', title: 'Power Rack' },
    { src: gym8, category: 'Training', title: 'Personal Training' },
    { src: gym9, category: 'Facility', title: 'Reception Area' },
    { src: gym10, category: 'Training', title: 'Fitness Session' },
    { src: gym11, category: 'Training', title: 'Workout Area' },
    { src: gym12, category: 'Equipment', title: 'Strength Machines' },
    { src: gym13, category: 'Training', title: 'Personal Coaching' },
    { src: gym14, category: 'Facility', title: 'Gym View' },
    { src: gym15, category: 'Training', title: 'Fitness Session' },
    {src: gymarea, category: 'Facility', title: 'Gym Area' },
    {src: dumbles, category: 'Facility', title: 'Equipment' },
    {src: cycling, category: 'Facility', title: 'Equipment' },
  ];

  // 🔑 KEYBOARD SUPPORT
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) =>
          prev === null ? null : (prev + 1) % galleryImages.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) =>
          prev === null
            ? null
            : prev === 0
            ? galleryImages.length - 1
            : prev - 1
        );
      }
      if (e.key === 'Escape') {
        setCurrentIndex(null);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, galleryImages.length]);

  return (
    <div className="bg-black min-h-screen">
      {/* HEADER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 to-black" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-red-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A glimpse of our real gym facilities, equipment, and training environment
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={index}
              {...image}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* SLIDER MODAL */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center"
            >
              <X className="text-white" />
            </button>

            {/* PREV */}
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0
                    ? galleryImages.length - 1
                    : currentIndex - 1
                )
              }
              className="absolute left-6 text-white text-5xl font-bold"
            >
              ‹
            </button>

            {/* IMAGE */}
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex].src}
              className="max-w-full max-h-full object-contain rounded-2xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            />

            {/* NEXT */}
            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % galleryImages.length)
              }
              className="absolute right-6 text-white text-5xl font-bold"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GalleryCard = ({ src, category, title, onClick }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
    >
      <img src={src} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute bottom-0 p-6">
        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
      </div>
    </motion.div>
  );
};

export default Gallery;
