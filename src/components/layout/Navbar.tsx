import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, User, LogOut, CreditCard } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useSubscription } from '../../hooks/useSubscription';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { subscription } = useSubscription();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Assessment', href: '/assessment' },
    { name: 'Explore Careers', href: '/explore' },
    { name: 'Pathways', href: '/pathways' },
    { name: 'Resources', href: '/resources' },
    { name: 'Progress', href: '/progress' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getSubscriptionBadge = () => {
    if (!subscription || !subscription.subscription_status) return null;
    
    if (subscription.subscription_status === 'active') {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
          Pro
        </span>
      );
    }
    
    return null;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">PathForwards</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
              
              {user ? (
                <div className="relative ml-4 flex items-center space-x-4">
                  <Link
                    to="/pricing"
                    className={`${
                      isActive('/pricing')
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    } flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    <CreditCard className="h-5 w-5 mr-1" />
                    Pricing
                  </Link>
                  <Link 
                    to="/profile" 
                    className={`${
                      isActive('/profile')
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    } flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    <User className="h-5 w-5 mr-1" />
                    Profile
                    {getSubscriptionBadge()}
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="ml-4 flex items-center space-x-4">
                  <Link
                    to="/pricing"
                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <Link
                  to="/pricing"
                  className={`${
                    isActive('/pricing')
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  } block px-3 py-2 rounded-md text-base font-medium flex items-center`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CreditCard className="h-5 w-5 mr-1" />
                  Pricing
                </Link>
                <Link
                  to="/profile"
                  className={`${
                    isActive('/profile')
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  } block px-3 py-2 rounded-md text-base font-medium flex items-center`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-1" />
                  Profile
                  {getSubscriptionBadge()}
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/pricing"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;