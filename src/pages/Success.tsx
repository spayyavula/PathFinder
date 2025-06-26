import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

const Success: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionIdParam = urlParams.get('session_id');
    if (sessionIdParam) {
      setSessionId(sessionIdParam);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
          
          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500 mb-1">Session ID:</p>
              <p className="text-sm font-mono text-gray-700 break-all">{sessionId}</p>
            </div>
          )}
          
          <div className="space-y-4">
            <Link
              to="/profile"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              View Your Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/"
              className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If you have any questions about your purchase, please{' '}
              <a href="mailto:support@pathforwards.com" className="text-indigo-600 hover:text-indigo-700">
                contact our support team
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;