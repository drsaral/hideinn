export interface User {
  id: string;
  username: string;
  displayName: string;
  profilePicture: string;
  bio?: string;
  isFollowing: boolean;
  isBusinessAccount: boolean;
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  type: 'public' | 'private';
  category: GroupCategory;
  profilePicture: string;
  memberCount: number;
  isJoined: boolean;
  isAdmin: boolean;
}

export type GroupCategory = 
  | 'Family'
  | 'Friends'
  | 'Work'
  | 'Hobby'
  | 'Travel'
  | 'Event'
  | 'Other';

export type PrivacyLevel = 'public' | 'semi-private' | 'private';

export type TimeBlock = 'morning' | 'afternoon' | 'evening' | 'night';

export interface TimelinePreference {
  timeBlock: TimeBlock;
  groupIds: string[];
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  userProfilePic: string;
  content: string;
  imageUrl?: string;
  groupId?: string;
  groupName?: string;
  privacyLevel: PrivacyLevel;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  userProfilePic: string;
  content: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  type: 'follow' | 'like' | 'comment' | 'group-invite' | 'group-join';
  userId: string;
  username: string;
  userProfilePic: string;
  content: string;
  postId?: string;
  groupId?: string;
  read: boolean;
  createdAt: string;
}