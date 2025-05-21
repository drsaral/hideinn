import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Post as PostType } from '../../types';
import { useFeed } from '../../context/FeedContext';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { likePost } = useFeed();
  const [showComments, setShowComments] = useState(false);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
    return `${Math.floor(diffInSeconds / 86400)}d`;
  };

  const handleLike = () => {
    likePost(post.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden mb-4">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <Link to={`/profile/${post.userId}`} className="flex-shrink-0">
            <img
              src={post.userProfilePic}
              alt={post.username}
              className="w-10 h-10 rounded-full object-cover border border-neutral-200"
            />
          </Link>
          <div className="ml-3 flex-grow">
            <div className="flex items-center">
              <Link to={`/profile/${post.userId}`} className="font-medium text-neutral-800 hover:text-primary-600">
                {post.username}
              </Link>
              {post.groupId && (
                <>
                  <span className="mx-1 text-neutral-400">•</span>
                  <Link to={`/groups/${post.groupId}`} className="text-secondary-600 hover:text-secondary-700">
                    {post.groupName}
                  </Link>
                </>
              )}
            </div>
            <span className="text-xs text-neutral-500">{formatTimeAgo(post.createdAt)}</span>
          </div>
          <button className="p-2 rounded-full hover:bg-neutral-100">
            <MoreHorizontal className="w-5 h-5 text-neutral-400" />
          </button>
        </div>

        <p className="text-neutral-800 mb-3">{post.content}</p>

        {post.imageUrl && (
          <div className="relative -mx-4 aspect-[4/3] overflow-hidden bg-neutral-100">
            <img
              src={post.imageUrl}
              alt="Post"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-100">
          <button
            className="flex items-center text-neutral-500 hover:text-primary-600"
            onClick={handleLike}
          >
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            >
              <Heart
                className={`w-5 h-5 mr-1 ${post.isLiked ? 'text-primary-600' : ''}`}
                fill={post.isLiked ? '#E94E1B' : 'none'}
              />
            </motion.div>
            <span>{post.likesCount}</span>
          </button>

          <button
            className="flex items-center text-neutral-500 hover:text-secondary-600"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            <span>{post.commentsCount}</span>
          </button>

          <button className="flex items-center text-neutral-500 hover:text-accent-600">
            <Share2 className="w-5 h-5 mr-1" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {showComments && (
        <div className="p-4 border-t border-neutral-100 bg-neutral-50">
          <div className="text-center text-neutral-500 text-sm py-4">
            Comments not yet implemented in this MVP
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;