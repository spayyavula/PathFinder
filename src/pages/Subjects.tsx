import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, Users, Star } from 'lucide-react';

const Subjects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const subjects = [
    {
      id: 'physics',
      name: 'Physics',
      description: 'Explore the fundamental laws that govern our universe',
      icon: '⚛️',
      color: 'from-blue-500 to-blue-600',
      lessons: 156,
      duration: '45 hours',
      students: '125K',
      rating: 4.8,
      topics: [
        { name: 'Classical Mechanics', lessons: 24, level: 'Beginner' },
        { name: 'Thermodynamics', lessons: 18, level: 'Intermediate' },
        { name: 'Electromagnetism', lessons: 32, level: 'Intermediate' },
        { name: 'Quantum Physics', lessons: 28, level: 'Advanced' },
        { name: 'Relativity', lessons: 16, level: 'Advanced' },
        { name: 'Optics', lessons: 22, level: 'Intermediate' },
        { name: 'Nuclear Physics', lessons: 16, level: 'Advanced' }
      ]
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      description: 'Understand matter, its properties, and transformations',
      icon: '🧪',
      color: 'from-green-500 to-green-600',
      lessons: 142,
      duration: '38 hours',
      students: '98K',
      rating: 4.7,
      topics: [
        { name: 'Atomic Structure', lessons: 20, level: 'Beginner' },
        { name: 'Chemical Bonding', lessons: 18, level: 'Beginner' },
        { name: 'Organic Chemistry', lessons: 35, level: 'Intermediate' },
        { name: 'Inorganic Chemistry', lessons: 28, level: 'Intermediate' },
        { name: 'Physical Chemistry', lessons: 25, level: 'Advanced' },
        { name: 'Biochemistry', lessons: 16, level: 'Advanced' }
      ]
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Master the language of science and logic',
      icon: '📐',
      color: 'from-purple-500 to-purple-600',
      lessons: 198,
      duration: '52 hours',
      students: '156K',
      rating: 4.9,
      topics: [
        { name: 'Algebra', lessons: 32, level: 'Beginner' },
        { name: 'Geometry', lessons: 28, level: 'Beginner' },
        { name: 'Trigonometry', lessons: 24, level: 'Intermediate' },
        { name: 'Calculus', lessons: 45, level: 'Intermediate' },
        { name: 'Linear Algebra', lessons: 22, level: 'Advanced' },
        { name: 'Differential Equations', lessons: 26, level: 'Advanced' },
        { name: 'Statistics', lessons: 21, level: 'Intermediate' }
      ]
    }
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === '' || 
                        subject.topics.some(topic => topic.level === selectedLevel);
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Subject</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive courses in Physics, Chemistry, and Mathematics designed for students at all levels
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search subjects or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="md:w-48">
              <select
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredSubjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Subject Header */}
              <div className={`bg-gradient-to-r ${subject.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{subject.icon}</div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 mr-1" />
                    <span className="font-semibold">{subject.rating}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
                <p className="text-blue-100">{subject.description}</p>
              </div>

              {/* Subject Stats */}
              <div className="p-6 border-b border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <BookOpen className="h-5 w-5 text-gray-500 mr-1" />
                    </div>
                    <div className="font-semibold text-gray-900">{subject.lessons}</div>
                    <div className="text-sm text-gray-500">Lessons</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="h-5 w-5 text-gray-500 mr-1" />
                    </div>
                    <div className="font-semibold text-gray-900">{subject.duration}</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-5 w-5 text-gray-500 mr-1" />
                    </div>
                    <div className="font-semibold text-gray-900">{subject.students}</div>
                    <div className="text-sm text-gray-500">Students</div>
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Topics Covered</h3>
                <div className="space-y-3">
                  {subject.topics.slice(0, 4).map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{topic.name}</div>
                        <div className="text-sm text-gray-500">{topic.lessons} lessons</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        topic.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        topic.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {topic.level}
                      </span>
                    </div>
                  ))}
                  {subject.topics.length > 4 && (
                    <div className="text-sm text-gray-500 text-center pt-2">
                      +{subject.topics.length - 4} more topics
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <Link
                  to={`/subjects/${subject.id}`}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 px-4 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No subjects found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subjects;