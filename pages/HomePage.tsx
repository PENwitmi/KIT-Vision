import React from 'react';
import { Hero } from '../components/Hero';
import { PresidentMessage } from '../components/PresidentMessage';
import { Philosophy } from '../components/Philosophy';
import { FutureCenter } from '../components/FutureCenter';
import { CompetencyChart } from '../components/CompetencyChart';
import { Features } from '../components/Features';
import { SopKeywords } from '../components/SopKeywords';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <PresidentMessage />
      <Philosophy />
      <FutureCenter />
      <CompetencyChart />
      <Features />
      <SopKeywords />
    </main>
  );
};
