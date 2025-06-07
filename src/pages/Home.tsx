import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Target, Users, Play, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const subjects = [
    {
      name: 'Physics',
      description: 'Explore the fundamental laws of nature',
      icon: '⚛️',
      color: 'from-blue-500 to-blue-600',
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Quantum Physics']
    },
    {
      name: 'Chemistry',
      description: 'Understand matter and its interactions',
      icon: '🧪',
      color: 'from-green-500 to-green-600',
      topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry']
    },
    {
      name: 'Mathematics',
      description: 'Master the language of science',
      icon: '📐',
      color: 'from-purple-500 to-purple-600',
      topics: ['Algebra', 'Calculus', 'Geometry', 'Statistics']
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Interactive Lessons',
      description: 'Engaging video lessons with step-by-step explanations and visual demonstrations.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Practice Problems',
      description: 'Thousands of practice problems with instant feedback and detailed solutions.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics and achievement badges.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Study Groups',
      description: 'Connect with peers, join study groups, and learn together in our community.',
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master Science & Math
                <span className="block text-blue-200">Like Never Before</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join millions of students learning Physics, Chemistry, and Mathematics through our 
                interactive platform. From basics to advanced concepts, we make learning engaging and effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/subjects"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Start Learning
                </Link>
                <Link
                  to="/practice"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Take Practice Test
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Students learning science" 
                  className="rounded-2xl shadow-2xl max-w-full h-auto transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-semibold shadow-lg">
                  🎯 98% Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Subject</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the subjects that shape our understanding of the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Link
                key={index}
                to={`/subjects/${subject.name.toLowerCase()}`}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-8">
                  <div className="text-6xl mb-4">{subject.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{subject.name}</h3>
                  <p className="text-gray-600 mb-6">{subject.description}</p>
                  <div className="space-y-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-500">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                        {topic}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Start Learning
                    <ChevronRight className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EduMaster?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with proven educational methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-200">Students Learning</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Video Lessons</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Practice Problems</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of students who are already mastering science and math with EduMaster
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Started Free
            </Link>
            <Link
              to="/subjects"
              className="bg-gray-100 text-gray-900 hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Subjects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;