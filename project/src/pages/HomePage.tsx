import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from '../components/feed/PostList';
import CreatePost from '../components/feed/CreatePost';
import TimeBlockSelector from '../components/timeline/TimeBlockSelector';
import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <TimeBlockSelector />
          <CreatePost />
          <PostList />
        </div>
        <div className="hidden md:block">
          <div className="bg-white rounded-lg shadow-card p-4 sticky top-20">
            <h2 className="font-medium text-neutral-800 mb-4">Your World. Your Way.</h2>
            <p className="text-sm text-neutral-600 mb-3">
              Hide Inn shows you content only from people and groups you choose to follow, organized
              by time blocks you define.
            </p>
            <ul className="text-sm text-neutral-600 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-primary-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                <span>Customize what content appears in each time block</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-primary-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                <span>Create and join groups for targeted sharing</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-primary-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                <span>Control who sees what with privacy settings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;