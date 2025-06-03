
import React from 'react';
import Navigation from '@/components/Navigation';
import { projectsData } from '@/data/companyData';

const DoodhpokhariChepe = () => {
  const project = projectsData.find(p => p.name === "Doodhpokhari Chepe Hydropower Project");

  if (!project) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">{project.name}</h1>
              <p className="text-xl text-blue-100 mb-6">{project.capacity} Run of River Hydropower Project</p>
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
                  Doodhpokhari Chepe Hydropower Public Limited (DPCHPL) is a 11 MW Run of River (RoR) type project 
                  located at Ajirkot Rural Municipality and Doodhpokhari Rural Municipality of Gorkha and Lamjung district, 
                  Gandaki province. The project is about 182 km (aerial) north west of Kathmandu.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Location Details</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>River:</strong> {project.river}</li>
                      <li><strong>Latitude:</strong> {project.coordinates?.latitude}</li>
                      <li><strong>Longitude:</strong> {project.coordinates?.longitude}</li>
                      <li><strong>Distance from Kathmandu:</strong> 182 km (aerial)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Project Type</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Type:</strong> {project.type}</li>
                      <li><strong>Capacity:</strong> {project.capacity}</li>
                      <li><strong>Design Discharge:</strong> {project.hydrology?.designDischarge}</li>
                      <li><strong>Average Flow:</strong> {project.hydrology?.longTermAverageFlow}</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Hydrology</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Catchment Area (Intake):</span>
                        <span className="font-medium">{project.hydrology?.catchmentAreaIntake}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Catchment Area (Powerhouse):</span>
                        <span className="font-medium">{project.hydrology?.catchmentAreaPowerhouse}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Design Discharge:</span>
                        <span className="font-medium">{project.hydrology?.designDischarge}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Power Generation</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Gross Head:</span>
                        <span className="font-medium">{project.technicalSpecs?.grossHead}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Net Head:</span>
                        <span className="font-medium">{project.technicalSpecs?.netHead}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Turbine Type:</span>
                        <span className="font-medium">{project.technicalSpecs?.turbineType}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Number of Units:</span>
                        <span className="font-medium">{project.technicalSpecs?.numberOfUnits}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Financial Information */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Overview</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Project Economics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Project Cost:</span>
                        <span className="font-medium">{project.projectCost}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">IRR:</span>
                        <span className="font-medium text-green-600">{project.irr}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">B/C Ratio:</span>
                        <span className="font-medium text-green-600">{project.bcRatio}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Payback Period:</span>
                        <span className="font-medium">{project.paybackPeriod}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Energy Generation</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Dry Season:</span>
                        <span className="font-medium">{project.energyGeneration?.drySeasonEnergy}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Wet Season:</span>
                        <span className="font-medium">{project.energyGeneration?.wetSeasonEnergy}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Total Energy:</span>
                        <span className="font-medium text-blue-600">{project.energyGeneration?.totalEnergy}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Project Accessibility */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Accessibility</h2>
                <div className="space-y-4">
                  {project.accessibility?.map((route, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{route}</p>
                    </div>
                  ))}
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
                  <div>
                    <span className="text-gray-600 text-sm">Construction Period</span>
                    <p className="font-semibold">{project.constructionPeriod}</p>
                  </div>
                </div>
              </div>

              {/* Project Progress */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Civil Works</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Hydro-Mechanical</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Electro-Mechanical</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Transmission Line</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Project Inquiry</h3>
                <p className="text-gray-700 mb-4">
                  For detailed information about this project, please contact our project team.
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

export default DoodhpokhariChepe;
