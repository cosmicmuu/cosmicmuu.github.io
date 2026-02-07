import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left - Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-2xl font-black text-white">C</span>
              </div>
              <h3 className="text-2xl font-black">
                cosmic <span className="text-red-500">muu</span>
              </h3>
            </div>
            <p className="text-gray-400 font-bold">
              Criando coisas incríveis com código e blocos!
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-yellow-400">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-gray-400 hover:text-white font-bold transition-colors"
              >
                → Início
              </button>
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-gray-400 hover:text-white font-bold transition-colors"
              >
                → Sobre Mim
              </button>
              <button
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-gray-400 hover:text-white font-bold transition-colors"
              >
                → Portfólio
              </button>
            </div>
          </div>

          {/* Right - Fun Fact */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-blue-400">Sabia que...?</h4>
            <div className="bg-gray-800 p-4 rounded-xl border-2 border-gray-700">
              <p className="text-gray-300 font-bold">
                O meu comic favorito é <span className="text-yellow-400">Coelho vs Macaco</span>! 🐰🐵
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-bold flex items-center gap-2">
              © {currentYear} cosmic muu. Feito com 
              <Heart size={16} className="text-red-500 inline-block fill-current" /> e 
              <Code size={16} className="text-blue-500 inline-block" />
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;