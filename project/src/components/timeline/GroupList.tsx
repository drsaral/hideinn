import React from 'react';
import { motion } from 'framer-motion';
import { Group as GroupType } from '../../types';
import { useTimeline } from '../../context/TimelineContext';
import { mockGroups } from '../../data/mockData';

interface GroupItemProps {
  group: GroupType;
  isSelected: boolean;
  onToggle: () => void;
}

const GroupItem: React.FC<GroupItemProps> = ({ group, isSelected, onToggle }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected ? 'bg-primary-50 border border-primary-200' : 'bg-white border border-neutral-200 hover:border-primary-200'
      }`}
      onClick={onToggle}
    >
      <img
        src={group.profilePicture}
        alt={group.name}
        className="w-10 h-10 rounded-lg object-cover"
      />
      <div className="ml-3 flex-grow">
        <h3 className="font-medium text-neutral-800">{group.name}</h3>
        <p className="text-xs text-neutral-500">
          {group.memberCount} members • {group.category}
        </p>
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          isSelected
            ? 'border-primary-600 bg-primary-600'
            : 'border-neutral-300'
        }`}
      >
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 bg-white rounded-full"
          />
        )}
      </div>
    </motion.div>
  );
};

const GroupList: React.FC = () => {
  const { timeBlock, timelinePreferences, updateTimelinePreferences } = useTimeline();
  
  const currentPreference = timelinePreferences.find(pref => pref.timeBlock === timeBlock) || { 
    timeBlock, 
    groupIds: [] 
  };
  
  const toggleGroup = (groupId: string) => {
    const newPreferences = [...timelinePreferences];
    const preferenceIndex = newPreferences.findIndex(pref => pref.timeBlock === timeBlock);
    
    if (preferenceIndex >= 0) {
      const groupIds = [...newPreferences[preferenceIndex].groupIds];
      const groupIndex = groupIds.indexOf(groupId);
      
      if (groupIndex >= 0) {
        groupIds.splice(groupIndex, 1);
      } else {
        groupIds.push(groupId);
      }
      
      newPreferences[preferenceIndex].groupIds = groupIds;
    } else {
      newPreferences.push({
        timeBlock,
        groupIds: [groupId],
      });
    }
    
    updateTimelinePreferences(newPreferences);
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-neutral-800">Groups for {timeBlock}</h2>
        <span className="text-xs text-neutral-500">
          {currentPreference.groupIds.length} selected
        </span>
      </div>
      
      <div className="space-y-2">
        {mockGroups.map((group) => (
          <GroupItem
            key={group.id}
            group={group}
            isSelected={currentPreference.groupIds.includes(group.id)}
            onToggle={() => toggleGroup(group.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupList;