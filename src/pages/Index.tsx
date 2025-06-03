
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectsOverview from '@/components/ProjectsOverview';
import NewsSection from '@/components/NewsSection';
import { companyData } from '@/data/companyData';

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {showVideo ? (
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl mb-4">Hydropower Project Video</h3>
                <p className="text-gray-300">Video player would be embedded here</p>
              </div>
            </div>
          ) : (
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3"
              alt="Hydropower Dam"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ridge Line Energy Ltd.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Powering Nepal's Future Through Sustainable Hydropower Development
          </p>
          <p className="text-lg mb-8 opacity-90">
            {companyData.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Explore Our Projects
            </button>
            <button 
              onClick={() => setShowVideo(!showVideo)}
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              {showVideo ? 'View Images' : 'Watch Video'}
            </button>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">{companyData.stats.totalCapacity}</div>
              <div className="text-sm uppercase tracking-wide">Total Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">{companyData.stats.projectsInvested}</div>
              <div className="text-sm uppercase tracking-wide">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">{companyData.stats.yearsExperience}+</div>
              <div className="text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">{companyData.stats.communityProjects}+</div>
              <div className="text-sm uppercase tracking-wide">Community Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Ridge Line Energy</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              {companyData.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  {companyData.mission}
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  {companyData.vision}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Core Values</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {companyData.coreValues.map((value, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <span className="text-blue-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsOverview />
      <NewsSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ridge Line Energy Ltd.</h3>
              <p className="text-gray-400">
                Leading Nepal's renewable energy transformation through sustainable hydropower development.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/projects" className="hover:text-white">Projects</a></li>
                <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Projects</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/super-chepe" className="hover:text-white">Super Chepe</a></li>
                <li><a href="/doodhpokhari-chepe" className="hover:text-white">Doodhpokhari Chepe</a></li>
                <li><a href="/upper-maiwa" className="hover:text-white">Upper Maiwa Khola</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>Kathmandu, Nepal</p>
                <p>info@ridgeline.com.np</p>
                <p>+977-1-XXXXXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ridge Line Energy Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
