import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';

const processSteps = [
  {
    id: '01',
    title: 'Talk and Plan',
    description: "First, we talk about your business. I listen to what you need and we make a simple plan to help your business grow.",
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-cyan-500/20'
  },
  {
    id: '02',
    title: 'Making it Look Good',
    description: "I will show you a design of how your website will look. You can see it on your phone or computer and tell me if you like it.",
    icon: PenTool,
    color: 'from-purple-500 to-fuchsia-400',
    shadow: 'shadow-purple-500/20'
  },
  {
    id: '03',
    title: 'Building the Website',
    description: "Now, I start the actual work. I build your website using the best tools so it is fast, safe, and very easy for your customers to use.",
    icon: Code2,
    color: 'from-green-500 to-emerald-400',
    shadow: 'shadow-green-500/20'
  },
  {
    id: '04',
    title: 'Making it Live',
    description: "Finally, I put your website on the internet for the whole world to see. I will also help you so more people can find you on Google.",
    icon: Rocket,
    color: 'from-orange-500 to-rose-400',
    shadow: 'shadow-rose-500/20'
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" ref={containerRef} className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">How I Work</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              SIMPLE 4-STEP PROCESS
            </span>
          </motion.h2>
          <p className="text-gray-400 font-mono">From your idea to a live website on the internet—I make it very easy for you.</p>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />
          
          {/* Animated Glow Line */}
          <motion.div 
            style={{ height: pathHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(0,243,255,0.5)] origin-top"
          />

          <div className="space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className={`relative flex items-center md:justify-between flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 bg-black border-4 border-gray-800 rounded-full z-20 flex items-center justify-center shadow-xl"
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} opacity-20 absolute`} />
                    <step.icon className={`w-5 h-5 relative z-10 text-white`} />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                  >
                    <div className={`group relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${step.shadow}`}>
                      <span className="absolute -top-6 text-6xl font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                        {step.id}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;