export interface Career {
  id: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  education: string[];
  salary: number;
  outlook: 'growing' | 'stable' | 'declining';
  image?: string;
}

export const careers: Career[] = [
  {
    id: 'software-developer',
    title: 'Software Developer',
    category: 'Technology',
    description: 'Software developers design, build, and maintain computer programs. They work in various industries creating applications for computers and mobile devices.',
    skills: ['Programming', 'Problem Solving', 'Debugging', 'Teamwork', 'Communication'],
    education: ['Bachelor\'s Degree in Computer Science', 'Coding Bootcamp', 'Self-taught with portfolio'],
    salary: 110000,
    outlook: 'growing',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'registered-nurse',
    title: 'Registered Nurse',
    category: 'Healthcare',
    description: 'Registered nurses provide and coordinate patient care, educate patients about health conditions, and provide advice and emotional support.',
    skills: ['Patient Care', 'Medical Knowledge', 'Communication', 'Critical Thinking', 'Empathy'],
    education: ['Associate Degree in Nursing', 'Bachelor of Science in Nursing'],
    salary: 75000,
    outlook: 'growing',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    category: 'Engineering',
    description: 'Mechanical engineers design, develop, build, and test mechanical and thermal sensors and devices, including tools, engines, and machines.',
    skills: ['CAD Software', 'Physics', 'Mathematics', 'Problem Solving', 'Technical Writing'],
    education: ['Bachelor\'s Degree in Mechanical Engineering', 'Master\'s Degree for advanced positions'],
    salary: 90000,
    outlook: 'stable',
    image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'accountant',
    title: 'Accountant',
    category: 'Business',
    description: 'Accountants prepare and examine financial records, ensuring accuracy and compliance with regulations. They also assess financial operations and work to ensure organizations run efficiently.',
    skills: ['Mathematics', 'Attention to Detail', 'Critical Thinking', 'Organization', 'Communication'],
    education: ['Bachelor\'s Degree in Accounting', 'CPA Certification'],
    salary: 73000,
    outlook: 'stable',
    image: 'https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    category: 'Arts',
    description: 'Graphic designers create visual content to communicate messages. They design layouts for websites, advertisements, brochures, magazines, corporate reports, and more.',
    skills: ['Creativity', 'Adobe Creative Suite', 'Typography', 'Color Theory', 'Communication'],
    education: ['Bachelor\'s Degree in Graphic Design', 'Associate\'s Degree with strong portfolio'],
    salary: 53000,
    outlook: 'stable',
    image: 'https://images.pexels.com/photos/5697252/pexels-photo-5697252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Technology',
    description: 'Data scientists collect, analyze, and interpret large datasets to help organizations make better decisions. They use statistical analysis, machine learning, and programming to extract insights from data.',
    skills: ['Statistics', 'Programming', 'Machine Learning', 'Data Visualization', 'Problem-Solving'],
    education: ['Bachelor\'s or Master\'s in Computer Science, Statistics, or related field'],
    salary: 120000,
    outlook: 'growing',
    image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    category: 'Business',
    description: 'Marketing managers plan and oversee advertising and promotional campaigns. They work to generate interest in products or services and increase brand awareness.',
    skills: ['Creativity', 'Communication', 'Analytics', 'Strategic Planning', 'Project Management'],
    education: ['Bachelor\'s Degree in Marketing or Business', 'MBA for senior positions'],
    salary: 87000,
    outlook: 'growing',
    image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'teacher',
    title: 'Teacher',
    category: 'Education',
    description: 'Teachers instruct students in a variety of subjects and support their social and academic development. They create lesson plans, evaluate student progress, and maintain classroom discipline.',
    skills: ['Communication', 'Patience', 'Creativity', 'Organization', 'Adaptability'],
    education: ['Bachelor\'s Degree in Education', 'Teaching Certification'],
    salary: 61000,
    outlook: 'stable',
    image: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'civil-engineer',
    title: 'Civil Engineer',
    category: 'Engineering',
    description: 'Civil engineers design, build, and maintain infrastructure projects like roads, buildings, bridges, dams, and water supply systems. They ensure projects meet safety standards and environmental regulations.',
    skills: ['CAD Software', 'Mathematics', 'Problem-Solving', 'Project Management', 'Technical Writing'],
    education: ['Bachelor\'s Degree in Civil Engineering', 'Professional Engineer (PE) license'],
    salary: 88000,
    outlook: 'growing',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];