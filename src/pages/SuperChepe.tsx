
import React from 'react';
import Navigation from '@/components/Navigation';
import { projectsData } from '@/data/companyData';

const SuperChepe = () => {
  const project = projectsData.find(p => p.name === "Super Chepe Hydropower Project");

  if (!project) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900 to-green-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">{project.name}</h1>
              <p className="text-xl text-blue-100 mb-6">{project.capacity} Flagship Development Project</p>
              <div className="flex gap-4">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">{project.status}</span>
                <span className="bg-green-500 text-white px-4 py-2 rounded-full">{project.location}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Super Chepe Hydropower Project represents our flagship development initiative, 
                  showcasing our commitment to sustainable energy development in Nepal. This run-of-river 
                  project harnesses the natural flow of water to generate clean, renewable electricity.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Technical Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Capacity:</strong> {project.capacity}</li>
                      <li><strong>Type:</strong> {project.type}</li>
                      <li><strong>Location:</strong> {project.location}</li>
                      <li><strong>Status:</strong> {project.status}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Environmental Impact</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Minimal environmental footprint</li>
                      <li>Fish-friendly design</li>
                      <li>Sustainable water management</li>
                      <li>Community-centered approach</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Development Progress */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Timeline</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Feasibility Study Completed</h3>
                      <p className="text-gray-600">Comprehensive technical and financial analysis completed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Environmental Clearance</h3>
                      <p className="text-gray-600">Environmental impact assessment in progress</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-gray-300 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Construction Phase</h3>
                      <p className="text-gray-600">Planned to commence upon approvals</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600 text-sm">Capacity</span>
                    <p className="font-semibold text-lg text-blue-600">{project.capacity}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Type</span>
                    <p className="font-semibold">{project.type}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Status</span>
                    <p className="font-semibold text-green-600">{project.status}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Project Inquiry</h3>
                <p className="text-gray-700 mb-4">
                  Interested in learning more about our flagship project?
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Contact Project Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperChepe;
