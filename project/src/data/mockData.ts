import { Post, User, Group, Notification } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'johndoe',
    displayName: 'John Doe',
    profilePicture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Photographer and travel enthusiast',
    isFollowing: false,
    isBusinessAccount: false,
  },
  {
    id: '2',
    username: 'janedoe',
    displayName: 'Jane Doe',
    profilePicture: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Digital artist | Coffee lover',
    isFollowing: true,
    isBusinessAccount: false,
  },
  {
    id: '3',
    username: 'travelblog',
    displayName: 'Travel Blog',
    profilePicture: 'https://images.pexels.com/photos/5128663/pexels-photo-5128663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Exploring the world one photo at a time',
    isFollowing: true,
    isBusinessAccount: true,
  },
];

export const mockGroups: Group[] = [
  {
    id: '1',
    name: 'Family Photos',
    description: 'A place to share family memories',
    type: 'private',
    category: 'Family',
    profilePicture: 'https://images.pexels.com/photos/6194853/pexels-photo-6194853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    memberCount: 8,
    isJoined: true,
    isAdmin: true,
  },
  {
    id: '2',
    name: 'Work Team',
    description: 'Project updates and team activities',
    type: 'private',
    category: 'Work',
    profilePicture: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    memberCount: 12,
    isJoined: true,
    isAdmin: false,
  },
  {
    id: '3',
    name: 'Hiking Club',
    description: 'For hiking enthusiasts',
    type: 'public',
    category: 'Hobby',
    profilePicture: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    memberCount: 156,
    isJoined: true,
    isAdmin: false,
  },
  {
    id: '4',
    name: 'Book Club',
    description: 'Monthly book discussions',
    type: 'public',
    category: 'Hobby',
    profilePicture: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    memberCount: 42,
    isJoined: true,
    isAdmin: false,
  },
  {
    id: '5',
    name: 'Travel Enthusiasts',
    description: 'Sharing travel tips and experiences',
    type: 'public',
    category: 'Travel',
    profilePicture: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    memberCount: 387,
    isJoined: true,
    isAdmin: false,
  },
  {
    id: '6',
    name: 'Night Photography',
    description: 'Tips and photos for night photography',
    type: 'public',
    category: 'Hobby',
    profilePicture: 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    memberCount: 221,
    isJoined: true,
    isAdmin: false,
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '2',
    username: 'janedoe',
    userProfilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Just finished this new digital art piece! #DigitalArt #Creativity',
    imageUrl: 'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    privacyLevel: 'public',
    likesCount: 42,
    commentsCount: 7,
    isLiked: false,
    createdAt: '2023-08-15T14:23:00Z',
  },
  {
    id: '2',
    userId: '3',
    username: 'travelblog',
    userProfilePic: 'https://images.pexels.com/photos/5128663/pexels-photo-5128663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Sunset at the beach. Nothing beats this view! 🌅 #Travel #Beach',
    imageUrl: 'https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    privacyLevel: 'public',
    likesCount: 128,
    commentsCount: 13,
    isLiked: true,
    createdAt: '2023-08-14T18:45:00Z',
  },
  {
    id: '3',
    userId: '1',
    username: 'johndoe',
    userProfilePic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Family dinner night! 🍝 #FamilyTime',
    imageUrl: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    groupId: '1',
    groupName: 'Family Photos',
    privacyLevel: 'private',
    likesCount: 8,
    commentsCount: 2,
    isLiked: false,
    createdAt: '2023-08-14T20:12:00Z',
  },
  {
    id: '4',
    userId: '2',
    username: 'janedoe',
    userProfilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Project update: We\'re on track to meet our deadline! 🚀 #ProjectManagement',
    groupId: '2',
    groupName: 'Work Team',
    privacyLevel: 'private',
    likesCount: 14,
    commentsCount: 5,
    isLiked: true,
    createdAt: '2023-08-14T09:30:00Z',
  },
  {
    id: '5',
    userId: '3',
    username: 'travelblog',
    userProfilePic: 'https://images.pexels.com/photos/5128663/pexels-photo-5128663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Mountain hike today was incredible! Reached the summit in record time. #Hiking #Mountains',
    imageUrl: 'https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    groupId: '3',
    groupName: 'Hiking Club',
    privacyLevel: 'semi-private',
    likesCount: 38,
    commentsCount: 8,
    isLiked: false,
    createdAt: '2023-08-13T16:20:00Z',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'follow',
    userId: '2',
    username: 'janedoe',
    userProfilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'started following you',
    read: false,
    createdAt: '2023-08-15T10:30:00Z',
  },
  {
    id: '2',
    type: 'like',
    userId: '3',
    username: 'travelblog',
    userProfilePic: 'https://images.pexels.com/photos/5128663/pexels-photo-5128663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'liked your post',
    postId: '1',
    read: true,
    createdAt: '2023-08-15T09:15:00Z',
  },
  {
    id: '3',
    type: 'comment',
    userId: '2',
    username: 'janedoe',
    userProfilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'commented on your post: "Love this!"',
    postId: '1',
    read: false,
    createdAt: '2023-08-14T22:45:00Z',
  },
  {
    id: '4',
    type: 'group-invite',
    userId: '3',
    username: 'travelblog',
    userProfilePic: 'https://images.pexels.com/photos/5128663/pexels-photo-5128663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'invited you to join Travel Enthusiasts group',
    groupId: '5',
    read: false,
    createdAt: '2023-08-14T14:20:00Z',
  },
];