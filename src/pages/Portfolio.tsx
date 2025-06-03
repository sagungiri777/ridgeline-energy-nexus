
import React from 'react';
import Navigation from '@/components/Navigation';
import { projectsData } from '@/data/companyData';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-green-900 to-blue-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">Investment Portfolio</h1>
              <p className="text-xl text-green-100 mb-6">
                Strategic investments in Nepal's hydropower sector
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">20.85 MW</h3>
                <p className="text-gray-600">Total Portfolio Capacity</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-3xl font-bold text-green-600 mb-2">3</h3>
                <p className="text-gray-600">Active Projects</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">NRs 5B+</h3>
                <p className="text-gray-600">Total Investment Value</p>
              </div>
            </div>

            {/* Portfolio Projects */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Portfolio Projects</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p><strong>Capacity:</strong> {project.capacity}</p>
                      <p><strong>Type:</strong> {project.type}</p>
                      <p><strong>Location:</strong> {project.location}</p>
                      <p><strong>Investment:</strong> {project.investmentType || 'Development'}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Operational' ? 'bg-green-100 text-green-800' :
                        project.status === 'Under Construction' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Performance</p>
                        <p className="text-green-600 font-semibold">+15.2%</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
