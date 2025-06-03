
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/companyData';

const ProjectsOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developing sustainable hydropower projects that power communities and protect the environment
          </p>
        </div>

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

        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
