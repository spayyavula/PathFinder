export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  source: string;
  image?: string;
}

export const resources: Resource[] = [
  {
    id: '1',
    title: 'College Board - Big Future',
    description: 'Comprehensive planning tools for college preparation, including scholarship searches, college matching, and career exploration.',
    category: 'College Planning',
    tags: ['College', 'Scholarships', 'Applications'],
    url: 'https://bigfuture.collegeboard.org/',
    source: 'College Board',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'Khan Academy - College Admissions',
    description: 'Free resources for college admissions, including test prep, essays, and application guidance.',
    category: 'College Planning',
    tags: ['College', 'Test Prep', 'Free'],
    url: 'https://www.khanacademy.org/college-careers-more',
    source: 'Khan Academy',
    image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'O*NET Online',
    description: 'The nation\'s primary source of occupational information, with detailed descriptions of occupations, skills, and education requirements.',
    category: 'Career Information',
    tags: ['Career Database', 'Skills', 'Job Requirements'],
    url: 'https://www.onetonline.org/',
    source: 'U.S. Department of Labor',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'LinkedIn Learning Career Development',
    description: 'Courses on resume writing, interviewing skills, networking, and other career development topics.',
    category: 'Career Development',
    tags: ['Skills', 'Resume', 'Interview'],
    url: 'https://www.linkedin.com/learning/',
    source: 'LinkedIn',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'CareerOneStop',
    description: 'Career exploration tools, including skills assessment, career videos, and job search resources.',
    category: 'Career Information',
    tags: ['Career Exploration', 'Skills Assessment', 'Government'],
    url: 'https://www.careeronestop.org/',
    source: 'U.S. Department of Labor',
    image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '6',
    title: 'Udacity - Tech Career Paths',
    description: 'Online courses and nanodegree programs designed to prepare students for careers in technology.',
    category: 'Technology Education',
    tags: ['Coding', 'Technology', 'Online Learning'],
    url: 'https://www.udacity.com/',
    source: 'Udacity',
    image: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '7',
    title: 'Coursera - Career Academy',
    description: 'Courses and certificate programs from top universities and companies to build career skills.',
    category: 'Professional Development',
    tags: ['Courses', 'Certificates', 'Skills'],
    url: 'https://www.coursera.org/career-academy',
    source: 'Coursera',
    image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '8',
    title: 'Indeed Career Guide',
    description: 'Articles and resources on resume writing, job searching, interviewing, and career development.',
    category: 'Career Development',
    tags: ['Job Search', 'Resume', 'Interview'],
    url: 'https://www.indeed.com/career-advice',
    source: 'Indeed',
    image: 'https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '9',
    title: 'Federal Student Aid',
    description: 'Information about financial aid options for college, including loans, grants, and work-study programs.',
    category: 'Financial Aid',
    tags: ['College', 'Financial Aid', 'Scholarships'],
    url: 'https://studentaid.gov/',
    source: 'U.S. Department of Education',
    image: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];