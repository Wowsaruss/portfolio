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
      <div className="flex justify-center">
        <a
          href="https://github.com/Wowsaruss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-500 hover:text-lime-400 transition-colors duration-200"
        >
          View GitHub Profile →
        </a>
      </div>
    </div>
  );
};

export default GitHubContributions; 