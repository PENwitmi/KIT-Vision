import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-sm text-slate-800 py-3' : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="font-serif font-bold text-xl md:text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          KIT <span className="font-sans font-light opacity-80">Vision</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {isHomePage && NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/applied-chemistry"
            className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
              location.pathname === '/applied-chemistry'
                ? 'bg-kit-red text-white'
                : isScrolled || !isHomePage
                  ? 'bg-kit-red/10 text-kit-red hover:bg-kit-red hover:text-white'
                  : 'bg-white/20 text-white hover:bg-white hover:text-kit-red'
            }`}
          >
            応用化学課程
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
          <div className="flex flex-col py-4 px-4 space-y-4">
            {isHomePage && NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-800 text-lg font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/applied-chemistry"
              className="text-kit-red text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              応用化学課程 →
            </Link>
            {!isHomePage && (
              <Link
                to="/"
                className="text-slate-600 text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ← トップへ戻る
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
