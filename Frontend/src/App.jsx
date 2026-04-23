import React, { useState, useEffect, Suspense } from 'react';
import Background3D from './components/Background3D';
import LoadingScreen from './components/ui/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import CyberpunkOverlay from './components/ui/CyberpunkOverlay';
import { MatrixProvider } from './context/MatrixContext';
import { CursorProvider } from './context/CursorProvider';
import MatrixRain from './components/ui/MatrixRain';
import useKonamiCode from './hooks/useKonamiCode';
import GlitchChaos from './components/ui/GlitchChaos';
import TerminalCLI from './components/ui/TerminalCLI';

import SmoothScroll from './components/ui/SmoothScroll';

const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Contact = React.lazy(() => import('./components/Contact'));
const PortfolioChatbot = React.lazy(() => import('./components/chatbot/PortfolioChatbot'));

function App() {
  const konamiTriggered = useKonamiCode();
  const [showChaos, setShowChaos] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (konamiTriggered) {
      setShowChaos(true);
    }
  }, [konamiTriggered]);

  useEffect(() => {
    if (!isChatOpen) {
      return undefined;
    }

    const { body } = document;
    const scrollY = window.scrollY;
    const previousStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      body.style.overflow = previousStyles.overflow;
      body.style.position = previousStyles.position;
      body.style.top = previousStyles.top;
      body.style.width = previousStyles.width;
      window.scrollTo(0, scrollY);
    };
  }, [isChatOpen]);

  return (
    <CursorProvider>
      <MatrixProvider>
        <SmoothScroll>
          <div className="min-h-screen text-white selection:bg-blue-500/30 relative z-0">
            <AnimatePresence mode="wait">
              {isLoading && (
                <LoadingScreen onComplete={() => setIsLoading(false)} />
              )}
            </AnimatePresence>

            <div
              inert={isChatOpen}
              aria-hidden={isChatOpen}
              className={`relative transition-all duration-300 ${
                isChatOpen ? 'pointer-events-none select-none blur-md scale-[0.99]' : ''
              }`}
            >
              <CustomCursor />
              <CyberpunkOverlay />
              <MatrixRain />
              <GlitchChaos triggered={showChaos} onComplete={() => setShowChaos(false)} />
              <TerminalCLI />
              <Background3D />
              <Navbar />
              
              <main>
                <Hero />
                <About />
                <Services />
                <Process />
                <Suspense fallback={null}>
                  <Experience />
                  <Projects />
                  <Skills />
                  <Contact />
                </Suspense>
              </main>

              <Footer />
            </div>

            <AnimatePresence>
              {isChatOpen && (
                <div className="pointer-events-auto fixed inset-0 z-[125] bg-slate-950/55 backdrop-blur-md" />
              )}
            </AnimatePresence>
            
            <Suspense fallback={null}>
              <PortfolioChatbot isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
            </Suspense>
          </div>
        </SmoothScroll>
      </MatrixProvider>
    </CursorProvider>
  );
}

export default App;
