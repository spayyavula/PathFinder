import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, BookOpen, Clock, Users, Star, ChevronRight, Filter } from 'lucide-react';

const SubjectDetail: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Mock data - in a real app, this would come from an API
  const subjectData = {
    physics: {
      name: 'Physics',
      description: 'Master the fundamental laws that govern our universe through interactive lessons and practical examples.',
      icon: '⚛️',
      color: 'from-blue-500 to-blue-600',
      totalLessons: 156,
      totalDuration: '45 hours',
      students: '125K',
      rating: 4.8,
      chapters: [
        {
          id: 'mechanics',
          title: 'Classical Mechanics',
          description: 'Study motion, forces, and energy in the macroscopic world',
          lessons: 24,
          duration: '8 hours',
          level: 'Beginner',
          topics: [
            { id: 'kinematics', title: 'Kinematics', duration: '45 min', completed: false },
            { id: 'dynamics', title: 'Dynamics and Forces', duration: '60 min', completed: false },
            { id: 'energy', title: 'Work and Energy', duration: '50 min', completed: false },
            { id: 'momentum', title: 'Momentum and Collisions', duration: '55 min', completed: false }
          ]
        },
        {
          id: 'thermodynamics',
          title: 'Thermodynamics',
          description: 'Explore heat, temperature, and energy transfer',
          lessons: 18,
          duration: '6 hours',
          level: 'Intermediate',
          topics: [
            { id: 'heat-temp', title: 'Heat and Temperature', duration: '40 min', completed: false },
            { id: 'laws-thermo', title: 'Laws of Thermodynamics', duration: '65 min', completed: false },
            { id: 'heat-engines', title: 'Heat Engines', duration: '50 min', completed: false }
          ]
        },
        {
          id: 'electromagnetism',
          title: 'Electromagnetism',
          description: 'Understand electric and magnetic phenomena',
          lessons: 32,
          duration: '12 hours',
          level: 'Intermediate',
          topics: [
            { id: 'electric-fields', title: 'Electric Fields and Forces', duration: '55 min', completed: false },
            { id: 'magnetic-fields', title: 'Magnetic Fields', duration: '60 min', completed: false },
            { id: 'electromagnetic-induction', title: 'Electromagnetic Induction', duration: '70 min', completed: false }
          ]
        },
        {
          id: 'quantum',
          title: 'Quantum Physics',
          description: 'Dive into the strange world of quantum mechanics',
          lessons: 28,
          duration: '10 hours',
          level: 'Advanced',
          topics: [
            { id: 'wave-particle', title: 'Wave-Particle Duality', duration: '50 min', completed: false },
            { id: 'uncertainty', title: 'Uncertainty Principle', duration: '45 min', completed: false },
            { id: 'quantum-states', title: 'Quantum States', duration: '60 min', completed: false }
          ]
        }
      ]
    },
    chemistry: {
      name: 'Chemistry',
      description: 'Explore the composition, structure, and properties of matter and the changes it undergoes.',
      icon: '🧪',
      color: 'from-green-500 to-green-600',
      totalLessons: 142,
      totalDuration: '38 hours',
      students: '98K',
      rating: 4.7,
      chapters: [
        {
          id: 'atomic-structure',
          title: 'Atomic Structure',
          description: 'Understanding atoms, electrons, and the periodic table',
          lessons: 20,
          duration: '7 hours',
          level: 'Beginner',
          topics: [
            { id: 'atoms', title: 'Atoms and Elements', duration: '40 min', completed: false },
            { id: 'periodic-table', title: 'Periodic Table', duration: '50 min', completed: false },
            { id: 'electron-config', title: 'Electron Configuration', duration: '45 min', completed: false }
          ]
        },
        {
          id: 'chemical-bonding',
          title: 'Chemical Bonding',
          description: 'How atoms combine to form compounds',
          lessons: 18,
          duration: '6 hours',
          level: 'Beginner',
          topics: [
            { id: 'ionic-bonding', title: 'Ionic Bonding', duration: '35 min', completed: false },
            { id: 'covalent-bonding', title: 'Covalent Bonding', duration: '40 min', completed: false },
            { id: 'molecular-geometry', title: 'Molecular Geometry', duration: '45 min', completed: false }
          ]
        },
        {
          id: 'organic-chemistry',
          title: 'Organic Chemistry',
          description: 'Study of carbon-based compounds',
          lessons: 35,
          duration: '12 hours',
          level: 'Intermediate',
          topics: [
            { id: 'hydrocarbons', title: 'Hydrocarbons', duration: '60 min', completed: false },
            { id: 'functional-groups', title: 'Functional Groups', duration: '55 min', completed: false },
            { id: 'reactions', title: 'Organic Reactions', duration: '70 min', completed: false }
          ]
        }
      ]
    },
    mathematics: {
      name: 'Mathematics',
      description: 'Build a strong foundation in mathematical concepts from basic algebra to advanced calculus.',
      icon: '📐',
      color: 'from-purple-500 to-purple-600',
      totalLessons: 198,
      totalDuration: '52 hours',
      students: '156K',
      rating: 4.9,
      chapters: [
        {
          id: 'algebra',
          title: 'Algebra',
          description: 'Master algebraic expressions, equations, and functions',
          lessons: 32,
          duration: '10 hours',
          level: 'Beginner',
          topics: [
            { id: 'linear-equations', title: 'Linear Equations', duration: '45 min', completed: false },
            { id: 'quadratic-equations', title: 'Quadratic Equations', duration: '50 min', completed: false },
            { id: 'polynomials', title: 'Polynomials', duration: '55 min', completed: false }
          ]
        },
        {
          id: 'geometry',
          title: 'Geometry',
          description: 'Explore shapes, angles, and spatial relationships',
          lessons: 28,
          duration: '9 hours',
          level: 'Beginner',
          topics: [
            { id: 'basic-shapes', title: 'Basic Shapes and Angles', duration: '40 min', completed: false },
            { id: 'triangles', title: 'Triangles and Congruence', duration: '50 min', completed: false },
            { id: 'circles', title: 'Circles and Area', duration: '45 min', completed: false }
          ]
        },
        {
          id: 'calculus',
          title: 'Calculus',
          description: 'Study of continuous change and motion',
          lessons: 45,
          duration: '15 hours',
          level: 'Intermediate',
          topics: [
            { id: 'limits', title: 'Limits and Continuity', duration: '60 min', completed: false },
            { id: 'derivatives', title: 'Derivatives', duration: '70 min', completed: false },
            { id: 'integrals', title: 'Integrals', duration: '75 min', completed: false }
          ]
        }
      ]
    }
  };

  const currentSubject = subjectData[subject as keyof typeof subjectData];

  if (!currentSubject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subject Not Found</h1>
          <Link to="/subjects" className="text-blue-600 hover:text-blue-700">
            Back to Subjects
          </Link>
        </div>
      </div>
    );
  }

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const topics = [...new Set(currentSubject.chapters.map(chapter => chapter.title))];

  const filteredChapters = currentSubject.chapters.filter(chapter => {
    const matchesLevel = selectedLevel === '' || chapter.level === selectedLevel;
    const matchesTopic = selectedTopic === '' || chapter.title === selectedTopic;
    return matchesLevel && matchesTopic;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${currentSubject.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <span className="text-6xl mr-4">{currentSubject.icon}</span>
                <div>
                  <h1 className="text-4xl font-bold mb-2">{currentSubject.name}</h1>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-300 mr-1" />
                    <span className="font-semibold mr-4">{currentSubject.rating}</span>
                    <Users className="h-5 w-5 mr-1" />
                    <span>{currentSubject.students} students</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-blue-100 mb-6">{currentSubject.description}</p>
              <div className="flex flex-wrap gap-6 text-blue-100">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>{currentSubject.totalLessons} lessons</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{currentSubject.totalDuration} total</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center">
                <Play className="h-6 w-6 mr-2" />
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center text-gray-700">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                <option value="">All Topics</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="space-y-6">
          {filteredChapters.map((chapter, index) => (
            <div key={chapter.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{chapter.title}</h3>
                      <p className="text-gray-600">{chapter.description}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    chapter.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    chapter.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {chapter.level}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-6">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{chapter.lessons} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{chapter.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {chapter.topics.map((topic, topicIndex) => (
                    <Link
                      key={topic.id}
                      to={`/learn/${subject}/${topic.id}`}
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mr-4 group-hover:border-blue-500">
                          {topic.completed ? (
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          ) : (
                            <Play className="h-4 w-4 text-gray-400 group-hover:text-blue-500" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-700">{topic.title}</h4>
                          <p className="text-sm text-gray-500">{topic.duration}</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredChapters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No chapters found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectDetail;