import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">GitHub Contributions</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <GitHubCalendar
          username="Wowsaruss"
          colorScheme="light"
          fontSize={16}
          blockSize={12}
          blockMargin={4}
          hideColorLegend={false}
          hideMonthLabels={false}
          showWeekdayLabels={true}
          transformData={(data) => {
            return data.map((day) => ({
              ...day,
              intensity: day.count > 0 ? Math.min(day.count, 4) : 0,
            }));
          }}
        />
      </div>
    </div>
  );
};

export default GitHubContributions; 