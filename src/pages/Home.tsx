import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Brain, TrendingUp, Users, Play, ChevronRight, Target, Award, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      name: 'Career Assessment',
      description: 'Discover your strengths, interests, and ideal career matches',
      icon: <Brain className="h-12 w-12" />,
      color: 'from-indigo-500 to-purple-600',
      link: '/assessment',
      highlights: ['Personality Analysis', 'Skills Assessment', 'Interest Mapping', 'Career Matching']
    },
    {
      name: 'Career Explorer',
      description: 'Explore hundreds of careers with detailed insights',
      icon: <Compass className="h-12 w-12" />,
      color: 'from-blue-500 to-cyan-600',
      link: '/explore',
      highlights: ['Career Database', 'Salary Information', 'Job Outlook', 'Required Skills']
    },
    {
      name: 'Educational Pathways',
      description: 'Plan your educational journey to reach your goals',
      icon: <TrendingUp className="h-12 w-12" />,
      color: 'from-green-500 to-emerald-600',
      link: '/pathways',
      highlights: ['College Planning', 'Degree Requirements', 'Timeline Planning', 'Alternative Paths']
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Personalized Guidance',
      description: 'Get tailored career recommendations based on your unique personality and interests.',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Expert Insights',
      description: 'Access comprehensive career information from industry professionals and experts.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Educational Planning',
      description: 'Understand the educational requirements and pathways for your chosen career.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Peer Community',
      description: 'Connect with other students exploring similar career paths and share experiences.',
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your
                <span className="block text-purple-200">Perfect Career Path</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Take our comprehensive assessment to discover careers that match your personality, 
                interests, and skills. Make informed decisions about your future with expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/assessment"
                  className="bg-white text-indigo-700 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Take Assessment
                </Link>
                <Link
                  to="/explore"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center"
                >
                  <Compass className="h-5 w-5 mr-2" />
                  Explore Careers
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Students planning their future careers" 
                  className="rounded-2xl shadow-2xl max-w-full h-auto transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-semibold shadow-lg">
                  🎯 95% Career Match Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Career Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your ideal career path through our comprehensive assessment and exploration tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-8">
                  <div className="text-indigo-600 mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-500">
                        <ChevronRight className="h-4 w-4 mr-2 text-indigo-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                    Get Started
                    <ChevronRight className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PathForwards?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines scientific assessment methods with comprehensive career insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-purple-200">Students Guided</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Career Profiles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-200">Match Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-purple-200">Educational Pathways</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Discover Your Future?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students who have found their perfect career path with PathForwards
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/assessment"
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Take Free Assessment
            </Link>
            <Link
              to="/explore"
              className="bg-gray-100 text-gray-900 hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;