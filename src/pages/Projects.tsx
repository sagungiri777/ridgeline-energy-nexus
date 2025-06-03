
import React from 'react';
import Navigation from '@/components/Navigation';
import { projectsData } from '@/data/companyData';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-green-900 to-blue-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
              <p className="text-xl text-green-100 mb-6">
                Developing sustainable hydropower projects across Nepal
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.capacity} • {project.type}</p>
                    <p className="text-gray-700 mb-4">{project.location}</p>
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Operational' ? 'bg-green-100 text-green-800' :
                        project.status === 'Under Construction' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                      <Link 
                        to={project.name === "Super Chepe Hydropower Project" ? "/super-chepe" :
                             project.name === "Doodhpokhari Chepe Hydropower Project" ? "/doodhpokhari-chepe" :
                             "/upper-maiwa"}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Learn More →
                      </Link>
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

export default Projects;
