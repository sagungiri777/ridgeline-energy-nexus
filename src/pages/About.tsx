
import React from 'react';
import Navigation from '@/components/Navigation';
import { companyData } from '@/data/companyData';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900 to-green-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">About Ridge Line Energy</h1>
              <p className="text-xl text-blue-100 mb-6">
                Leading Nepal's renewable energy transformation through sustainable hydropower development
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
                {companyData.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {companyData.mission}
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {companyData.vision}
                  </p>
                </div>
              </div>

              <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Core Values</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {companyData.coreValues.map((value, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="text-blue-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
