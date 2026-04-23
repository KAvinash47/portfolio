import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Code, Cpu, Mail, Home, Terminal } from 'lucide-react';
import useCyberpunkSound from '../hooks/useCyberpunkSound';
import { useMatrix } from '../context/MatrixContext';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const playSound = useCyberpunkSound();
  const { isMatrixMode, toggleMatrixMode } = useMatrix();

  const navLinks = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Skills', icon: Cpu, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-auto max-w-[400px] md:max-w-none">
      <div className="flex items-center justify-center gap-1.5 md:gap-3 px-3 py-2 md:px-5 md:py-3 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl shadow-neon-blue/20">
        {navLinks.map((link, index) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              onMouseEnter={() => {
                setHoveredIndex(index);
                playSound('hover');
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => playSound('click')}
              className="relative group flex-1 md:flex-none"
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.15 : 1,
                  y: isHovered ? -4 : 0,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex items-center justify-center p-2.5 md:p-3.5 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-neon-blue/40 transition-all relative overflow-hidden"
              >
                <link.icon className={`w-4.5 h-4.5 md:w-5.5 md:h-5.5 transition-colors duration-300 ${isHovered ? 'text-neon-blue' : 'text-gray-400'}`} />
                
                {/* Reflection/Glow */}
                {isHovered && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 rounded-xl md:rounded-2xl bg-neon-blue/15 blur-md -z-10"
                  />
                )}
              </motion.div>

              {/* Tooltip - Hidden on mobile */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: '-50%' }}
                    animate={{ opacity: 1, y: -45, x: '-50%' }}
                    exit={{ opacity: 0, y: 10, x: '-50%' }}
                    className="hidden md:block absolute left-1/2 top-0 px-3 py-1 bg-black/80 border border-neon-blue/30 rounded-lg text-xs text-neon-blue whitespace-nowrap backdrop-blur-md pointer-events-none"
                  >
                    {link.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          );
        })}

        {/* Matrix Toggle */}
        <div className="w-px h-6 md:h-8 bg-white/10 mx-1 md:mx-2" />
        
        <button
          onClick={() => {
            toggleMatrixMode();
            playSound('glitch');
          }}
          className="relative group"
        >
          <motion.div
            animate={{
              scale: isMatrixMode ? 1.1 : 1,
            }}
            className={`p-2 md:p-3 rounded-xl border transition-colors relative ${
              isMatrixMode 
                ? 'bg-green-900/20 border-green-500 text-green-500 shadow-[0_0_15px_rgba(0,255,0,0.3)]' 
                : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4 md:w-5 md:h-5" />
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
