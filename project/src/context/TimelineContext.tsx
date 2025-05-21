import React, { createContext, useContext, useState } from 'react';
import { TimeBlock, TimelinePreference, Group } from '../types';

interface TimelineContextType {
  timeBlock: TimeBlock;
  timelinePreferences: TimelinePreference[];
  setTimeBlock: (block: TimeBlock) => void;
  updateTimelinePreferences: (preferences: TimelinePreference[]) => void;
  getCurrentGroups: () => string[];
}

const defaultPreferences: TimelinePreference[] = [
  { timeBlock: 'morning', groupIds: ['1', '2'] },
  { timeBlock: 'afternoon', groupIds: ['1', '3', '4'] },
  { timeBlock: 'evening', groupIds: ['2', '5'] },
  { timeBlock: 'night', groupIds: ['6'] },
];

const TimelineContext = createContext<TimelineContextType>({
  timeBlock: 'morning',
  timelinePreferences: defaultPreferences,
  setTimeBlock: () => {},
  updateTimelinePreferences: () => {},
  getCurrentGroups: () => [],
});

export const useTimeline = () => useContext(TimelineContext);

export const TimelineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getCurrentTimeBlock = (): TimeBlock => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    if (hour >= 17 && hour < 22) return 'evening';
    return 'night';
  };

  const [timeBlock, setTimeBlock] = useState<TimeBlock>(getCurrentTimeBlock());
  const [timelinePreferences, setTimelinePreferences] = useState<TimelinePreference[]>(defaultPreferences);

  const updateTimelinePreferences = (preferences: TimelinePreference[]) => {
    setTimelinePreferences(preferences);
    // Could save to localStorage or API here
  };

  const getCurrentGroups = (): string[] => {
    const currentPreference = timelinePreferences.find(
      (preference) => preference.timeBlock === timeBlock
    );
    return currentPreference?.groupIds || [];
  };

  return (
    <TimelineContext.Provider
      value={{
        timeBlock,
        timelinePreferences,
        setTimeBlock,
        updateTimelinePreferences,
        getCurrentGroups,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};