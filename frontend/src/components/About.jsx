import React from 'react';
import { profileData } from '../data/mock';
import * as LucideIcons from 'lucide-react';
import { BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Sobre <span className="text-blue-500">Mim</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Interests Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-gray-900 mb-8 text-center md:text-left">
            As Minhas Paixões
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {profileData.interests.map((interest, index) => {
              const Icon = LucideIcons[interest.icon];
              const colors = [
                { bg: 'bg-red-500', hover: 'hover:bg-red-600' },
                { bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
                { bg: 'bg-yellow-400', hover: 'hover:bg-yellow-500' },
                { bg: 'bg-orange-500', hover: 'hover:bg-orange-600' },
                { bg: 'bg-red-600', hover: 'hover:bg-red-700' },
                { bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
                { bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
                { bg: 'bg-orange-600', hover: 'hover:bg-orange-700' }
              ];
              const colorSet = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className={`${colorSet.bg} ${colorSet.hover} p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform hover:translate-y-[-6px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer`}
                >
                  <div className="text-white flex flex-col items-center gap-3">
                    {Icon && <Icon size={32} strokeWidth={3} />}
                    <span className="font-black text-center text-sm md:text-base">
                      {interest.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Favorite Comic Callout */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <BookOpen size={48} strokeWidth={3} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                Banda Desenhada Favorita
              </h3>
              <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                {profileData.favoriteComic}
              </p>
            </div>
            <div className="text-6xl">🐰🆚🐵</div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
            <p className="text-lg md:text-xl font-black">
              💡 Estudo programação na <span className="text-yellow-300">coders</span> e adoro criar coisas novas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;