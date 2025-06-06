interface PathwayStage {
  title: string;
  timeline: string;
  description: string;
  requirements?: string[];
}

interface PathwayOutcome {
  role: string;
  salary: number;
}

export interface Pathway {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: string;
  description: string;
  stages: PathwayStage[];
  outcomes: PathwayOutcome[];
}

export const pathways: Pathway[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    subtitle: 'Building digital solutions through programming',
    category: 'technology',
    icon: 'BookOpen',
    description: 'This pathway prepares you for careers in software development, web development, mobile app development, and related fields. Software development is a growing field with high demand and competitive salaries.',
    stages: [
      {
        title: 'High School Preparation',
        timeline: 'Grades 9-12',
        description: 'Focus on building a strong foundation in mathematics and computer science principles.',
        requirements: [
          'Take AP Computer Science or programming courses if available',
          'Participate in coding clubs or competitions',
          'Learn a programming language (Python, JavaScript) through online courses',
          'Complete personal coding projects for your portfolio'
        ]
      },
      {
        title: 'College/University Education',
        timeline: '4 years',
        description: 'Pursue a bachelor\'s degree in Computer Science, Software Engineering, or a related field.',
        requirements: [
          'Core computer science courses (algorithms, data structures)',
          'Software engineering principles',
          'Web and mobile development courses',
          'Internships or co-op experiences',
          'Capstone projects'
        ]
      },
      {
        title: 'Alternative: Coding Bootcamp',
        timeline: '3-6 months',
        description: 'Intensive, focused training on practical programming skills.',
        requirements: [
          'Full-time or part-time coding bootcamp',
          'Focus on web or mobile development',
          'Build a portfolio of projects',
          'Network with industry professionals'
        ]
      },
      {
        title: 'Entry-Level Position',
        timeline: '1-2 years',
        description: 'Gain practical experience through an entry-level role as a junior developer or software engineer.',
        requirements: [
          'Apply programming skills to real-world problems',
          'Work in collaborative development teams',
          'Learn industry best practices',
          'Build professional network'
        ]
      },
      {
        title: 'Continued Learning & Specialization',
        timeline: 'Ongoing',
        description: 'Technology changes rapidly, requiring continuous learning and potentially specializing in specific areas.',
        requirements: [
          'Stay updated with new technologies and frameworks',
          'Pursue certifications in specialized areas',
          'Contribute to open source projects',
          'Consider graduate education for advanced positions'
        ]
      }
    ],
    outcomes: [
      {
        role: 'Software Developer',
        salary: 110000
      },
      {
        role: 'Web Developer',
        salary: 85000
      },
      {
        role: 'Mobile App Developer',
        salary: 95000
      },
      {
        role: 'DevOps Engineer',
        salary: 115000
      },
      {
        role: 'Software Architect',
        salary: 140000
      }
    ]
  },
  {
    id: 'healthcare-nursing',
    title: 'Nursing & Healthcare',
    subtitle: 'Providing patient care and promoting health',
    category: 'healthcare',
    icon: 'GraduationCap',
    description: 'This pathway prepares you for a career in nursing and other healthcare professions, focusing on patient care, medical knowledge, and healthcare systems.',
    stages: [
      {
        title: 'High School Preparation',
        timeline: 'Grades 9-12',
        description: 'Build a strong foundation in science and develop interpersonal skills.',
        requirements: [
          'Take biology, chemistry, and anatomy courses',
          'Volunteer at hospitals or healthcare facilities',
          'Join health occupation student organizations',
          'Consider a CNA (Certified Nursing Assistant) certification'
        ]
      },
      {
        title: 'Nursing Education Options',
        timeline: '2-4 years',
        description: 'Choose from several educational paths depending on career goals.',
        requirements: [
          'Associate Degree in Nursing (ADN): 2 years',
          'Bachelor of Science in Nursing (BSN): 4 years',
          'Accelerated BSN programs for those with prior degrees',
          'Clinical rotations in various healthcare settings'
        ]
      },
      {
        title: 'Licensure',
        timeline: 'Post-graduation',
        description: 'Obtain required nursing license to practice professionally.',
        requirements: [
          'Pass the NCLEX-RN examination',
          'Apply for state nursing license',
          'Complete background checks as required'
        ]
      },
      {
        title: 'Entry-Level Position',
        timeline: '1-2 years',
        description: 'Gain practical experience in a healthcare setting as a registered nurse.',
        requirements: [
          'Apply nursing knowledge in clinical settings',
          'Develop patient care and communication skills',
          'Learn to work within healthcare teams',
          'Begin to identify areas of interest for specialization'
        ]
      },
      {
        title: 'Specialization & Advanced Practice',
        timeline: 'Varies',
        description: 'Pursue specialized certifications or advanced degrees for career growth.',
        requirements: [
          'Certifications in specialized areas (e.g., ICU, Emergency, Pediatrics)',
          'Consider Master of Science in Nursing (MSN) for advanced practice roles',
          'Potential Doctor of Nursing Practice (DNP) for leadership positions',
          'Continuing education to maintain licensure'
        ]
      }
    ],
    outcomes: [
      {
        role: 'Registered Nurse',
        salary: 75000
      },
      {
        role: 'Nurse Practitioner',
        salary: 115000
      },
      {
        role: 'Nurse Educator',
        salary: 80000
      },
      {
        role: 'Clinical Nurse Specialist',
        salary: 90000
      },
      {
        role: 'Nurse Manager',
        salary: 95000
      }
    ]
  },
  {
    id: 'business-management',
    title: 'Business & Management',
    subtitle: 'Leading organizations and driving growth',
    category: 'business',
    icon: 'Briefcase',
    description: 'This pathway prepares you for careers in business management, finance, marketing, and entrepreneurship. These fields offer diverse opportunities across industries and organization types.',
    stages: [
      {
        title: 'High School Preparation',
        timeline: 'Grades 9-12',
        description: 'Develop foundational business knowledge and leadership skills.',
        requirements: [
          'Take business, economics, and mathematics courses',
          'Participate in business clubs like DECA or FBLA',
          'Develop public speaking and presentation skills',
          'Consider part-time jobs or internships in business settings'
        ]
      },
      {
        title: 'College/University Education',
        timeline: '4 years',
        description: 'Pursue a bachelor\'s degree in Business Administration, Finance, Marketing, or related field.',
        requirements: [
          'Core business courses (accounting, management, marketing, finance)',
          'Internships with businesses or organizations',
          'Participation in business case competitions',
          'Networking and professional development opportunities'
        ]
      },
      {
        title: 'Alternative: Associate Degree',
        timeline: '2 years',
        description: 'Faster entry into the workforce with an Associate Degree in Business.',
        requirements: [
          'Core business fundamentals',
          'Internship or practical experience',
          'Option to transfer to 4-year degree later'
        ]
      },
      {
        title: 'Entry-Level Position',
        timeline: '1-3 years',
        description: 'Gain practical business experience through entry-level roles.',
        requirements: [
          'Positions like management trainee, business analyst, marketing assistant',
          'Develop professional skills and industry knowledge',
          'Build a network of professional contacts',
          'Begin identifying career specialization'
        ]
      },
      {
        title: 'Advanced Education & Specialization',
        timeline: 'Varies',
        description: 'Pursue advanced degrees or certifications for career advancement.',
        requirements: [
          'Consider MBA or specialized master\'s degree',
          'Obtain industry certifications (PMP, CFA, etc.)',
          'Develop leadership and management skills',
          'Gain experience managing teams or projects'
        ]
      }
    ],
    outcomes: [
      {
        role: 'Business Manager',
        salary: 85000
      },
      {
        role: 'Marketing Manager',
        salary: 90000
      },
      {
        role: 'Financial Analyst',
        salary: 82000
      },
      {
        role: 'Human Resources Manager',
        salary: 88000
      },
      {
        role: 'Management Consultant',
        salary: 105000
      }
    ]
  }
];