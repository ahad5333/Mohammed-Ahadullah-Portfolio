import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate sending message (1.5 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4"
        >
          <MessageSquare className="w-4 h-4" />
          Contact
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white text-center"
        >
          Get In Touch
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center [perspective:1000px]">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Let's talk about your project
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <a 
              href="mailto:ahad53344@gmail.com" 
              className="flex items-center gap-4 group p-3 -m-3 rounded-3xl hover:bg-slate-100/50 dark:hover:bg-slate-900/40 transition-colors"
            >
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 group-hover:bg-accent/10 transition-colors border border-slate-200/20 dark:border-slate-800/20">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                <p className="text-slate-900 dark:text-white font-semibold">ahad53344@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Hyderabad,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-3 -m-3 rounded-3xl hover:bg-slate-100/50 dark:hover:bg-slate-900/40 transition-colors"
            >
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 group-hover:bg-accent/10 transition-colors border border-slate-200/20 dark:border-slate-800/20">
                <MapPin className="w-6 h-6 text-accent animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-slate-900 dark:text-white font-semibold">Hyderabad, India</p>
              </div>
            </a>
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/30 hover:bg-accent hover:text-white hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form wrapped in TiltCard */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-full w-full"
        >
          <TiltCard 
            tiltAmount={3}
            className="bg-white dark:bg-slate-900/60 p-8 md:p-10 rounded-[2.5rem] border border-slate-200/50 dark:border-slate-800/40 shadow-xl relative min-h-[480px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">
                      Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.name}</span>! Your message was delivered successfully. I will get back to you shortly.
                    </p>
                  </div>
                  <button 
                    onClick={handleReset}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors pt-4"
                  >
                    Send another message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ transform: 'translateZ(20px)' }}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800/40 focus:border-accent focus:ring-2 focus:ring-accent/15 outline-none transition-all dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800/40 focus:border-accent focus:ring-2 focus:ring-accent/15 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2" style={{ transform: 'translateZ(25px)' }}>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800/40 focus:border-accent focus:ring-2 focus:ring-accent/15 outline-none transition-all dark:text-white"
                    />
                  </div>
                  <div className="space-y-2" style={{ transform: 'translateZ(20px)' }}>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800/40 focus:border-accent focus:ring-2 focus:ring-accent/15 outline-none transition-all dark:text-white resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/70 text-white font-bold rounded-2xl shadow-lg shadow-accent/30 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;