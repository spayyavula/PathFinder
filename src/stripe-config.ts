export interface Product {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
}

export const products: Product[] = [
  {
    priceId: 'price_1Rdu48G0usgeCZqlMzirm1jc',
    name: 'Enterprise Plan',
    description: 'Enterprise Plan - whitelisting possible',
    mode: 'subscription',
    price: 199.00
  },
  {
    priceId: 'price_1Rdu2JG0usgeCZqlpwN7k1Vr',
    name: 'Premium Plan',
    description: 'Advanced Plan for individuals',
    mode: 'payment',
    price: 79.00
  },
  {
    priceId: 'price_1RdtzkG0usgeCZqlJG0ADUZF',
    name: 'Sponsor Us',
    description: 'Sponsor our support team',
    mode: 'payment',
    price: 25.00
  },
  {
    priceId: 'price_1RdtxSG0usgeCZqldPwtqD6m',
    name: 'Support Us',
    description: 'Support Our Developer',
    mode: 'payment',
    price: 10.00
  },
  {
    priceId: 'price_1RdtvPG0usgeCZqlzSxblbCP',
    name: 'Buy me coffee',
    description: '',
    mode: 'payment',
    price: 5.00
  }
];