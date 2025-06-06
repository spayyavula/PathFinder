export interface CareerCategory {
  id: string;
  name: string;
  description: string;
}

export const careerCategories: CareerCategory[] = [
  {
    id: 'technology',
    name: 'Technology',
    description: 'Careers focused on developing and managing technology systems and software.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Careers centered on providing medical care and promoting health and wellness.'
  },
  {
    id: 'business',
    name: 'Business & Finance',
    description: 'Careers involving business operations, financial management, and entrepreneurship.'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Careers focused on teaching, training, and educational administration.'
  },
  {
    id: 'creative',
    name: 'Creative Arts',
    description: 'Careers involving artistic expression, design, and creative production.'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Careers focused on designing, building, and maintaining structures, machines, or systems.'
  },
  {
    id: 'trades',
    name: 'Skilled Trades',
    description: 'Careers requiring specialized technical skills and hands-on work.'
  },
  {
    id: 'science',
    name: 'Science & Research',
    description: 'Careers focused on scientific inquiry, experimentation, and discovery.'
  },
  {
    id: 'social-service',
    name: 'Social Services',
    description: 'Careers focused on helping people and addressing social needs and issues.'
  },
  {
    id: 'law',
    name: 'Law & Public Safety',
    description: 'Careers in legal services, public safety, and security.'
  },
  {
    id: 'environment',
    name: 'Environmental',
    description: 'Careers focused on environmental protection, conservation, and sustainability.'
  },
  {
    id: 'sales',
    name: 'Sales & Marketing',
    description: 'Careers focused on promoting and selling products or services.'
  }
];