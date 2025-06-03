
import React from 'react';
import Navigation from '@/components/Navigation';
import { Calendar, User } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      title: 'Ridge Line Energy Announces New Hydropower Initiative',
      excerpt: 'Company launches comprehensive study for sustainable energy development in Eastern Nepal.',
      date: '2024-12-15',
      author: 'Corporate Communications',
      category: 'Company News'
    },
    {
      title: 'Super Chepe Project Receives Environmental Clearance',
      excerpt: 'Flagship project moves forward with official environmental approval from government authorities.',
      date: '2024-12-10',
      author: 'Project Team',
      category: 'Project Updates'
    },
    {
      title: 'Community Partnership Program Launched',
      excerpt: 'New initiative aims to strengthen relationships with local communities through skill development.',
      date: '2024-12-05',
      author: 'Community Relations',
      category: 'CSR'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900 to-green-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">Latest News</h1>
              <p className="text-xl text-blue-100 mb-6">
                Stay updated with our latest developments and industry insights
              </p>
            </div>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {newsArticles.map((article, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{article.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
