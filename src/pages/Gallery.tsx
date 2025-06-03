
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'projects', 'construction', 'ceremonies', 'community'];
  
  const images = [
    { id: 1, category: 'projects', title: 'Super Chepe Project Site', url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3' },
    { id: 2, category: 'construction', title: 'Turbine Installation', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3' },
    { id: 3, category: 'community', title: 'Community Meeting', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3' },
    { id: 4, category: 'projects', title: 'Doodhpokhari Site', url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3' },
    { id: 5, category: 'construction', title: 'Powerhouse Construction', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3' },
    { id: 6, category: 'ceremonies', title: 'Project Inauguration', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3' },
  ];

  const filteredImages = selectedCategory === 'all' ? images : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900 to-green-900 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-white mb-4">Photo Gallery</h1>
              <p className="text-xl text-blue-100 mb-6">
                Capturing our journey in sustainable energy development
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Filter */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full capitalize transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{image.title}</h3>
                    <p className="text-sm text-gray-600 capitalize">{image.category}</p>
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

export default Gallery;
