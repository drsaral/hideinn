import React from 'react';
import TimeBlockSelector from '../components/timeline/TimeBlockSelector';
import GroupList from '../components/timeline/GroupList';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TimelinePage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-800 mb-2">Smart Timeline</h1>
          <p className="text-neutral-600">
            Customize which groups appear in each time block of your day
          </p>
        </div>

        <TimeBlockSelector />
        
        <div className="bg-white rounded-lg shadow-card p-4 mb-6">
          <h2 className="font-medium text-neutral-800 mb-4">How Smart Timeline Works</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-neutral-800">Select a time block</h3>
                <p className="text-sm text-neutral-600">
                  Choose from Morning, Afternoon, Evening, or Night
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-neutral-800">Select groups</h3>
                <p className="text-sm text-neutral-600">
                  Choose which groups to see during this time block
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-neutral-800">View your feed</h3>
                <p className="text-sm text-neutral-600">
                  Your feed will automatically adjust based on the current time and your preferences
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <GroupList />
      </div>
    </div>
  );
};

export default TimelinePage;