import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Username */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex items-center justify-center transform hover:translate-y-[-2px] transition-transform overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_334d3bf4-8a12-4f0a-9bde-095a793ceed9/artifacts/1zu6lnoa_pixil-frame-0%20%2810%29.png"
                alt="cosmic muu avatar"
                className="w-full h-full object-contain image-rendering-pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900">
              cosmic <span className="text-red-500">muu</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-bold text-gray-800 hover:text-red-500 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-lg font-bold text-gray-800 hover:text-yellow-500 transition-colors"
            >
              Portfólio
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t-2 border-gray-200 pt-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-bold text-gray-800 hover:text-red-500 transition-colors text-left px-4 py-2 bg-red-50 rounded-lg"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors text-left px-4 py-2 bg-blue-50 rounded-lg"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-lg font-bold text-gray-800 hover:text-yellow-500 transition-colors text-left px-4 py-2 bg-yellow-50 rounded-lg"
            >
              Portfólio
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;