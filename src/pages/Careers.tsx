
import React from 'react';
import Navigation from '@/components/Navigation';
import { MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Senior Electrical Engineer',
      department: 'Engineering',
      location: 'Kathmandu',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Lead electrical design and implementation for hydropower projects.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Field Sites',
      type: 'Full-time',
      salary: 'Negotiable',
      description: 'Oversee project execution from planning to commissioning.'
    },
    {
      title: 'Environmental Specialist',
      department: 'Sustainability',
      location: 'Remote/Field',
      type: 'Contract',
      salary: 'Per Project',
      description: 'Conduct environmental impact assessments and compliance monitoring.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-green-900 to-blue-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">Join Our Team</h1>
              <p className="text-xl text-green-100 mb-6">
                Build your career while powering Nepal's sustainable future
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Ridge Line Energy?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Opportunities</h3>
                <p className="text-gray-700">Advance your career in Nepal's growing renewable energy sector</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meaningful Work</h3>
                <p className="text-gray-700">Contribute to sustainable development and community empowerment</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Great Team</h3>
                <p className="text-gray-700">Work with passionate professionals committed to excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.description}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internships */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Internship Programs</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Student Internship Program</h3>
              <p className="text-gray-700 mb-6">
                Gain hands-on experience in hydropower development while contributing to real projects. 
                Our internship program offers exposure to engineering, project management, environmental 
                assessment, and business development.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors">
                Apply for Internship
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
