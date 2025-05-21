import React from 'react';
import { Heart } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
  };

  return (
    <div className="flex items-center">
      <div className={`bg-primary-600 text-white rounded-lg flex items-center justify-center ${sizes[size]} aspect-square relative`}>
        <span className="font-bold italic text-2xl">hi</span>
        <Heart className="absolute top-1 right-1 w-4 h-4 text-white" fill="white" />
      </div>
      {withText && (
        <span className="ml-2 text-secondary-600 font-bold text-xl">Hide Inn</span>
      )}
    </div>
  );
};

export default Logo;