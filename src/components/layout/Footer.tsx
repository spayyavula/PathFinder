import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PathFinder</h3>
            <p className="text-indigo-100 text-sm">
              Guiding high school students toward successful career paths and empowering their future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-indigo-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="/explore" className="text-indigo-100 hover:text-white transition-colors">Career Explorer</a></li>
              <li><a href="/assessment" className="text-indigo-100 hover:text-white transition-colors">Assessment</a></li>
              <li><a href="/resources" className="text-indigo-100 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-indigo-100 text-sm mb-2">
              Have questions or feedback? Reach out to our team.
            </p>
            <a 
              href="mailto:info@pathfinder.com" 
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md text-sm transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-indigo-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-indigo-200">
            © {currentYear} PathFinder. All rights reserved.
          </p>
          <p className="text-sm text-indigo-200 mt-2 sm:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;