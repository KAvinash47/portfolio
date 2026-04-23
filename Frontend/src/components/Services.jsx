import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { services } from '../data/portfolio';
import { MessageCircle } from 'lucide-react';

const TiltCard = ({ children, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Premium Solutions</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 text-center tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-blue to-white bg-[length:200%_auto] animate-gradient-x">
              PROFESSIONAL SERVICES
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-center max-w-2xl font-mono text-sm md:text-base leading-relaxed"
          >
            I combine technical excellence with creative strategy to build digital products that don't just work—they dominate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <TiltCard key={service.title} index={index}>
              <div className="group relative bg-black/40 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl h-full flex flex-col transition-all duration-500 hover:border-neon-blue/50 hover:bg-black/60 shadow-2xl hover:shadow-neon-blue/10">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10"></div>
                
                <div className="mb-8 relative">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-neon-blue group-hover:text-white group-hover:bg-neon-blue transition-all duration-500 transform group-hover:rotate-6 shadow-inner">
                    <service.icon className="w-8 h-8" />
                  </div>
                  {/* Decorative Number */}
                  <span className="absolute -top-4 -right-2 text-4xl font-black text-white/5 group-hover:text-neon-blue/10 transition-colors pointer-events-none">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-neon-blue transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-sans group-hover:text-gray-300 transition-colors text-sm">
                  {service.description}
                </p>

                <div className="mt-auto pt-8 flex items-center justify-between">
                  <div className="flex items-center text-[10px] font-mono text-neon-blue/50 group-hover:text-neon-blue transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
                    SYSTEM_READY
                  </div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="text-white/20 group-hover:text-neon-blue transition-colors"
                  >
                    <service.icon className="w-5 h-5 opacity-20" />
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* WhatsApp FAB - Connecting to the phone number in your poster */}
      <motion.a
        href="https://wa.me/917976739844"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 md:right-10 z-[110] p-4 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap uppercase tracking-widest text-xs">
          Let's Talk Business
        </span>
      </motion.a>
    </section>
  );
};

export default Services;
