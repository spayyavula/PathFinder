import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, BookOpen, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const LessonDetail: React.FC = () => {
  const { subject, topic } = useParams<{ subject: string; topic: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(2700); // 45 minutes in seconds
  const [activeTab, setActiveTab] = useState('overview');

  // Mock lesson data
  const lessonData = {
    title: 'Introduction to Kinematics',
    description: 'Learn the fundamental concepts of motion, including position, velocity, and acceleration.',
    duration: '45 min',
    difficulty: 'Beginner',
    videoUrl: 'https://example.com/video.mp4',
    transcript: `
      Welcome to our lesson on kinematics. In this lesson, we'll explore the fundamental concepts of motion.
      
      Kinematics is the branch of physics that describes the motion of objects without considering the forces that cause the motion.
      
      We'll cover three key concepts:
      1. Position - where an object is located
      2. Velocity - how fast an object is moving
      3. Acceleration - how the velocity changes over time
      
      Let's start with position...
    `,
    notes: [
      'Kinematics studies motion without considering forces',
      'Position is measured relative to a reference point',
      'Velocity is the rate of change of position',
      'Acceleration is the rate of change of velocity'
    ],
    quiz: [
      {
        question: 'What is kinematics?',
        options: [
          'The study of forces',
          'The study of motion without considering forces',
          'The study of energy',
          'The study of matter'
        ],
        correct: 1
      },
      {
        question: 'What is velocity?',
        options: [
          'The position of an object',
          'The force acting on an object',
          'The rate of change of position',
          'The mass of an object'
        ],
        correct: 2
      }
    ]
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(parseInt(e.target.value));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to={`/subjects/${subject}`}
                className="flex items-center text-blue-600 hover:text-blue-700 mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back to {subject}
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{lessonData.title}</h1>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="mr-4">{lessonData.duration}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    lessonData.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    lessonData.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lessonData.difficulty}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <CheckCircle className="h-5 w-5 mr-2" />
                Mark Complete
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowRight className="h-5 w-5 mr-2" />
                Next Lesson
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {isPlaying ? (
                      <Pause className="h-10 w-10" />
                    ) : (
                      <Play className="h-10 w-10 ml-1" />
                    )}
                  </div>
                  <p className="text-lg">Video Player</p>
                  <p className="text-sm text-gray-300">Click to {isPlaying ? 'pause' : 'play'}</p>
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="bg-gray-800 p-4">
                <div className="flex items-center space-x-4">
                  <button className="text-white hover:text-blue-400">
                    <SkipBack className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={togglePlay}
                    className="text-white hover:text-blue-400"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </button>
                  <button className="text-white hover:text-blue-400">
                    <SkipForward className="h-6 w-6" />
                  </button>
                  
                  <div className="flex-1 flex items-center space-x-2">
                    <span className="text-white text-sm">{formatTime(currentTime)}</span>
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      onChange={handleSeek}
                      className="flex-1 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-white text-sm">{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Content Tabs */}
            <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {[
                    { id: 'overview', name: 'Overview' },
                    { id: 'transcript', name: 'Transcript' },
                    { id: 'notes', name: 'Notes' },
                    { id: 'quiz', name: 'Quiz' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 text-sm font-medium border-b-2 ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Lesson Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{lessonData.description}</p>
                  </div>
                )}

                {activeTab === 'transcript' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Transcript</h3>
                    <div className="prose max-w-none">
                      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {lessonData.transcript}
                      </pre>
                    </div>
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Notes</h3>
                    <ul className="space-y-3">
                      {lessonData.notes.map((note, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'quiz' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Quiz</h3>
                    <div className="space-y-6">
                      {lessonData.quiz.map((question, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-3">
                            {index + 1}. {question.question}
                          </h4>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <label key={optionIndex} className="flex items-center">
                                <input
                                  type="radio"
                                  name={`question-${index}`}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="ml-3 text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Submit Quiz
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Lesson Progress</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Chapter Progress</span>
                    <span>3/8 lessons</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '37.5%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Lessons */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Up Next</h3>
              <div className="space-y-3">
                {[
                  { title: 'Dynamics and Forces', duration: '60 min', completed: false },
                  { title: 'Work and Energy', duration: '50 min', completed: false },
                  { title: 'Momentum and Collisions', duration: '55 min', completed: false }
                ].map((lesson, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                    <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mr-3">
                      {lesson.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Play className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{lesson.title}</h4>
                      <p className="text-xs text-gray-500">{lesson.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Download PDF Notes</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Practice Problems</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Additional Reading</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;