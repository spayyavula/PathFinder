import React, { useState } from 'react';
import { ExternalLink, Bookmark, BookmarkCheck, Filter } from 'lucide-react';
import { resources } from '../data/resources';

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [savedResources, setSavedResources] = useState<string[]>([]);
  
  const categories = [...new Set(resources.map(resource => resource.category))];
  
  const filteredResources = resources.filter(resource => {
    return selectedCategory === '' || resource.category === selectedCategory;
  });

  const toggleSaveResource = (id: string) => {
    if (savedResources.includes(id)) {
      setSavedResources(savedResources.filter(resourceId => resourceId !== id));
    } else {
      setSavedResources([...savedResources, id]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore helpful resources to guide you on your career journey.
          </p>
        </div>
        
        {/* Filter by category */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center text-gray-700">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  selectedCategory === '' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Resources
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm transition-colors ${
                    selectedCategory === category 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div 
                className="h-40 bg-gradient-to-r from-indigo-500 to-blue-500 relative"
                style={{ 
                  backgroundImage: resource.image ? `url(${resource.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute top-0 right-0 m-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {resource.category}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 m-2">
                  <button 
                    onClick={() => toggleSaveResource(resource.id)}
                    className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                  >
                    {savedResources.includes(resource.id) ? (
                      <BookmarkCheck className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <Bookmark className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Source:</span> {resource.source}
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Resource
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No resources found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;