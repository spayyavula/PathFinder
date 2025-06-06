import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, MapPin, BookMarked } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Discover Your Path to Success
              </h1>
              <p className="text-xl mb-6 text-indigo-100">
                Explore careers, set goals, and build your future with guidance tailored for high school students.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/assessment"
                  className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Take Assessment
                </Link>
                <Link
                  to="/explore"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Explore Careers
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students planning their future" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How PathFinder Helps You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide tools and resources to help you make informed decisions about your future career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-indigo-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Career Discovery</h3>
              <p className="text-gray-600">Explore a vast database of careers and find what matches your interests and skills.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Skill Assessment</h3>
              <p className="text-gray-600">Take assessments to identify your strengths and areas that align with potential careers.</p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Educational Pathways</h3>
              <p className="text-gray-600">Learn about the education and training paths needed for your chosen careers.</p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <BookMarked className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Resource Library</h3>
              <p className="text-gray-600">Access articles, videos, and tools to help with career planning and skill development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who found their path using our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                quote: "PathFinder helped me discover my passion for computer science and showed me the steps to get there.",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
                path: "Computer Science"
              },
              {
                name: "Maya Patel",
                quote: "I was undecided about my future until I took the career assessment. Now I'm confidently pursuing nursing.",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
                path: "Nursing"
              },
              {
                name: "Tyler Wilson",
                quote: "The resources and mentorship connections helped me land an internship in my dream field!",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
                path: "Digital Marketing"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-indigo-600 text-sm">{testimonial.path}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Path?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            Start your journey today and take the first step toward a successful future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/assessment"
              className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Take Assessment
            </Link>
            <Link
              to="/explore"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-6 py-3 rounded-md font-medium transition-colors duration-200"
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