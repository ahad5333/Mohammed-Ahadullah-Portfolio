
import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_CONTENT } from '../constants';
import { Quote, Star } from 'lucide-react';
import TiltCard from './TiltCard';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4"
        >
          <Star className="w-4 h-4" />
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
        {TESTIMONIALS_CONTENT.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <TiltCard 
              tiltAmount={8}
              className="h-full bg-white dark:bg-dark-card p-8 rounded-3xl border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-xl transition-shadow duration-500 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/5" style={{ transform: 'translateZ(10px)' }} />
              
              <div className="flex gap-1 mb-6" style={{ transform: 'translateZ(20px)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p 
                className="text-slate-600 dark:text-slate-400 mb-8 italic leading-relaxed relative z-10"
                style={{ transform: 'translateZ(25px)' }}
              >
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4" style={{ transform: 'translateZ(30px)' }}>
                {testimonial.avatarUrl && (
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                  />
                )}
                <div>
                  <p className="font-display font-bold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
