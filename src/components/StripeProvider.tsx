import React, { createContext, useContext, ReactNode } from 'react';

interface StripeContextType {
  isStripeEnabled: boolean;
  publishableKey: string | null;
}

const StripeContext = createContext<StripeContextType | undefined>(undefined);

export const StripeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
  const isStripeEnabled = !!publishableKey && !publishableKey.includes('your_stripe_publishable_key_here');

  return (
    <StripeContext.Provider value={{ isStripeEnabled, publishableKey }}>
      {children}
    </StripeContext.Provider>
  );
};

export const useStripe = () => {
  const context = useContext(StripeContext);
  if (context === undefined) {
    throw new Error('useStripe must be used within a StripeProvider');
  }
  return context;
};