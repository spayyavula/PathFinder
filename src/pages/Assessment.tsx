import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { questions } from '../data/assessmentQuestions';
import { careerCategories } from '../data/careerCategories';

const Assessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [results, setResults] = useState<{ category: string; score: number }[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    
    // Initialize scores
    careerCategories.forEach(category => {
      scores[category.id] = 0;
    });
    
    // Calculate scores based on answers
    questions.forEach((question, index) => {
      question.categories.forEach(categoryId => {
        scores[categoryId] += answers[index] * question.weight;
      });
    });
    
    // Convert to array and sort by score
    const resultsArray = careerCategories.map(category => ({
      category: category.name,
      score: scores[category.id]
    })).sort((a, b) => b.score - a.score);
    
    setResults(resultsArray);
    setIsCompleted(true);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers(Array(questions.length).fill(0));
    setResults([]);
    setIsCompleted(false);
  };

  // Progress calculation
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isCompleted ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2">
              <div 
                className="bg-indigo-600 h-2 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-8">
              <div className="mb-6">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <h2 className="text-2xl font-bold text-gray-900">{questions[currentStep].question}</h2>
              </div>

              <div className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(currentStep, value)}
                    className={`w-full flex items-center p-4 border rounded-lg transition-all ${
                      answers[currentStep] === value
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                    }`}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                      answers[currentStep] === value
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {value}
                    </div>
                    <div className="flex-1 text-left">
                      <span className="font-medium">
                        {value === 1 ? 'Strongly Disagree' :
                         value === 2 ? 'Disagree' :
                         value === 3 ? 'Neutral' :
                         value === 4 ? 'Agree' :
                         'Strongly Agree'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={answers[currentStep] === 0}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    answers[currentStep] === 0
                      ? 'bg-indigo-300 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {currentStep < questions.length - 1 ? 'Next' : 'See Results'}
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-green-100 rounded-full p-2">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Your Assessment Results</h2>
              <p className="text-gray-600 text-center mb-8">
                Based on your answers, here are the career categories that best match your interests and strengths.
              </p>
              
              <div className="space-y-6 mb-8">
                {results.slice(0, 3).map((result, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{result.category}</h3>
                    <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
                      <div 
                        className="bg-indigo-600 h-4 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(result.score / 50) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Match score: {Math.round((result.score / 50) * 100)}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={resetAssessment}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Retake Assessment
                </button>
                <button
                  onClick={() => window.location.href = '/explore'}
                  className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-md font-medium transition-colors duration-200"
                >
                  Explore Matching Careers
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;