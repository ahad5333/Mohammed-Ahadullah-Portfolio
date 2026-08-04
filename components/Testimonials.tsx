
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_CONTENT } from '../constants';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const activeTestimonial = TESTIMONIALS_CONTENT[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_CONTENT.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_CONTENT.length) % TESTIMONIALS_CONTENT.length);
  };

  // Extract initials from client name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  // Gradient helper for avatars based on index
  const getAvatarGradient = (index: number) => {
    const gradients = [
      'from-rose-500 to-orange-400',
      'from-purple-600 to-indigo-400',
      'from-emerald-500 to-teal-400',
      'from-blue-600 to-cyan-400'
    ];
    return gradients[index % gradients.length];
  };

  // Slider animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    })
  };

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      {/* Header Block */}
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4"
        >
          <Star className="w-4 h-4 animate-spin-slow" />
          Testimonials
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white text-center"
        >
          Client Stories
        </motion.h2>
      </div>

      {/* Main Slideshow Slider */}
      <div className="max-w-4xl mx-auto px-6 relative flex flex-col items-center [perspective:1000px]">
        
        {/* Slider Box */}
        <div className="w-full relative min-h-[350px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(e, info) => {
                if (info.offset.x < -60) {
                  handleNext();
                } else if (info.offset.x > 60) {
                  handlePrev();
                }
              }}
              className="w-full h-full cursor-grab active:cursor-grabbing pointer-events-auto"
            >
              <TiltCard 
                tiltAmount={4}
                className="w-full h-full bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 p-8 md:p-14 rounded-[2.5rem] shadow-2xl relative"
              >
                {/* Floating Big Quote Symbol */}
                <Quote className="absolute top-8 right-8 w-16 h-16 md:w-20 md:h-20 text-accent/5" style={{ transform: 'translateZ(10px)' }} />

                <div className="flex flex-col h-full justify-between" style={{ transformStyle: 'preserve-3d' }}>
                  
                  {/* Star Rating & Quote Block */}
                  <div style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-8 italic text-base md:text-xl leading-relaxed relative z-10 font-medium">
                      "{activeTestimonial.quote}"
                    </p>
                  </div>

                  {/* Profile author footer */}
                  <div 
                    className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800/50 pt-6"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    {/* Glowing Gradient Initials Avatar */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${getAvatarGradient(currentIndex)} flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-slate-950/10`}>
                      {getInitials(activeTestimonial.name)}
                    </div>
                    <div>
                      <p className="font-display font-bold text-slate-900 dark:text-white text-base md:text-lg">
                        {activeTestimonial.name}
                      </p>
                      <p className="text-xs md:text-sm font-semibold text-slate-400 dark:text-slate-500">
                        {activeTestimonial.title}
                      </p>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Bars */}
        <div className="flex items-center gap-8 mt-10 z-20">
          
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="p-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/40 rounded-full text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent hover:border-accent/30 dark:hover:border-accent/30 hover:scale-105 transition-all shadow-md active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex gap-2">
            {TESTIMONIALS_CONTENT.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-6 bg-accent' : 'w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="p-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/40 rounded-full text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent hover:border-accent/30 dark:hover:border-accent/30 hover:scale-105 transition-all shadow-md active:scale-95"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
