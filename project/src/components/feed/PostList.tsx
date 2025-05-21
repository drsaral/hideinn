import React from 'react';
import { motion } from 'framer-motion';
import Post from './Post';
import { useFeed } from '../../context/FeedContext';

const PostList: React.FC = () => {
  const { posts, isLoading } = useFeed();

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-pulse space-y-4 w-full max-w-xl">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="rounded-full bg-neutral-200 h-10 w-10"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-neutral-200 rounded w-1/4"></div>
                  <div className="h-3 bg-neutral-200 rounded w-1/6"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-neutral-200 rounded w-full"></div>
                <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
              </div>
              <div className="h-48 bg-neutral-200 rounded mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-neutral-700 mb-2">No posts yet</h3>
        <p className="text-neutral-500">
          Start following users and groups to see content here
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
        >
          <Post post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PostList;