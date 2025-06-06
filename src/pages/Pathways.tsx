import React, { useState } from 'react';
import { ChevronDown, ChevronRight, GraduationCap, BookOpen, Briefcase } from 'lucide-react';
import { pathways } from '../data/pathways';

const Pathways: React.FC = () => {
  const [expandedPathway, setExpandedPathway] = useState<string | null>(null);

  const togglePathway = (id: string) => {
    setExpandedPathway(expandedPathway === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Educational Pathways</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore educational and career pathways to understand what steps you need to take to reach your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {pathways.map((pathway) => (
            <div 
              key={pathway.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div 
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={() => togglePathway(pathway.id)}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    pathway.category === 'technology' ? 'bg-blue-100 text-blue-600' :
                    pathway.category === 'healthcare' ? 'bg-green-100 text-green-600' :
                    pathway.category === 'business' ? 'bg-amber-100 text-amber-600' :
                    pathway.category === 'arts' ? 'bg-purple-100 text-purple-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {pathway.icon === 'GraduationCap' && <GraduationCap className="h-6 w-6" />}
                    {pathway.icon === 'BookOpen' && <BookOpen className="h-6 w-6" />}
                    {pathway.icon === 'Briefcase' && <Briefcase className="h-6 w-6" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{pathway.title}</h2>
                    <p className="text-gray-500">{pathway.subtitle}</p>
                  </div>
                </div>
                {expandedPathway === pathway.id ? 
                  <ChevronDown className="h-6 w-6 text-gray-400" /> : 
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                }
              </div>
              
              {expandedPathway === pathway.id && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                  <p className="text-gray-700 mb-6">{pathway.description}</p>
                  
                  <div className="space-y-8">
                    {pathway.stages.map((stage, index) => (
                      <div key={index} className="relative pl-8 border-l-2 border-indigo-200">
                        <div className="absolute -left-[9px] top-0 bg-white p-1">
                          <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
                        </div>
                        <div className="mb-2">
                          <h3 className="text-lg font-semibold text-indigo-800">{stage.title}</h3>
                          <p className="text-sm text-gray-500">{stage.timeline}</p>
                        </div>
                        <p className="text-gray-700 mb-3">{stage.description}</p>
                        {stage.requirements && (
                          <div className="bg-indigo-50 p-4 rounded-md">
                            <h4 className="font-medium text-indigo-800 mb-2">Requirements:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              {stage.requirements.map((req, reqIndex) => (
                                <li key={reqIndex}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Outcomes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {pathway.outcomes.map((outcome, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium text-gray-900">{outcome.role}</h4>
                          <p className="text-sm text-gray-500">${outcome.salary.toLocaleString()} avg. salary</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pathways;