import React, { useState } from 'react';
import { Image, Lock, Globe, Users, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { PrivacyLevel, User } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { useFeed } from '../../context/FeedContext';

const CreatePost: React.FC = () => {
  const { user } = useAuth();
  const { createPost } = useFeed();
  const [content, setContent] = useState('');
  const [privacyLevel, setPrivacyLevel] = useState<PrivacyLevel>('public');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  if (!user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    createPost({
      userId: user.id,
      username: user.username,
      userProfilePic: user.profilePicture,
      content,
      imageUrl: previewImage || undefined,
      privacyLevel,
    });

    setContent('');
    setPreviewImage(null);
    setExpanded(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload this file to a server
      // Here, we'll just create a local URL for preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const privacyOptions = [
    { value: 'public', label: 'Public', icon: <Globe className="w-4 h-4" /> },
    { value: 'semi-private', label: 'Selected Groups', icon: <Users className="w-4 h-4" /> },
    { value: 'private', label: 'Private', icon: <Lock className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white rounded-lg shadow-card p-4 mb-6">
      <div className="flex items-start space-x-3">
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-10 h-10 rounded-full object-cover border border-neutral-200"
        />
        <div className="flex-grow">
          <div
            className={`border border-neutral-200 rounded-lg overflow-hidden transition-all ${
              expanded ? 'p-3' : 'p-2'
            }`}
          >
            <textarea
              placeholder="Share what's on your mind..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onClick={() => setExpanded(true)}
              className="w-full outline-none resize-none text-neutral-800 placeholder-neutral-400"
              rows={expanded ? 3 : 1}
            />

            {previewImage && (
              <div className="relative mt-2">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="rounded-lg max-h-40 object-cover"
                />
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-2 right-2 bg-neutral-800 bg-opacity-70 text-white rounded-full p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pt-3 border-t border-neutral-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <label className="cursor-pointer p-2 rounded-full hover:bg-neutral-100">
                      <Image className="w-5 h-5 text-neutral-500" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>

                    <div className="relative group">
                      <button className="flex items-center space-x-1 px-2 py-1 rounded-md text-xs border border-neutral-200 hover:bg-neutral-100">
                        {privacyOptions.find(option => option.value === privacyLevel)?.icon}
                        <span>{privacyOptions.find(option => option.value === privacyLevel)?.label}</span>
                      </button>

                      <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-10 w-40">
                        {privacyOptions.map(option => (
                          <button
                            key={option.value}
                            className={`flex items-center space-x-2 w-full px-2 py-1 text-left rounded-md hover:bg-neutral-100 ${
                              privacyLevel === option.value ? 'text-primary-600' : 'text-neutral-700'
                            }`}
                            onClick={() => setPrivacyLevel(option.value as PrivacyLevel)}
                          >
                            {option.icon}
                            <span>{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!content.trim()}
                    className="px-4 py-1.5 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;