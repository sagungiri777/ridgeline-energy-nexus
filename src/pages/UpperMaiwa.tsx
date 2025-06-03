
import React from 'react';
import Navigation from '@/components/Navigation';
import { projectsData } from '@/data/companyData';

const UpperMaiwa = () => {
  const project = projectsData.find(p => p.name === "Upper Maiwa Khola Hydropower Project");

  if (!project) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-green-900 to-blue-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">{project.name}</h1>
              <p className="text-xl text-green-100 mb-6">{project.capacity} Run of River Hydropower Project</p>
              <div className="flex gap-4">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full">{project.status}</span>
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">{project.location}</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Introduction</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Upper Maiwa Khola Hydropower Project (UMHP) is being developed by Kang Hydropower Co. Ltd. (KHCL). 
                  KHCL has awarded Contract to Samyak Engineering Pvt. Ltd (SEPL) to prepare Detailed Project Report 
                  study and detailed engineering study of the project.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Based on the site visit and further study, the project has been fixed at an installed capacity of 
                  17.85 MW with the gross natural head and design discharge of 515.00 m and 4.19 m³/s, respectively.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Project Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Developer:</strong> {project.developer}</li>
                      <li><strong>Contractor:</strong> {project.contractor}</li>
                      <li><strong>River:</strong> {project.river}</li>
                      <li><strong>Type:</strong> {project.type}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Technical Specifications</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Capacity:</strong> {project.capacity}</li>
                      <li><strong>Gross Head:</strong> {project.technicalSpecs?.grossNaturalHead}</li>
                      <li><strong>Design Discharge:</strong> {project.technicalSpecs?.designDischarge}</li>
                      <li><strong>Status:</strong> {project.status}</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Project Description */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Description</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The project is a Run-off-River (RoR) type and is located in Taplejung District, Koshi Province of Nepal. 
                  The project headworks (intake, gravel trap and settling basin) is located on left bank of Maiwa Khola 
                  whereas remaining components (headrace tunnel, surge tank, penstock pipe, powerhouse and tailrace 
                  arrangements) are located along the right bank of Maiwa Khola.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Buried steel pipe connects the left bank and right bank project components. The proposed headworks 
                  arrangement will be located in Khuwagu village of Meringden Gaun Palika whereas, the proposed powerhouse 
                  will be located along the right bank of Maiwa Khola in Kharte village of Maiwa Khola Gaun Palika.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Project Components</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Headworks Location</h4>
                      <p className="text-gray-700">{project.projectComponents?.headworks}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Powerhouse Location</h4>
                      <p className="text-gray-700">{project.projectComponents?.powerhouse}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Power Evacuation */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Power Evacuation</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The power generated by the project will be evacuated via {project.projectComponents?.transmissionLine} 
                  to utility grid at Dhungesangu substation of NEA located in Maiwa Khola Gaun Palika of Taplejung District.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The transmission line will utilize ACSR "WOLF" conductor, ensuring reliable power transmission to the 
                  national grid system.
                </p>

                <div className="mt-6 bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Transmission Specifications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Line Length:</strong> 4.036 km</li>
                    <li><strong>Voltage Level:</strong> 132 kV single circuit</li>
                    <li><strong>Conductor Type:</strong> ACSR "WOLF"</li>
                    <li><strong>Connection Point:</strong> Dhungesangu substation (NEA)</li>
                  </ul>
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
                    <p className="font-semibold text-lg text-green-600">{project.capacity}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Type</span>
                    <p className="font-semibold">{project.type}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Status</span>
                    <p className="font-semibold text-blue-600">{project.status}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Developer</span>
                    <p className="font-semibold text-sm">{project.developer}</p>
                  </div>
                </div>
              </div>

              {/* Development Timeline */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Development Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-800">Site Assessment</p>
                      <p className="text-sm text-gray-600">Completed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-800">Detailed Project Report</p>
                      <p className="text-sm text-gray-600">In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-800">Environmental Clearance</p>
                      <p className="text-sm text-gray-600">Pending</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-800">Construction</p>
                      <p className="text-sm text-gray-600">Planned</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Clean renewable energy generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Local employment opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Infrastructure development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Community development programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Environmental conservation</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Project Inquiry</h3>
                <p className="text-gray-700 mb-4">
                  For detailed information about this development project, please contact our team.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Contact Development Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperMaiwa;
