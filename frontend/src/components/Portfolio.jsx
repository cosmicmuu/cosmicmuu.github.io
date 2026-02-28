import React from 'react';
import { portfolioProjects } from '../data/mock';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-red-50 via-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            O Meu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">Portfólio</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl font-bold text-gray-700">
            Aqui estão alguns dos meus projetos mais fixes!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => {
            const Icon = LucideIcons[project.icon];
            
            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-4 border-black overflow-hidden transform hover:translate-y-[-8px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
              >
                {/* Color Header with Icon or Image */}
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: project.image ? '#1a1a2e' : project.color }}
                >
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      {/* Decorative blocks */}
                      <div className="absolute top-4 left-4 w-8 h-8 bg-white opacity-20 rounded-lg transform rotate-12"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-white opacity-20 rounded-lg transform -rotate-12"></div>
                      
                      {Icon && (
                        <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform">
                          <Icon size={48} strokeWidth={3} style={{ color: project.color }} />
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-black">
                    {project.category}
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg font-bold text-gray-600">
                    {project.description}
                  </p>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full mt-4 py-3 text-center rounded-xl font-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.category === 'Hackathon' ? 'Experimentar! 🛡️' : 
                       project.category === 'Gaming' ? 'Jogar Agora! 🎮' : 
                       'Jogar Agora! 🎮'}
                    </a>
                  ) : (
                    <button
                      className="w-full mt-4 py-3 rounded-xl font-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                      style={{ backgroundColor: project.color }}
                    >
                      Ver Detalhes
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-white px-10 py-6 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
            <p className="text-2xl md:text-3xl font-black">
              Mais projetos incríveis a caminho! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;