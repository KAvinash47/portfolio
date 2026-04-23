import { profile } from '../data/portfolio';
import { Section } from './ui/Section';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" className="ml-8 md:ml-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent tracking-tighter">
          GET IN TOUCH
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed font-mono">
          Ready to start your next big project? <br className="hidden md:block" />
          I'm currently available for freelance web development and engineering roles.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 group"
          >
            <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase font-mono font-bold">Email</p>
              <p className="text-white font-medium">{profile.email}</p>
            </div>
          </a>

          <a 
            href={`https://wa.me/917976739844`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 group"
          >
            <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-all">
              <MessageCircle className="w-6 h-6 text-green-400 group-hover:text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase font-mono font-bold">WhatsApp</p>
              <p className="text-white font-medium">+91 79767 39844</p>
            </div>
          </a>

          <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 uppercase font-mono font-bold">Location</p>
              <p className="text-white font-medium">{profile.location}</p>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/917976739844`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 rounded-full text-white font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] uppercase tracking-widest"
        >
          <MessageCircle className="w-6 h-6" />
          Discuss Your Project
        </a>
      </div>
    </Section>
  );
};

export default Contact;
