import React from 'react';
import { HERO_IMAGE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Campus Abstract" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-kit-blue/90 to-slate-900/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
        <p className="text-lg md:text-2xl font-bold tracking-[0.2em] mb-6 text-blue-200 uppercase animate-fade-in-up">
          Kyoto Institute of Technology
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 tracking-wide drop-shadow-xl">
          人に優しい<br/>実学
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
          伝統と革新が交差する京都で、<br className="hidden md:block"/>
          科学技術と芸術の融合による新たな価値創造を。
        </p>
        
        <a 
          href="#president"
          className="inline-block px-10 py-4 border border-white/40 text-white font-medium hover:bg-white hover:text-kit-blue transition-all duration-300 rounded-full backdrop-blur-sm"
        >
          Explore Vision
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};