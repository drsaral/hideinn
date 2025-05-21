import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, Sunset, Moon } from 'lucide-react';
import { TimeBlock } from '../../types';
import { useTimeline } from '../../context/TimelineContext';

const TimeBlockSelector: React.FC = () => {
  const { timeBlock, setTimeBlock } = useTimeline();

  const timeBlocks: { value: TimeBlock; label: string; icon: React.ReactNode }[] = [
    { value: 'morning', label: 'Morning', icon: <Sun className="w-5 h-5" /> },
    { value: 'afternoon', label: 'Afternoon', icon: <Cloud className="w-5 h-5" /> },
    { value: 'evening', label: 'Evening', icon: <Sunset className="w-5 h-5" /> },
    { value: 'night', label: 'Night', icon: <Moon className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white rounded-lg shadow-card p-4 mb-6">
      <h2 className="font-medium text-neutral-800 mb-3">Smart Timeline</h2>
      <div className="grid grid-cols-4 gap-2">
        {timeBlocks.map((block) => (
          <motion.button
            key={block.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors ${
              timeBlock === block.value
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
            onClick={() => setTimeBlock(block.value)}
          >
            {block.icon}
            <span className="text-xs mt-1">{block.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TimeBlockSelector;