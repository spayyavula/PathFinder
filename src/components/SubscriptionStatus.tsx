import React from 'react';
import { Crown, AlertCircle, CheckCircle, Clock, CreditCard } from 'lucide-react';
import { useSubscription } from '../hooks/useSubscription';
import { Link } from 'react-router-dom';

interface SubscriptionStatusProps {
  showDetails?: boolean;
  className?: string;
}

const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({ 
  showDetails = false, 
  className = '' 
}) => {
  const { subscription, loading, error } = useSubscription();

  if (loading) {
    return (
      <div className={`flex items-center ${className}`}>
        <Clock className="h-4 w-4 text-gray-400 mr-2" />
        <span className="text-sm text-gray-500">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center ${className}`}>
        <AlertCircle className="h-4 w-4 text-red-400 mr-2" />
        <span className="text-sm text-red-500">Error loading subscription</span>
      </div>
    );
  }

  const getStatusInfo = () => {
    if (!subscription || !subscription.subscription_status) {
      return {
        label: 'Free Plan',
        icon: <CreditCard className="h-4 w-4" />,
        color: 'text-gray-600',
        bgColor: 'bg-gray-100',
        description: 'Basic features included'
      };
    }

    switch (subscription.subscription_status) {
      case 'active':
        return {
          label: 'Pro Plan',
          icon: <Crown className="h-4 w-4" />,
          color: 'text-green-800',
          bgColor: 'bg-green-100',
          description: 'All features unlocked'
        };
      case 'trialing':
        return {
          label: 'Trial',
          icon: <Clock className="h-4 w-4" />,
          color: 'text-blue-800',
          bgColor: 'bg-blue-100',
          description: 'Trial period active'
        };
      case 'past_due':
        return {
          label: 'Past Due',
          icon: <AlertCircle className="h-4 w-4" />,
          color: 'text-yellow-800',
          bgColor: 'bg-yellow-100',
          description: 'Payment required'
        };
      case 'canceled':
        return {
          label: 'Canceled',
          icon: <AlertCircle className="h-4 w-4" />,
          color: 'text-red-800',
          bgColor: 'bg-red-100',
          description: 'Subscription canceled'
        };
      default:
        return {
          label: 'Unknown',
          icon: <AlertCircle className="h-4 w-4" />,
          color: 'text-gray-800',
          bgColor: 'bg-gray-100',
          description: 'Status unknown'
        };
    }
  };

  const statusInfo = getStatusInfo();

  if (!showDetails) {
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.bgColor} ${statusInfo.color} ${className}`}>
        {statusInfo.icon}
        <span className="ml-1">{statusInfo.label}</span>
      </span>
    );
  }

  return (
    <div className={`bg-white rounded-lg border p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className={`p-2 rounded-full ${statusInfo.bgColor} mr-3`}>
            {statusInfo.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{statusInfo.label}</h3>
            <p className="text-sm text-gray-600">{statusInfo.description}</p>
          </div>
        </div>
        {subscription?.subscription_status === 'active' && (
          <CheckCircle className="h-5 w-5 text-green-500" />
        )}
      </div>

      {subscription && subscription.subscription_status === 'active' && (
        <div className="space-y-2 text-sm text-gray-600">
          {subscription.current_period_end && (
            <div className="flex justify-between">
              <span>Next billing:</span>
              <span className="font-medium">
                {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
              </span>
            </div>
          )}
          {subscription.payment_method_brand && subscription.payment_method_last4 && (
            <div className="flex justify-between">
              <span>Payment method:</span>
              <span className="font-medium">
                {subscription.payment_method_brand.toUpperCase()} •••• {subscription.payment_method_last4}
              </span>
            </div>
          )}
          {subscription.cancel_at_period_end && (
            <div className="flex items-center text-yellow-600">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>Cancels at period end</span>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-gray-200">
        <Link
          to="/pricing"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          {subscription?.subscription_status === 'active' ? 'Manage subscription' : 'Upgrade plan'} →
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionStatus;