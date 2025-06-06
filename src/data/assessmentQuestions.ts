export interface AssessmentQuestion {
  id: number;
  question: string;
  categories: string[]; // Category IDs
  weight: number; // How heavily this question influences the result
}

export const questions: AssessmentQuestion[] = [
  {
    id: 1,
    question: "I enjoy solving complex problems and puzzles.",
    categories: ['analytical', 'technology', 'engineering'],
    weight: 1.0
  },
  {
    id: 2,
    question: "I like helping others and making a difference in people's lives.",
    categories: ['healthcare', 'education', 'social-service'],
    weight: 1.0
  },
  {
    id: 3,
    question: "I am creative and enjoy expressing myself through art, music, or writing.",
    categories: ['creative', 'arts', 'design'],
    weight: 1.0
  },
  {
    id: 4,
    question: "I prefer working with clear rules and procedures.",
    categories: ['business', 'finance', 'law'],
    weight: 1.0
  },
  {
    id: 5,
    question: "I enjoy working with my hands and building or fixing things.",
    categories: ['trades', 'engineering', 'construction'],
    weight: 1.0
  },
  {
    id: 6,
    question: "I like analyzing data and finding patterns.",
    categories: ['analytical', 'technology', 'finance'],
    weight: 1.0
  },
  {
    id: 7,
    question: "I enjoy working in teams and collaborating with others.",
    categories: ['business', 'healthcare', 'education'],
    weight: 0.8
  },
  {
    id: 8,
    question: "I prefer working independently with minimal supervision.",
    categories: ['arts', 'technology', 'trades'],
    weight: 0.8
  },
  {
    id: 9,
    question: "I am good at persuading others and enjoy sales or marketing activities.",
    categories: ['business', 'sales', 'entrepreneurship'],
    weight: 1.0
  },
  {
    id: 10,
    question: "I enjoy scientific experiments and understanding how things work.",
    categories: ['science', 'healthcare', 'engineering'],
    weight: 1.0
  },
  {
    id: 11,
    question: "I like planning and organizing events or projects.",
    categories: ['business', 'management', 'education'],
    weight: 1.0
  },
  {
    id: 12,
    question: "I enjoy working outdoors and with nature.",
    categories: ['environment', 'agriculture', 'construction'],
    weight: 1.0
  },
  {
    id: 13,
    question: "I am fascinated by technology and enjoy using computers.",
    categories: ['technology', 'engineering', 'design'],
    weight: 1.0
  },
  {
    id: 14,
    question: "I enjoy public speaking and presenting information to groups.",
    categories: ['education', 'business', 'law'],
    weight: 1.0
  },
  {
    id: 15,
    question: "I am patient and enjoy tasks that require attention to detail.",
    categories: ['healthcare', 'finance', 'trades'],
    weight: 0.8
  }
];