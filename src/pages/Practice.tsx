import React, { useState } from 'react';
import { Clock, Award, Target, Play, CheckCircle, XCircle } from 'lucide-react';

const Practice: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Mock practice tests
  const practiceTests = [
    {
      id: 'physics-mechanics',
      title: 'Classical Mechanics Quiz',
      subject: 'Physics',
      difficulty: 'Beginner',
      questions: 10,
      duration: 15,
      description: 'Test your understanding of motion, forces, and energy',
      icon: '⚛️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'chemistry-atoms',
      title: 'Atomic Structure Test',
      subject: 'Chemistry',
      difficulty: 'Beginner',
      questions: 8,
      duration: 12,
      description: 'Quiz on atoms, electrons, and the periodic table',
      icon: '🧪',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'math-algebra',
      title: 'Algebra Fundamentals',
      subject: 'Mathematics',
      difficulty: 'Beginner',
      questions: 12,
      duration: 20,
      description: 'Practice solving linear and quadratic equations',
      icon: '📐',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'physics-thermo',
      title: 'Thermodynamics Challenge',
      subject: 'Physics',
      difficulty: 'Intermediate',
      questions: 15,
      duration: 25,
      description: 'Advanced problems on heat and energy transfer',
      icon: '⚛️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'chemistry-organic',
      title: 'Organic Chemistry Quiz',
      subject: 'Chemistry',
      difficulty: 'Intermediate',
      questions: 12,
      duration: 18,
      description: 'Test your knowledge of carbon compounds',
      icon: '🧪',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'math-calculus',
      title: 'Calculus Mastery Test',
      subject: 'Mathematics',
      difficulty: 'Advanced',
      questions: 20,
      duration: 35,
      description: 'Comprehensive test on derivatives and integrals',
      icon: '📐',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  // Mock questions for the active test
  const mockQuestions = [
    {
      question: "What is Newton's first law of motion?",
      options: [
        "An object at rest stays at rest unless acted upon by a force",
        "Force equals mass times acceleration",
        "For every action, there is an equal and opposite reaction",
        "Energy cannot be created or destroyed"
      ],
      correct: 0
    },
    {
      question: "What is the unit of force in the SI system?",
      options: [
        "Joule",
        "Newton",
        "Watt",
        "Pascal"
      ],
      correct: 1
    },
    {
      question: "Which of the following is a vector quantity?",
      options: [
        "Speed",
        "Mass",
        "Velocity",
        "Temperature"
      ],
      correct: 2
    }
  ];

  const subjects = ['Physics', 'Chemistry', 'Mathematics'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredTests = practiceTests.filter(test => {
    const matchesSubject = selectedSubject === '' || test.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === '' || test.difficulty === selectedDifficulty;
    return matchesSubject && matchesDifficulty;
  });

  const startTest = (testId: string) => {
    setActiveTest(testId);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (currentQuestion < mockQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === mockQuestions[index].correct) {
        correct++;
      }
    });
    return Math.round((correct / mockQuestions.length) * 100);
  };

  const resetTest = () => {
    setActiveTest(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
  };

  if (activeTest && !showResults) {
    const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;
    const question = mockQuestions[currentQuestion];

    return (
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Classical Mechanics Quiz</h1>
              <button
                onClick={resetTest}
                className="text-gray-500 hover:text-gray-700"
              >
                Exit Test
              </button>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {mockQuestions.length}</span>
              <span>Time Remaining: 12:34</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h2>
            
            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 border rounded-lg transition-all ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                    <span className="ml-2">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion === mockQuestions.length - 1 ? 'Finish Test' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = answers.filter((answer, index) => answer === mockQuestions[index].correct).length;

    return (
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-8">
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${
                score >= 80 ? 'bg-green-100' : score >= 60 ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                <Award className={`h-12 w-12 ${
                  score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'
                }`} />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Complete!</h1>
              <p className="text-gray-600">Here are your results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{score}%</div>
                <div className="text-blue-800">Overall Score</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">{correctAnswers}</div>
                <div className="text-green-800">Correct Answers</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">{mockQuestions.length - correctAnswers}</div>
                <div className="text-purple-800">Incorrect Answers</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {mockQuestions.map((question, index) => (
                <div key={index} className="text-left border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      {answers[index] === question.correct ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">{question.question}</h3>
                      <div className="text-sm">
                        <div className={`mb-1 ${answers[index] === question.correct ? 'text-green-600' : 'text-red-600'}`}>
                          Your answer: {question.options[answers[index]]}
                        </div>
                        {answers[index] !== question.correct && (
                          <div className="text-green-600">
                            Correct answer: {question.options[question.correct]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={resetTest}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Take Another Test
              </button>
              <button
                onClick={() => startTest(activeTest!)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Retake This Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Tests</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your knowledge with our comprehensive practice tests and track your progress
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center text-gray-700">
              <Target className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="">All Difficulties</option>
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Practice Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div key={test.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${test.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{test.icon}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    test.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    test.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {test.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                <p className="text-blue-100">{test.description}</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="font-semibold text-gray-900">{test.questions}</div>
                    <div className="text-sm text-gray-500">Questions</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{test.duration}</div>
                    <div className="text-sm text-gray-500">Minutes</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{test.subject}</div>
                    <div className="text-sm text-gray-500">Subject</div>
                  </div>
                </div>

                <button
                  onClick={() => startTest(test.id)}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Test
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No practice tests found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice;