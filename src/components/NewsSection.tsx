
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const NewsSection = () => {
  const latestNews = [
    {
      title: 'Ridge Line Energy Announces New Hydropower Initiative',
      excerpt: 'Company launches comprehensive study for sustainable energy development in Eastern Nepal.',
      date: '2024-12-15',
      category: 'Company News'
    },
    {
      title: 'Super Chepe Project Receives Environmental Clearance',
      excerpt: 'Flagship project moves forward with official environmental approval from government authorities.',
      date: '2024-12-10',
      category: 'Project Updates'
    },
    {
      title: 'Community Partnership Program Launched',
      excerpt: 'New initiative aims to strengthen relationships with local communities through skill development.',
      date: '2024-12-05',
      category: 'CSR'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest developments and industry insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestNews.map((news, index) => (
            <article key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {news.category}
                </span>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(news.date).toLocaleDateString()}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{news.title}</h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">{news.excerpt}</p>
              <Link to="/news" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Read More →
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/news"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
