
import React from 'react';
import Navigation from '@/components/Navigation';
import { Calendar, Download, AlertCircle } from 'lucide-react';

const Notices = () => {
  const notices = [
    {
      title: 'Board Meeting Notice - January 2025',
      date: '2024-12-20',
      type: 'Board Meeting',
      priority: 'high',
      description: 'Notice for the upcoming board meeting scheduled for January 15, 2025.'
    },
    {
      title: 'Environmental Impact Assessment Report',
      date: '2024-12-18',
      type: 'Environmental',
      priority: 'medium',
      description: 'Public disclosure of environmental impact assessment for ongoing projects.'
    },
    {
      title: 'Annual General Meeting Announcement',
      date: '2024-12-15',
      type: 'AGM',
      priority: 'high',
      description: 'Notice for the Annual General Meeting to be held in February 2025.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-purple-900 to-blue-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">Official Notices</h1>
              <p className="text-xl text-purple-100 mb-6">
                Important announcements and regulatory communications
              </p>
            </div>
          </div>
        </section>

        {/* Notices List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {notices.map((notice, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        {notice.priority === 'high' && (
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        )}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          notice.type === 'Board Meeting' ? 'bg-blue-100 text-blue-800' :
                          notice.type === 'Environmental' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {notice.type}
                        </span>
                        {notice.priority === 'high' && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                            URGENT
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{notice.title}</h3>
                      <p className="text-gray-700 mb-3">{notice.description}</p>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Posted: {new Date(notice.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
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

export default Notices;
