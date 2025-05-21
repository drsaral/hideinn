import React, { createContext, useContext, useState } from 'react';
import { Post, Group } from '../types';
import { mockPosts } from '../data/mockData';
import { useTimeline } from './TimelineContext';

interface FeedContextType {
  posts: Post[];
  isLoading: boolean;
  likePost: (postId: string) => void;
  createPost: (post: Omit<Post, 'id' | 'createdAt' | 'likesCount' | 'commentsCount' | 'isLiked'>) => void;
  deletePost: (postId: string) => void;
}

const FeedContext = createContext<FeedContextType>({
  posts: [],
  isLoading: false,
  likePost: () => {},
  createPost: () => {},
  deletePost: () => {},
});

export const useFeed = () => useContext(FeedContext);

export const FeedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [isLoading, setIsLoading] = useState(false);
  const { getCurrentGroups } = useTimeline();

  const filteredPosts = posts.filter(post => {
    if (!post.groupId) return true; // Show posts not in groups
    const currentGroups = getCurrentGroups();
    return currentGroups.includes(post.groupId);
  });

  const likePost = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likesCount: post.isLiked ? post.likesCount - 1 : post.likesCount + 1,
          };
        }
        return post;
      })
    );
  };

  const createPost = (
    post: Omit<Post, 'id' | 'createdAt' | 'likesCount' | 'commentsCount' | 'isLiked'>
  ) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      likesCount: 0,
      commentsCount: 0,
      isLiked: false,
    };

    setPosts([newPost, ...posts]);
  };

  const deletePost = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <FeedContext.Provider
      value={{
        posts: filteredPosts,
        isLoading,
        likePost,
        createPost,
        deletePost,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};