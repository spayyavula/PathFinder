import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Play, Star, Filter, Search } from 'lucide-react';

const Learn: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Mock recent lessons and recommendations
  const recentLessons = [
    {
      id: 'kinematics',
      title: 'Introduction to Kinematics',
      subject: 'Physics',
      progress: 65,
      duration: '45 min',
      thumbnail: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastWatched: '2 hours ago'
    },
    {
      id: 'atomic-structure',
      title: 'Atomic Structure Basics',
      subject: 'Chemistry',
      progress: 30,
      duration: '40 min',
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastWatched: '1 day ago'
    },
    {
      id: 'linear-equations',
      title: 'Solving Linear Equations',
      subject: 'Mathematics',
      progress: 100,
      duration: '35 min',
      thumbnail: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastWatched: '3 days ago'
    }
  ];

  const recommendedLessons = [
    {
      id: 'dynamics',
      title: 'Dynamics and Forces',
      subject: 'Physics',
      level: 'Beginner',
      duration: '60 min',
      rating: 4.8,
      students: '12.5K',
      thumbnail: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn about forces, Newton\'s laws, and their applications in real-world scenarios.'
    },
    {
      id: 'chemical-bonding',
      title: 'Chemical Bonding Fundamentals',
      subject: 'Chemistry',
      level: 'Beginner',
      duration: '50 min',
      rating: 4.7,
      students: '8.9K',
      thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Understand how atoms bond together to form molecules and compounds.'
    },
    {
      id: 'quadratic-equations',
      title: 'Quadratic Equations Mastery',
      subject: 'Mathematics',
      level: 'Intermediate',
      duration: '55 min',
      rating: 4.9,
      students: '15.2K',
      thumbnail: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master quadratic equations with multiple solving methods and real-world applications.'
    },
    {
      id: 'thermodynamics',
      title: 'Introduction to Thermodynamics',
      subject: 'Physics',
      level: 'Intermediate',
      duration: '65 min',
      rating: 4.6,
      students: '7.3K',
      thumbnail: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Explore heat, temperature, and energy transfer in physical systems.'
    },
    {
      id: 'organic-chemistry',
      title: 'Organic Chemistry Basics',
      subject: 'Chemistry',
      level: 'Intermediate',
      duration: '70 min',
      rating: 4.5,
      students: '6.8K',
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Introduction to carbon-based compounds and their properties.'
    },
    {
      id: 'calculus-intro',
      title: 'Introduction to Calculus',
      subject: 'Mathematics',
      level: 'Advanced',
      duration: '80 min',
      rating: 4.8,
      students: '11.4K',
      thumbnail: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Begin your journey into calculus with limits and derivatives.'
    }
  ];

  const subjects = ['Physics', 'Chemistry', 'Mathematics'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredLessons = recommendedLessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === '' || lesson.subject === selectedSubject;
    const matchesLevel = selectedLevel === '' || lesson.level === selectedLevel;
    return matchesSearch && matchesSubject && matchesLevel;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Continue Learning</h1>
          <p className="text-gray-600">Pick up where you left off or discover new topics</p>
        </div>

        {/* Recent Lessons */}
        {recentLessons.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Watched</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/learn/physics/${lesson.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={lesson.thumbnail}
                      alt={lesson.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {lesson.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600">{lesson.subject}</span>
                      <span className="text-xs text-gray-500">{lesson.lastWatched}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{lesson.title}</h3>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{lesson.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search lessons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

        {/* Recommended Lessons */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/learn/physics/${lesson.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative">
                  <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lesson.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      lesson.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {lesson.level}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {lesson.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">{lesson.subject}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{lesson.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{lesson.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{lesson.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{lesson.duration}</span>
                    <span>{lesson.students} students</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredLessons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">No lessons found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;