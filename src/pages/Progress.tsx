import React, { useState } from 'react';
import { BarChart3, TrendingUp, Award, Calendar, Clock, Target, BookOpen, Star } from 'lucide-react';

const Progress: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  // Mock progress data
  const overallStats = {
    totalLessons: 45,
    completedLessons: 32,
    totalHours: 28.5,
    averageScore: 87,
    streak: 12,
    achievements: 8
  };

  const subjectProgress = [
    {
      subject: 'Physics',
      icon: '⚛️',
      color: 'bg-blue-500',
      progress: 75,
      lessonsCompleted: 18,
      totalLessons: 24,
      averageScore: 89,
      timeSpent: '12.5 hours',
      lastActivity: '2 hours ago'
    },
    {
      subject: 'Chemistry',
      icon: '🧪',
      color: 'bg-green-500',
      progress: 60,
      lessonsCompleted: 9,
      totalLessons: 15,
      averageScore: 82,
      timeSpent: '8.2 hours',
      lastActivity: '1 day ago'
    },
    {
      subject: 'Mathematics',
      icon: '📐',
      color: 'bg-purple-500',
      progress: 45,
      lessonsCompleted: 5,
      totalLessons: 11,
      averageScore: 91,
      timeSpent: '7.8 hours',
      lastActivity: '3 days ago'
    }
  ];

  const recentAchievements = [
    {
      id: 1,
      title: 'Physics Master',
      description: 'Completed 15 physics lessons',
      icon: '🏆',
      date: '2 days ago',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 2,
      title: 'Perfect Score',
      description: 'Scored 100% on a practice test',
      icon: '⭐',
      date: '5 days ago',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 3,
      title: 'Study Streak',
      description: '10 days of continuous learning',
      icon: '🔥',
      date: '1 week ago',
      color: 'bg-red-100 text-red-800'
    },
    {
      id: 4,
      title: 'Chemistry Explorer',
      description: 'Started learning chemistry',
      icon: '🧪',
      date: '2 weeks ago',
      color: 'bg-green-100 text-green-800'
    }
  ];

  const weeklyActivity = [
    { day: 'Mon', lessons: 3, hours: 2.5 },
    { day: 'Tue', lessons: 2, hours: 1.8 },
    { day: 'Wed', lessons: 4, hours: 3.2 },
    { day: 'Thu', lessons: 1, hours: 0.8 },
    { day: 'Fri', lessons: 3, hours: 2.1 },
    { day: 'Sat', lessons: 5, hours: 4.0 },
    { day: 'Sun', lessons: 2, hours: 1.5 }
  ];

  const goals = [
    {
      id: 1,
      title: 'Complete Physics Chapter 3',
      progress: 80,
      deadline: '2024-01-15',
      status: 'on-track'
    },
    {
      id: 2,
      title: 'Score 90% on Chemistry Test',
      progress: 60,
      deadline: '2024-01-20',
      status: 'at-risk'
    },
    {
      id: 3,
      title: 'Finish Algebra Course',
      progress: 45,
      deadline: '2024-01-30',
      status: 'on-track'
    }
  ];

  const maxLessons = Math.max(...weeklyActivity.map(day => day.lessons));
  const maxHours = Math.max(...weeklyActivity.map(day => day.hours));

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h1>
          <p className="text-gray-600">Track your learning journey and achievements</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Lessons</p>
                <p className="text-2xl font-bold text-gray-900">{overallStats.completedLessons}/{overallStats.totalLessons}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hours</p>
                <p className="text-2xl font-bold text-gray-900">{overallStats.totalHours}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Score</p>
                <p className="text-2xl font-bold text-gray-900">{overallStats.averageScore}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Streak</p>
                <p className="text-2xl font-bold text-gray-900">{overallStats.streak} days</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Achievements</p>
                <p className="text-2xl font-bold text-gray-900">{overallStats.achievements}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-red-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Goals</p>
                <p className="text-2xl font-bold text-gray-900">{goals.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subject Progress */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Subject Progress</h2>
              <div className="space-y-6">
                {subjectProgress.map((subject, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">{subject.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{subject.subject}</h3>
                          <p className="text-sm text-gray-500">
                            {subject.lessonsCompleted}/{subject.totalLessons} lessons • {subject.timeSpent}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{subject.progress}%</div>
                        <div className="text-sm text-gray-500">Avg: {subject.averageScore}%</div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${subject.color} h-3 rounded-full transition-all duration-300`}
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">Last activity: {subject.lastActivity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Weekly Activity</h2>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded-lg p-2">
                        <div 
                          className="bg-blue-500 rounded transition-all duration-300"
                          style={{ 
                            height: `${(day.lessons / maxLessons) * 60}px`,
                            minHeight: '4px'
                          }}
                        ></div>
                        <div className="text-xs text-gray-600 mt-1">{day.lessons}</div>
                        <div className="text-xs text-gray-500">lessons</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-2">
                        <div 
                          className="bg-green-500 rounded transition-all duration-300"
                          style={{ 
                            height: `${(day.hours / maxHours) * 60}px`,
                            minHeight: '4px'
                          }}
                        ></div>
                        <div className="text-xs text-gray-600 mt-1">{day.hours}h</div>
                        <div className="text-xs text-gray-500">hours</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Goals */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Current Goals</h2>
              <div className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900 text-sm">{goal.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        goal.status === 'on-track' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {goal.status === 'on-track' ? 'On Track' : 'At Risk'}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            goal.status === 'on-track' ? 'bg-green-500' : 'bg-yellow-500'
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
              <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Add New Goal
              </button>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
              <div className="space-y-4">
                {recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start">
                    <div className="text-2xl mr-3">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{achievement.title}</h3>
                      <p className="text-xs text-gray-600 mb-1">{achievement.description}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${achievement.color}`}>
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-700 py-2 px-4 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                View All Achievements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;