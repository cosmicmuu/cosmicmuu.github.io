import React from 'react';
import { profileData } from '../data/mock';
import { Sparkles, Code, Gamepad2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-blue-50 via-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Avatar and decorative elements */}
          <div className="relative flex justify-center items-center">
            {/* Decorative blocks */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-red-500 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-12 opacity-80 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-400 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-12 opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-45 opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Avatar */}
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform hover:translate-y-[-8px] transition-transform duration-300">
              <img
                src={profileData.avatar}
                alt="cosmic muu avatar"
                className="w-64 h-64 object-contain image-rendering-pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <div className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg transform hover:translate-y-[-4px] transition-transform">
              <Sparkles className="inline-block mr-2" size={20} />
              Bem-vindo!
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Olá! Sou o <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                {profileData.username}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-bold leading-relaxed">
              {profileData.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black transform hover:translate-y-[-4px] transition-transform">
                <Code size={24} />
                <span>Programador</span>
              </div>
              <div className="flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black transform hover:translate-y-[-4px] transition-transform">
                <Gamepad2 size={24} />
                <span>Gamer</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl border-4 border-black transform hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Ver os Meus Projetos!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;