import React from "react";
import MatchScheduleCarousel from "../SubComponents/MatchScheduleCarousel";
import FootballCarousel from "../SubComponents/MatchScheduleCarousel";

const SlidingSchedule = () => {
  const tournaments = [
    {
      name: "Premier League",
      matches: [
        {
          team1: { name: "Manchester United", logo: "manutd-logo.jpg" },
          team2: { name: "Liverpool", logo: "liverpool-logo.jpg" },
          date: "2024-04-25",
        },
        {
          team1: { name: "Chelsea", logo: "chelsea-logo.jpg" },
          team2: { name: "Arsenal", logo: "arsenal-logo.jpg" },
          date: "2024-04-26",
        },
        // Add more matches for the Premier League
      ],
    },
    {
      name: "La Liga",
      matches: [
        {
          team1: { name: "Barcelona", logo: "barcelona-logo.jpg" },
          team2: { name: "Real Madrid", logo: "realmadrid-logo.jpg" },
          date: "2024-04-27",
        },
        {
          team1: { name: "Atletico Madrid", logo: "atletico-logo.jpg" },
          team2: { name: "Sevilla", logo: "sevilla-logo.jpg" },
          date: "2024-04-28",
        },
        // Add more matches for La Liga
      ],
    },
    // Add more tournaments
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <FootballCarousel tournaments={tournaments} />
    </div>
  );
};

export default SlidingSchedule;
