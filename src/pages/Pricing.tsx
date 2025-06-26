import React, { useState } from 'react';
import { Check, Star, Zap, Coffee, Heart } from 'lucide-react';
import { products } from '../stripe-config';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const Pricing: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!user) {
      window.location.href = '/login';
      return;
    }

    setLoading(priceId);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('No active session');
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/pricing`,
          mode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  const getProductIcon = (name: string) => {
    switch (name) {
      case 'Enterprise Plan':
        return <Star className="h-8 w-8" />;
      case 'Premium Plan':
        return <Zap className="h-8 w-8" />;
      case 'Sponsor Us':
        return <Heart className="h-8 w-8" />;
      case 'Support Us':
        return <Heart className="h-8 w-8" />;
      case 'Buy me coffee':
        return <Coffee className="h-8 w-8" />;
      default:
        return <Star className="h-8 w-8" />;
    }
  };

  const getProductColor = (name: string) => {
    switch (name) {
      case 'Enterprise Plan':
        return 'from-purple-500 to-indigo-600';
      case 'Premium Plan':
        return 'from-blue-500 to-cyan-600';
      case 'Sponsor Us':
        return 'from-pink-500 to-rose-600';
      case 'Support Us':
        return 'from-green-500 to-emerald-600';
      case 'Buy me coffee':
        return 'from-amber-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getProductFeatures = (name: string) => {
    switch (name) {
      case 'Enterprise Plan':
        return [
          'Unlimited career assessments',
          'Priority support',
          'Advanced analytics',
          'Custom branding',
          'API access',
          'Dedicated account manager'
        ];
      case 'Premium Plan':
        return [
          'Advanced career matching',
          'Detailed personality insights',
          'Career pathway planning',
          'Priority support',
          'Export reports'
        ];
      case 'Sponsor Us':
        return [
          'Support our development team',
          'Help us add new features',
          'Contribute to platform growth',
          'Recognition in credits'
        ];
      case 'Support Us':
        return [
          'Support ongoing development',
          'Help maintain the platform',
          'Show your appreciation',
          'Community recognition'
        ];
      case 'Buy me coffee':
        return [
          'Small token of appreciation',
          'Support daily operations',
          'Fuel our creativity',
          'Join our supporters'
        ];
      default:
        return [];
    }
  };

  // Separate products into plans and support options
  const plans = products.filter(p => p.name.includes('Plan'));
  const supportOptions = products.filter(p => !p.name.includes('Plan'));

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your career potential with our comprehensive assessment and guidance tools
          </p>
        </div>

        {/* Plans Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((product) => (
              <div
                key={product.priceId}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  product.name === 'Enterprise Plan' ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {product.name === 'Enterprise Plan' && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${getProductColor(product.name)} p-6 text-white`}>
                  <div className="flex items-center justify-center mb-4">
                    {getProductIcon(product.name)}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{product.name}</h3>
                  <div className="text-center">
                    <span className="text-4xl font-bold">${product.price}</span>
                    <span className="text-lg opacity-90">
                      {product.mode === 'subscription' ? '/month' : ' one-time'}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {getProductFeatures(product.name).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleCheckout(product.priceId, product.mode)}
                    disabled={loading === product.priceId}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                      product.name === 'Enterprise Plan'
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loading === product.priceId ? 'Processing...' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Support Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportOptions.map((product) => (
              <div
                key={product.priceId}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`bg-gradient-to-r ${getProductColor(product.name)} p-6 text-white`}>
                  <div className="flex items-center justify-center mb-4">
                    {getProductIcon(product.name)}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{product.name}</h3>
                  <div className="text-center">
                    <span className="text-3xl font-bold">${product.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  {product.description && (
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  )}
                  
                  <ul className="space-y-2 mb-6">
                    {getProductFeatures(product.name).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleCheckout(product.priceId, product.mode)}
                    disabled={loading === product.priceId}
                    className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading === product.priceId ? 'Processing...' : 'Support Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">What's included in the free version?</h3>
              <p className="text-gray-600">The free version includes basic career assessment and limited career exploration features.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">How do support payments help?</h3>
              <p className="text-gray-600">Support payments help us maintain and improve the platform, add new features, and keep the service running for all users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;