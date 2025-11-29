import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AppliedChemistryPage } from './pages/AppliedChemistryPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/applied-chemistry" element={<AppliedChemistryPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
