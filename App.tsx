import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PresidentMessage } from './components/PresidentMessage';
import { Philosophy } from './components/Philosophy';
import { FutureCenter } from './components/FutureCenter';
import { CompetencyChart } from './components/CompetencyChart';
import { Features } from './components/Features';
import { SopKeywords } from './components/SopKeywords';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <PresidentMessage />
        <Philosophy />
        <FutureCenter />
        <CompetencyChart />
        <Features />
        <SopKeywords />
      </main>
      <Footer />
    </div>
  );
};

export default App;