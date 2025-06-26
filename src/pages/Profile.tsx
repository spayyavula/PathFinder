import React, { useState } from 'react';
import { User, BookOpen, Target, BarChart3, Edit, Save, Calendar, CreditCard, Crown, TrendingUp, Award } from 'lucide-react';
import { useSubscription } from '../hooks/useSubscription';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sarah Johnson',
    grade: '11th Grade',
    school: 'Lincoln High School',
    email: 'sarah.j@example.com',
    bio: 'I\'m interested in STEM fields, especially engineering and computer science. I enjoy problem solving and working on creative projects.'
  });
  
  const { subscription, loading: subscriptionLoading } = useSubscription();
  
  // Mock saved careers for demo
  const [savedCareers, setSavedCareers] = useState([
    { id: 1, title: 'Software Developer', category: 'Technology' },
    { id: 2, title: 'Biomedical Engineer', category: 'Engineering' },
    { id: 3, title: 'UX Designer', category: 'Design' }
  ]);
  
  // Mock goals for demo
  const [goals, setGoals] = useState([
    { id: 1, title: 'Research computer science programs', completed: true, deadline: '2023-06-30' },
    { id: 2, title: 'Complete coding bootcamp', completed: false, deadline: '2023-08-15' },
    { id: 3, title: 'Job shadow a software engineer', completed: false, deadline: '2023-09-01' }
  ]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = () => {
    // In a real app, this would save to a database
    setIsEditing(false);
  };
  
  const toggleGoalCompletion = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };
  
  const removeSavedCareer = (id: number) => {
    setSavedCareers(savedCareers.filter(career => career.id !== id));
  };

  const getSubscriptionStatus = () => {
    if (subscriptionLoading) {
      return <span className="text-gray-500">Loading...</span>;
    }
    
    if (!subscription || !subscription.subscription_status) {
      return <span className="text-gray-500">Free Plan</span>;
    }
    
    if (subscription.subscription_status === 'active') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          <Crown className="h-4 w-4 mr-1" />
          Enterprise Plan
        </span>
      );
    }
    
    return <span className="text-gray-500">Free Plan</span>;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-32 md:h-48"></div>
          
          <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
            {/* Profile photo */}
            <div className="absolute -top-16 left-4 sm:left-6 lg:left-8">
              <div className="w-32 h-32 bg-white rounded-full p-1 shadow-md">
                <div className="w-full h-full rounded-full bg-indigo-100 flex items-center justify-center">
                  <User className="h-12 w-12 text-indigo-600" />
                </div>
              </div>
            </div>
            
            {/* Edit button */}
            <div className="flex justify-end pt-4">
              {isEditing ? (
                <button
                  onClick={saveProfile}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
            
            {/* Profile info */}
            <div className="mt-8 sm:mt-12">
              {isEditing ? (
                <div className="space-y-4 max-w-2xl">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
                    <input
                      type="text"
                      name="grade"
                      id="grade"
                      value={profile.grade}
                      onChange={handleProfileChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700">School</label>
                    <input
                      type="text"
                      name="school"
                      id="school"
                      value={profile.school}
                      onChange={handleProfileChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      name="bio"
                      id="bio"
                      rows={4}
                      value={profile.bio}
                      onChange={handleProfileChange}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                  <div className="flex flex-wrap gap-4 mt-2 text-gray-700">
                    <div>{profile.grade}</div>
                    <div>•</div>
                    <div>{profile.school}</div>
                    <div>•</div>
                    <div>{profile.email}</div>
                  </div>
                  <p className="mt-4 text-gray-600">{profile.bio}</p>
                </div>
              )}
            </div>

            {/* Subscription Status */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Subscription Status</h2>
                </div>
                {getSubscriptionStatus()}
              </div>
              
              {subscription && subscription.subscription_status === 'active' && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  {subscription.current_period_end && (
                    <div>
                      <span className="font-medium">Next billing date:</span>{' '}
                      {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
                    </div>
                  )}
                  {subscription.payment_method_brand && subscription.payment_method_last4 && (
                    <div>
                      <span className="font-medium">Payment method:</span>{' '}
                      {subscription.payment_method_brand.toUpperCase()} ending in {subscription.payment_method_last4}
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-4">
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {subscription && subscription.subscription_status === 'active' ? 'Manage Subscription' : 'Upgrade Plan'}
                </Link>
              </div>
            </div>
            
            {/* Assessment Results & Saved Content Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Saved Careers */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Saved Careers</h2>
                </div>
                
                {savedCareers.length > 0 ? (
                  <ul className="space-y-3">
                    {savedCareers.map(career => (
                      <li key={career.id} className="bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
                        <div>
                          <h3 className="font-medium text-gray-900">{career.title}</h3>
                          <p className="text-sm text-gray-500">{career.category}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                            onClick={() => window.location.href = `/explore?career=${career.id}`}
                          >
                            View
                          </button>
                          <button 
                            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                            onClick={() => removeSavedCareer(career.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>You haven't saved any careers yet.</p>
                    <a href="/explore" className="mt-2 inline-block text-indigo-600 hover:text-indigo-700 font-medium">
                      Explore Careers
                    </a>
                  </div>
                )}
              </div>
              
              {/* Goals */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Career Goals</h2>
                </div>
                
                {goals.length > 0 ? (
                  <ul className="space-y-3">
                    {goals.map(goal => (
                      <li key={goal.id} className="bg-white p-3 rounded-md shadow-sm">
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => toggleGoalCompletion(goal.id)}
                            className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <div className="ml-3 flex-1">
                            <p className={`font-medium ${goal.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                              {goal.title}
                            </p>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>You haven't set any goals yet.</p>
                    <button className="mt-2 inline-block text-indigo-600 hover:text-indigo-700 font-medium">
                      Add a Goal
                    </button>
                  </div>
                )}
                
                <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Add New Goal
                </button>
              </div>
              
              {/* Activity Stats */}
              <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Your Progress</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-md shadow-sm text-center">
                    <p className="text-gray-500 text-sm">Assessment Completed</p>
                    <p className="text-3xl font-bold text-indigo-600">2/4</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm text-center">
                    <p className="text-gray-500 text-sm">Careers Explored</p>
                    <p className="text-3xl font-bold text-indigo-600">12</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm text-center">
                    <p className="text-gray-500 text-sm">Goals Completed</p>
                    <p className="text-3xl font-bold text-indigo-600">1/3</p>
                  </div>
                </div>
                
                <div className="mt-4 bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-2">Next Recommended Steps</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="h-4 w-4 text-indigo-500 mr-2">→</div>
                      Complete the skill assessment to get personalized career matches
                    </li>
                    <li className="flex items-center">
                      <div className="h-4 w-4 text-indigo-500 mr-2">→</div>
                      Explore engineering pathways based on your interests
                    </li>
                    <li className="flex items-center">
                      <div className="h-4 w-4 text-indigo-500 mr-2">→</div>
                      Set a goal related to summer internship opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;