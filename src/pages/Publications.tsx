
import React from 'react';
import Navigation from '@/components/Navigation';
import { Calendar, Download, FileText, Book } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Annual Report 2024',
      type: 'Annual Report',
      date: '2024-12-01',
      description: 'Comprehensive overview of company performance, projects, and financial highlights for 2024.',
      size: '2.3 MB',
      icon: Book
    },
    {
      title: 'Environmental Impact Assessment - Super Chepe',
      type: 'Technical Report',
      date: '2024-11-15',
      description: 'Detailed environmental impact assessment report for the Super Chepe Hydropower Project.',
      size: '5.7 MB',
      icon: FileText
    },
    {
      title: 'Sustainability Report 2024',
      type: 'Sustainability',
      date: '2024-10-30',
      description: 'Our commitment to sustainable development and community engagement initiatives.',
      size: '1.8 MB',
      icon: Book
    },
    {
      title: 'Feasibility Study - Upper Maiwa Project',
      type: 'Technical Report',
      date: '2024-09-20',
      description: 'Technical and financial feasibility analysis for the Upper Maiwa Khola Hydropower Project.',
      size: '4.2 MB',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-green-900 to-purple-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">Publications</h1>
              <p className="text-xl text-green-100 mb-6">
                Access our reports, studies, and technical documentation
              </p>
            </div>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {publications.map((publication, index) => {
                const IconComponent = publication.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            publication.type === 'Annual Report' ? 'bg-purple-100 text-purple-800' :
                            publication.type === 'Technical Report' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {publication.type}
                          </span>
                          <span className="text-sm text-gray-500">{publication.size}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{publication.title}</h3>
                        <p className="text-gray-700 mb-4">{publication.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(publication.date).toLocaleDateString()}</span>
                          </div>
                          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking for Older Publications?</h2>
            <p className="text-gray-700 mb-8">
              Access our complete archive of historical reports and documentation.
            </p>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors">
              Browse Archive
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
