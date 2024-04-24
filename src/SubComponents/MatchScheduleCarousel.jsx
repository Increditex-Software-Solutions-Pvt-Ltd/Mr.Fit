import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const FootballCarousel = ({ tournaments }) => {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  const renderMatches = (matches) => (
    <div className="matches-container">
      {matches.map((match, index) => (
        <div key={index} className="match-card">
          <div className="team-logo">
            <img src={match.team1.logo} alt={match.team1.name} />
          </div>
          <div className="team-details">
            <p>{match.team1.name}</p>
            <p>vs</p>
            <p>{match.team2.name}</p>
          </div>
          <p>{match.date}</p>
        </div>
      ))}
    </div>
  );

  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      autoPlayInterval={3000}
      autoPlayDirection="rtl"
      autoPlay={true}
      buttonsDisabled={false} // Enable arrow buttons
      dotsDisabled={true} // Disable dots navigation
      infinite={true}
    >
      {tournaments.map((tournament, index) => (
        <div key={index} className="tournament-card">
          <h3>{tournament.name}</h3>
          {index === 0 ? ( // Render tournament name card only for the first item
            <div className="tournament-name-card">
              <h3>{tournament.name}</h3>
            </div>
          ) : (
            renderMatches(tournament.matches)
          )}
        </div>
      ))}
    </AliceCarousel>
  );
};

export default FootballCarousel;
