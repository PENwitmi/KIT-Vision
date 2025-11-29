import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "",
  dark = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${dark ? 'bg-kit-blue text-white' : 'bg-transparent text-slate-800'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {subtitle && (
              <span className={`block text-sm md:text-base font-bold tracking-widest uppercase mb-3 ${dark ? 'text-blue-300' : 'text-kit-red'}`}>
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                {title}
              </h2>
            )}
            <div className={`h-1 w-20 mx-auto mt-6 rounded-full ${dark ? 'bg-white/30' : 'bg-kit-red/80'}`} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};