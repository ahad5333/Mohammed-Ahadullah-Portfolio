import React from 'react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Let's talk about your project
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 group-hover:bg-accent/10 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                <p className="text-slate-900 dark:text-white font-medium">ahad53344@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 group-hover:bg-accent/10 transition-colors">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-slate-900 dark:text-white font-medium">Hyderabad, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white transition-all duration-300"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-dark-border shadow-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all dark:text-white resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-2xl shadow-lg shadow-accent/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;