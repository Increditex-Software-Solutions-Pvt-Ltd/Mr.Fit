import { createContext, useContext } from "react";

const TabsContext = createContext();

const tabs = [
  {
    title: "Live News",
    logo: "https://cdn-media.theathletic.com/cropped-favicon-50x50.png",
    subTitles: ["Home"],
  },

  {
    title: "Premier League",
    name: "EPL",
    logo: "https://cdn-league-logos.theathletic.com/league-6-color@2x.png",
    subTitles: [
      "Home",
      "Live News",
      "Teams",
      "Scores & Schedule",
      "Standings",
      "Podcasts",
      "Fantasy",
    ],
  },

  {
    title: "Champions League",
    name: "UCL",
    logo: "https://cdn-league-logos.theathletic.com/cdn-cgi/image/width=48%2cformat=auto%2cquality=75/https://cdn-league-logos.theathletic.com/league-7-color@2x.png",
    subTitles: ["Home", "Scores & Schedule", "Standings", "Podcasts"],
  },

  {
    title: "Euro 2024",
    name: "European Champions",
    logo: "https://cdn-league-logos.theathletic.com/cdn-cgi/image/width=48%2cformat=auto%2cquality=75/https://cdn-league-logos.theathletic.com/league-7-color@2x.png",
    subTitles: ["Home", "Teams"],
  },

  {
    title: "Copa America",
    name: "Copa America",
    logo: "https://cdn-league-logos.theathletic.com/league-57-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "La Liga",
    name: "La Liga",
    logo: "https://cdn-league-logos.theathletic.com/league-17-color@2x.png",
    subTitles: ["Home", "Scores & Schedule", "Standings", "Teams", "Podcasts"],
  },

  {
    title: "Europa League",
    name: "UEL",
    logo: "https://cdn-league-logos.theathletic.com/league-37-color@2x.png",
    subTitles: ["Home", "Scores & Schedule", "Standings"],
  },

  {
    title: "Champions",
    name: "EFL",
    logo: "https://cdn-league-logos.theathletic.com/league-32-color@2x.png",
    subTitles: [
      "Home",
      "Live News",
      "Teams",
      "Scores & Schedule",
      "Standings",
      "Podcasts",
    ],
  },

  {
    title: "International Football",
    name: "International Football",
    logo: "https://cdn-league-logos.theathletic.com/league-16-color@2x.png",
    subTitles: ["Home", "Teams", "Podcasts"],
  },

  {
    title: "Bundesliga",
    name: "Bundesliga",
    logo: "https://cdn-league-logos.theathletic.com/league-22-color@2x.png",
    subTitles: ["Home", "Teams", "Podcasts"],
  },

  {
    title: "Series A",
    name: "Series A",
    logo: "https://cdn-league-logos.theathletic.com/league-23-color@2x.png",
    subTitles: ["Home", "Teams", "Podcasts"],
  },

  {
    title: "Women's Football",
    name: "UK Women's Football",
    logo: "https://cdn-league-logos.theathletic.com/league-35-color@2x.png",
    subTitles: ["Home", "Podcasts"],
  },

  {
    title: "Gaming",
    name: "Gaming",
    logo: "https://cdn-league-logos.theathletic.com/league-43-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "NFL",
    name: "NFL",
    logo: "https://cdn-league-logos.theathletic.com/league-2-color@2x.png",
    subTitles: [
      "Home",
      "Teams",
      "Scores & Schedule",
      "Super Bowl",
      "NFL Draft",
      "Standings",
      "Podcasts",
      "Fantasy",
      "NFL Odds",
      "NFL Picks",
      // "Free Agency Rankings",
      // "Latest Mock Draft",
    ],
  },
  {
    title: "Formula 1",
    name: "Formula 1",
    logo: "https://cdn-league-logos.theathletic.com/league-54-color@2x.png",
    subTitles: [
      "Home",
      "Schedule",
      "Standings",
      "Prime Tire newsletter",
      // "Red Bull",
      // "ferrari",
      // "Mercedes",
      // "Mc Laren",
      // "Aston Martin",
      // "Haas",
      // "VCARB",
      // "Alpine",
      // "Williams",
      // "Stake",
    ],
  },

  {
    title: "Golf",
    name: "Golf",
    logo: "https://cdn-league-logos.theathletic.com/league-14-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "Tennis",
    name: "Tennis",
    logo: "https://cdn-league-logos.theathletic.com/league-56-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "League One",
    name: "League One",
    logo: "https://cdn-league-logos.theathletic.com/league-47-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "League Two",
    name: "League Two",
    logo: "https://cdn-league-logos.theathletic.com/league-48-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "MLS",
    name: "MLS",
    logo: "https://cdn-league-logos.theathletic.com/league-5-color@2x.png",
    subTitles: [
      "Home",
      "Teams",
      "Scores & Schedule",
      "Standings",
      "Podcasts",
      // "Offseason updates",
    ],
  },

  {
    title: "NBA",
    name: "NBA",
    logo: "https://cdn-league-logos.theathletic.com/league-3-color@2x.png",
    subTitles: [
      "Home",
      "Teams",
      "Scores & Schedule",
      "Standings",
      "Podcasts",
      "The Bounce newsletter",
      "Fantasy",
      "NBA Odds",
      "NBA Picks",
      "NBA Drafts",
      // "Updated Mock Draft",
    ],
  },

  {
    title: "MLB",
    name: "MLB",
    logo: "https://cdn-league-logos.theathletic.com/league-4-color@2x.png",
    subTitles: [
      "Home",
      "Teams",
      "Scores & Schedule",
      "Standings",
      "Podcasts",
      "The Windup newsletter",
      "Fantasy",
      // "MLB Prospects",
      "MLB Odds",
      "MLB Picks",
    ],
  },

  {
    title: "NHL",
    name: "NHL",
    logo: "https://cdn-league-logos.theathletic.com/league-1-color@2x.png",
    subTitles: [
      "Home",
      "Teams",
      "Scores & Schedule",
      "Standings",
      "Podcasts",
      "Fantasy",
      "NHL Odds",
      "NHL Picks",
    ],
  },

  {
    title: "Sports business",
    name: "Sports business",
    logo: "https://cdn-league-logos.theathletic.com/league-31-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "Boxing",
    name: "Boxing",
    logo: "https://cdn-league-logos.theathletic.com/league-30-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "MMA",
    name: "MMA",
    logo: "https://cdn-league-logos.theathletic.com/league-29-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "Culture",
    name: "Culture",
    logo: "https://cdn-league-logos.theathletic.com/league-39-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "Olympics",
    name: "Olympics",
    logo: "https://cdn-league-logos.theathletic.com/league-42-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "Motorsports",
    name: "Motorsports",
    logo: "https://cdn-league-logos.theathletic.com/league-28-color@2x.png",
    subTitles: ["Home", "Podcasts"],
  },

  {
    title: "NASCAR",
    name: "Nascar",
    logo: "https://cdn-league-logos.theathletic.com/league-58-color@2x.png",
    subTitles: ["Home"],
  },

  {
    title: "NWSL",
    name: "NWSL",
    logo: "https://cdn-league-logos.theathletic.com/league-20-color@2x.png",
    subTitles: [
      "Home",
      "Scores & Schedule",
      "Standings",
      "full Time newsletter",
      "Podcasts",
    ],
  },

  {
    title: "NCAAF",
    name: "NCAAF",
    logo: "https://cdn-league-logos.theathletic.com/league-9-color@2x.png",
    subTitles: [
      "Home",
      "Teams",
      "Scores & Schedule",
      "Standings",
      "Podcasts",
      "Until Saturday newsletter",
      // "Recruiting",
      "NCAAF Odds",
      "NCAAF Picks",
      // "Top 25 for 2024",
    ],
  },

  {
    title: "NCAAM",
    name: "NCAAM",
    logo: "https://cdn-league-logos.theathletic.com/league-10-color@2x.png",
    subTitles: [
      "Home",
      "Teams",
      "Scores & Schedule",
      "Standings",
      "Podcasts",
      // "Bubble Watch",
      // "Top 25 Rankings",
      // "Bracket Watch",
      // "Power Rankings",
    ],
  },

  {
    title: "Men's World Cup",
    name: "World Cup",
    logo: "https://cdn-league-logos.theathletic.com/league-44-color@2x.png",
    subTitles: [
      "Home",
      // "The Radar",
      "Teams",
      "Scores & Schedule",
      "Standings",
    ],
  },

  {
    title: "Women's World Cup",
    name: "Women's World Cup",
    logo: "https://cdn-league-logos.theathletic.com/league-55-color@2x.png",
    subTitles: [
      "Home",
      "Scores & Schedule",
      "Standings",
      // "Bracket"
    ],
  },

  {
    title: "The Athletic Ink",
    name: "Ink",
    logo: "https://cdn-media.theathletic.com/cropped-favicon-50x50.png",
    subTitles: ["Home"],
  },
];

const TabProvider = ({ children }) => {
  return (
    <TabsContext.Provider value={[...tabs]}>{children}</TabsContext.Provider>
  );
};

const useTabContext = () => {
  return useContext(TabsContext);
};

export { TabProvider, useTabContext };
