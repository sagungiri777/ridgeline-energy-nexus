
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [announcementsOpen, setAnnouncementsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RLE</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Ridge Line Energy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:text-blue-600 transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-700'}`}>
              About
            </Link>
            
            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Projects</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {projectsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border">
                  <Link to="/projects" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Projects
                  </Link>
                  <Link to="/super-chepe" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Super Chepe Hydropower
                  </Link>
                  <Link to="/doodhpokhari-chepe" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Doodhpokhari Chepe
                  </Link>
                  <Link to="/upper-maiwa" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Upper Maiwa Khola
                  </Link>
                </div>
              )}
            </div>

            <Link to="/portfolio" className={`hover:text-blue-600 transition-colors ${isActive('/portfolio') ? 'text-blue-600' : 'text-gray-700'}`}>
              Portfolio
            </Link>
            <Link to="/gallery" className={`hover:text-blue-600 transition-colors ${isActive('/gallery') ? 'text-blue-600' : 'text-gray-700'}`}>
              Gallery
            </Link>
            
            {/* Announcements Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAnnouncementsOpen(!announcementsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Announcements</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {announcementsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                  <Link to="/news" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    News
                  </Link>
                  <Link to="/notices" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Notices
                  </Link>
                  <Link to="/publications" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Publications
                  </Link>
                </div>
              )}
            </div>

            <Link to="/careers" className={`hover:text-blue-600 transition-colors ${isActive('/careers') ? 'text-blue-600' : 'text-gray-700'}`}>
              Careers
            </Link>
            <Link to="/contact" className={`hover:text-blue-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'}`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
              <Link to="/news" className="text-gray-700 hover:text-blue-600">News</Link>
              <Link to="/careers" className="text-gray-700 hover:text-blue-600">Careers</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
