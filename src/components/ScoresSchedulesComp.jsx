import React, { useState } from "react";
import "../css/ComponentsCSS/ScoresScheduleComp.css";
import Schedule from "../SubComponents/Schedule";
import DateTabs from "../SubComponents/DateTabs";

function ScoresSchedulescomp() {
  // random time
  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${hours.toString().padStart(2, "0")}:
      ${minutes.toString().padStart(2, "0")}`;
  };

  // generate random team names
  const generateRandomTeamName = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let name = "Team ";
    for (let i = 0; i < 3; i++) {
      name += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return name;
  };

  // generating random schedules
  const generateSchedules = () => {
    const newSchedules = [];
    const startDate = new Date("2024-03-10"); // Start date for new schedules
    const endDate = new Date("2024-03-20"); // End date for new schedules
    startDate.setDate(startDate.getDate() - 10);

    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      let homeTeam = generateRandomTeamName();
      let awayTeam;
      do {
        awayTeam = generateRandomTeamName();
      } while (homeTeam === awayTeam);

      newSchedules.push({
        date: date.toISOString().slice(0, 10),
        Home: {
          name: homeTeam,
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-655-72x72.png",
        },
        Away: {
          name: awayTeam,
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-652-72x72.png",
        },
        Time: generateRandomTime(),
        Location: "Stadium",
      });
    }

    return newSchedules;
  };

  // Extract unique dates from schedules
  const schedules = [
    {
      date: "2024-03-07",
      Home: {
        name: "Manchester United",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-655-72x72.png",
      },
      Away: {
        name: "Everton",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-677-72x72.png",
      },
      Time: "15:00",
      Location: "Old Trafford",
    },
    {
      date: "2024-03-08",
      Home: {
        name: "Wolves",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-685-72x72.png",
      },
      Away: {
        name: "Arsenal",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-651-72x72.png?1659417052",
      },
      Time: "18:00",
      Location: "Santiago Bernabeu",
    },
    {
      date: "2024-03-07",
      Home: {
        name: "Aston Villa",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-672-72x72.png?1690246658",
      },
      Away: {
        name: "Tottenham",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-656-72x72.png?1659417052",
      },
      Time: "18:00",
      Location: "Old Trafford",
    },
    {
      date: "2024-03-07",
      Home: {
        name: "Liverpool",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
      },
      Away: {
        name: "Man City",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-654-72x72.png",
      },
      Time: "22:00",
      Location: "Santiago Bernabeu",
    },
    {
      date: "2024-03-08",
      Home: {
        name: "Chelsea",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-652-72x72.png",
      },
      Away: {
        name: "Newcastle United",
        logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-679-72x72.png?1659417053",
      },
      Time: "18:00",
      Location: "Stamford Bridge",
    },
    ...generateSchedules(), // Add additional schedules
  ];
  const dates = Array.from(new Set(schedules.map((schedule) => schedule.date)));

  // State to manage selected date
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  return (
    <div>
      <DateTabs
        // dates={dates}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />
      <Schedule schedules={schedules} selectedDate={selectedDate} />
    </div>
  );
}

export default ScoresSchedulescomp;
