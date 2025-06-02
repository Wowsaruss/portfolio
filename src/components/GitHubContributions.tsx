import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions = () => {
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">GitHub Contributions</h2>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full">
        <div className="w-full">
          <GitHubCalendar
            username="Wowsaruss"
            colorScheme="light"
            fontSize={16}
            blockSize={16}
            blockMargin={6}
            hideColorLegend={false}
            hideMonthLabels={false}
            showWeekdayLabels={true}
            transformData={(data) => {
              return data.map((day) => ({
                ...day,
                intensity: day.count > 0 ? Math.min(day.count, 4) : 0,
              }));
            }}
            style={{
              '--color-calendar-graph-day-bg': '#ebedf0',
              '--color-calendar-graph-day-L1-bg': '#9be9a8',
              '--color-calendar-graph-day-L2-bg': '#40c463',
              '--color-calendar-graph-day-L3-bg': '#30a14e',
              '--color-calendar-graph-day-L4-bg': '#216e39',
              width: '100%',
            } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions; 