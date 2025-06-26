import React, { useState } from 'react';
import { BarChart3, TrendingUp, Award, Calendar, Clock, Target, BookOpen, Star, ChevronRight, Trophy, Zap, CheckCircle, ArrowUp, ArrowDown } from 'lucide-react';

const Progress: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('all');

  // Mock progress data with more comprehensive metrics
  const overallStats = {
    totalAssessments: 4,
    completedAssessments: 2,
    totalCareersExplored: 12,
    totalHours: 8.5,
    averageScore: 87,
    streak: 5,
    achievements: 6,
    goalsCompleted: 1,
    totalGoals: 3
  };

  const assessmentProgress = [
    {
      name: 'Personality Assessment',
      completed: true,
      score: 92,
      completedDate: '2024-01-10',
      timeSpent: '25 min',
      insights: 'Strong analytical and creative traits'
    },
    {
      name: 'Skills Assessment',
      completed: true,
      score: 85,
      completedDate: '2024-01-12',
      timeSpent: '30 min',
      insights: 'Excellent problem-solving abilities'
    },
    {
      name: 'Interest Inventory',
      completed: false,
      score: null,
      completedDate: null,
      timeSpent: null,
      insights: null
    },
    {
      name: 'Values Assessment',
      completed: false,
      score: null,
      completedDate: null,
      timeSpent: null,
      insights: null
    }
  ];

  const careerExplorationData = [
    {
      category: 'Technology',
      careersViewed: 5,
      timeSpent: '2.5 hours',
      saved: 2,
      color: 'bg-blue-500'
    },
    {
      category: 'Healthcare',
      careersViewed: 3,
      timeSpent: '1.8 hours',
      saved: 1,
      color: 'bg-green-500'
    },
    {
      category: 'Engineering',
      careersViewed: 4,
      timeSpent: '2.2 hours',
      saved: 2,
      color: 'bg-purple-500'
    }
  ];

  const recentAchievements = [
    {
      id: 1,
      title: 'Assessment Pioneer',
      description: 'Completed your first personality assessment',
      icon: '🎯',
      date: '2 days ago',
      color: 'bg-blue-100 text-blue-800',
      points: 100
    },
    {
      id: 2,
      title: 'Career Explorer',
      description: 'Explored 10+ different career paths',
      icon: '🗺️',
      date: '5 days ago',
      color: 'bg-green-100 text-green-800',
      points: 150
    },
    {
      id: 3,
      title: 'Goal Setter',
      description: 'Created your first career goal',
      icon: '🎯',
      date: '1 week ago',
      color: 'bg-purple-100 text-purple-800',
      points: 75
    },
    {
      id: 4,
      title: 'Consistent Learner',
      description: '5-day learning streak',
      icon: '🔥',
      date: '1 week ago',
      color: 'bg-orange-100 text-orange-800',
      points: 200
    }
  ];

  const weeklyActivity = [
    { day: 'Mon', assessments: 1, exploration: 2, goals: 0 },
    { day: 'Tue', assessments: 0, exploration: 1, goals: 1 },
    { day: 'Wed', assessments: 1, exploration: 3, goals: 0 },
    { day: 'Thu', assessments: 0, exploration: 1, goals: 0 },
    { day: 'Fri', assessments: 0, exploration: 2, goals: 1 },
    { day: 'Sat', assessments: 0, exploration: 3, goals: 0 },
    { day: 'Sun', assessments: 0, exploration: 0, goals: 1 }
  ];

  const goals = [
    {
      id: 1,
      title: 'Complete all career assessments',
      progress: 50,
      deadline: '2024-01-25',
      status: 'on-track',
      category: 'Assessment'
    },
    {
      id: 2,
      title: 'Research 5 engineering careers',
      progress: 80,
      deadline: '2024-01-20',
      status: 'ahead',
      category: 'Exploration'
    },
    {
      id: 3,
      title: 'Create educational pathway plan',
      progress: 20,
      deadline: '2024-02-01',
      status: 'on-track',
      category: 'Planning'
    }
  ];

  const insights = [
    {
      type: 'strength',
      title: 'Strong STEM Alignment',
      description: 'Your assessment results show excellent alignment with Science, Technology, Engineering, and Mathematics careers.',
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      color: 'bg-green-50 border-green-200'
    },
    {
      type: 'opportunity',
      title: 'Explore Creative Fields',
      description: 'Consider exploring careers that combine your analytical skills with creative expression.',
      icon: <Star className="h-5 w-5 text-blue-600" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      type: 'recommendation',
      title: 'Complete Interest Inventory',
      description: 'Finishing your interest assessment will provide more personalized career recommendations.',
      icon: <Target className="h-5 w-5 text-purple-600" />,
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const maxActivity = Math.max(...weeklyActivity.map(day => 
    day.assessments + day.exploration + day.goals
  ));

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Career Journey Progress</h1>
          <p className="text-gray-600">Track your assessments, exploration, and goal achievement</p>
        </div>

        {/* Overall Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {overallStats.completedAssessments}/{overallStats.totalAssessments}
                </div>
                <div className="text-sm text-gray-500">Assessments</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(overallStats.completedAssessments / overallStats.totalAssessments) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{overallStats.totalCareersExplored}</div>
                <div className="text-sm text-gray-500">Careers Explored</div>
              </div>
            </div>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>+3 this week</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {overallStats.goalsCompleted}/{overallStats.totalGoals}
                </div>
                <div className="text-sm text-gray-500">Goals Achieved</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(overallStats.goalsCompleted / overallStats.totalGoals) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{overallStats.streak}</div>
                <div className="text-sm text-gray-500">Day Streak</div>
              </div>
            </div>
            <div className="flex items-center text-sm text-orange-600">
              <Trophy className="h-4 w-4 mr-1" />
              <span>Keep it up!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Assessment Progress */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Assessment Progress</h2>
              <div className="space-y-4">
                {assessmentProgress.map((assessment, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          assessment.completed ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {assessment.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{assessment.name}</h3>
                          {assessment.completed && (
                            <p className="text-sm text-gray-500">
                              Completed {assessment.completedDate} • {assessment.timeSpent}
                            </p>
                          )}
                        </div>
                      </div>
                      {assessment.completed && (
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{assessment.score}%</div>
                          <div className="text-xs text-gray-500">Score</div>
                        </div>
                      )}
                    </div>
                    {assessment.insights && (
                      <div className="bg-blue-50 p-3 rounded-md">
                        <p className="text-sm text-blue-800">{assessment.insights}</p>
                      </div>
                    )}
                    {!assessment.completed && (
                      <button className="mt-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        Start Assessment →
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Exploration */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Career Exploration</h2>
              <div className="space-y-4">
                {careerExplorationData.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{category.category}</h3>
                        <p className="text-sm text-gray-500">{category.timeSpent} spent exploring</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{category.careersViewed}</div>
                      <div className="text-xs text-gray-500">{category.saved} saved</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Weekly Activity</h2>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              
              <div className="grid grid-cols-7 gap-4">
                {weeklyActivity.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                    <div className="bg-gray-100 rounded-lg p-2 h-24 flex flex-col justify-end">
                      {day.assessments > 0 && (
                        <div 
                          className="bg-blue-500 rounded mb-1"
                          style={{ height: `${(day.assessments / maxActivity) * 60}px` }}
                          title={`${day.assessments} assessments`}
                        ></div>
                      )}
                      {day.exploration > 0 && (
                        <div 
                          className="bg-green-500 rounded mb-1"
                          style={{ height: `${(day.exploration / maxActivity) * 60}px` }}
                          title={`${day.exploration} explorations`}
                        ></div>
                      )}
                      {day.goals > 0 && (
                        <div 
                          className="bg-purple-500 rounded"
                          style={{ height: `${(day.goals / maxActivity) * 60}px` }}
                          title={`${day.goals} goals`}
                        ></div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {day.assessments + day.exploration + day.goals} total
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center mt-4 space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                  <span>Assessments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                  <span>Exploration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
                  <span>Goals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Goals */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Current Goals</h2>
              <div className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        goal.status === 'ahead' ? 'bg-green-100 text-green-800' :
                        goal.status === 'on-track' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {goal.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        goal.status === 'ahead' ? 'bg-green-100 text-green-800' :
                        goal.status === 'on-track' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {goal.status === 'ahead' ? 'Ahead' : goal.status === 'on-track' ? 'On Track' : 'At Risk'}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm mb-2">{goal.title}</h3>
                    <div className="mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            goal.status === 'ahead' ? 'bg-green-500' :
                            goal.status === 'on-track' ? 'bg-blue-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{goal.progress}% complete</span>
                      <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                Add New Goal
              </button>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
              <div className="space-y-4">
                {recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start">
                    <div className="text-2xl mr-3">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{achievement.title}</h3>
                      <p className="text-xs text-gray-600 mb-1">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${achievement.color}`}>
                          {achievement.date}
                        </span>
                        <span className="text-xs font-medium text-indigo-600">+{achievement.points} pts</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-indigo-600 hover:text-indigo-700 py-2 px-4 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors text-sm font-medium">
                View All Achievements
              </button>
            </div>

            {/* Insights & Recommendations */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Insights & Recommendations</h2>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className={`border rounded-lg p-4 ${insight.color}`}>
                    <div className="flex items-start">
                      <div className="mr-3 mt-0.5">{insight.icon}</div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm mb-1">{insight.title}</h3>
                        <p className="text-xs text-gray-600">{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;