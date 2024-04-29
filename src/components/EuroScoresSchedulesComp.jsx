import React from "react";
import "../css/ComponentsCSS/SpecialScoresSchedules.css";
import SpecialScoresSchedules from "../SubComponents/SpecialScoresSchedules";

const EuroScoresSchedulesComp = ({ title }) => {
  const euroSchedule = [
    {
      title: "GROUP STAGE MATCH WEEK 1",
      tables: [
        {
          date: "Saturday, June 15",
          matches: [
            {
              team1: "Germany",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-727-72x72.png?1659417060",
              team2: "Scotland",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-711-72x72.png",
              time: "0:30",
              location: "Allianz Arena",
            },
            {
              team1: "Hungary",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-780-72x72.png?1659417061",
              team2: "Switzerland",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-790-72x72.png",
              time: "18:30",
              location: "RheinEnergieSTADION",
            },
            {
              team1: "Spain",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-788-72x72.png",
              team2: "Croatia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-775-72x72.png",
              time: "21:30",
              location: "Olympiastadion Berlin",
            },
          ],
        },
        {
          date: "Sunday, June 16",
          matches: [
            {
              team1: "Italy",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-781-72x72.png?1659417061",
              team2: "Albania",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6269-72x72.png",
              time: "0:30",
              location: "SIGNAL IDUNA PARK",
            },
            {
              team1: "Poland",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-784-72x72.png?1659417062",
              team2: "Netherlands",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-782-72x72.png",
              time: "18:30",
              location: "Volksparkstadion",
            },
            {
              team1: "Slovenia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6268-72x72.png",
              team2: "Denmark",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-777-72x72.png",
              time: "21:30",
              location: "MHPArena",
            },
          ],
        },
        {
          date: "Monday, June 17",
          matches: [
            {
              team1: "Serbian",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1173-72x72.png",
              team2: "England",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-710-72x72.png?1690247034",
              time: "0:30",
              location: "VELTINS-Arena",
            },
            {
              team1: "Romania",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=48%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6271-300x300.png",
              team2: "Ukraine",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-792-72x72.png?1659417062",
              time: "18:30",
              location: "Allianz Arena",
            },
            {
              team1: "Belgium",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-774-72x72.png?1659417061",
              team2: "Slovakia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-787-72x72.png?1659417063",
              time: "21:30",
              location: "Deutsche Bank",
            },
          ],
        },
        {
          date: "Tuesday, June 18",
          matches: [
            {
              team1: "Austria",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-773-72x72.png?1659417061",
              team2: "France",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-779-72x72.png",
              time: "0:30",
              location: "Merkur Spiel-Arena",
            },
            {
              team1: "Türkiye",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-791-72x72.png",
              team2: "Georgia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6267-72x72.png",
              time: "21:30",
              location: "SIGNAL IDUNA PARK",
            },
          ],
        },
        {
          date: "Wednesday, June 19",
          matches: [
            {
              team1: "Portugal",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-785-72x72.png",
              team2: "Czechia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-776-72x72.png",
              time: "0:30",
              location: "Red Bull Arena",
            },
          ],
        },
      ],
    },
    {
      title: "GROUP STAGE MATCH WEEK 2",
      tables: [
        {
          date: "Wednesday, June 19",
          matches: [
            {
              team1: "Croatia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-775-72x72.png",
              team2: "Albania",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6269-72x72.png",
              time: "18:30",
              location: "Volksparkstadion",
            },
            {
              team1: "Germany",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-727-72x72.png?1659417060",
              team2: "Hungary",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-780-72x72.png?1659417061",
              time: "21:30",
              location: "MHPArena",
            },
          ],
        },
        {
          date: "Thursday, June 20",
          matches: [
            {
              team1: "Scotland",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-711-72x72.png",
              team2: "Switzerland",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-790-72x72.png",
              time: "0:30",
              location: "RheinEnergieSTADION",
            },
            {
              team1: "Slovenia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-727-72x72.png?1659417060",
              team2: "Serbia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1173-72x72.png",
              time: "18:30",
              location: "Allianz Arena",
            },
            {
              team1: "Denmark",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-777-72x72.png",
              team2: "England",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-710-72x72.png?1690247034",
              time: "21:30",
              location: "Deutsche Bank Park",
            },
          ],
        },
        {
          date: "Friday, June 21",
          matches: [
            {
              team1: "Spain",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-788-72x72.png",
              team2: "Italy",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-781-72x72.png?1659417061",
              time: "0:30",
              location: "VELTINS-Arena",
            },
            {
              team1: "Slovakia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-787-72x72.png?1659417063",
              team2: "Ukraine",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-792-72x72.png?1659417062",
              time: "18:30",
              location: "Merkur Spiel-Arena",
            },
            {
              team1: "Poland",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-784-72x72.png?1659417062",
              team2: "Austria",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-773-72x72.png?1659417061",
              time: "21:30",
              location: "Olympiastadion Berlin",
            },
          ],
        },
        {
          date: "Saturday, June 22",
          matches: [
            {
              team1: "Netherlands",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-782-72x72.png",
              team2: "France",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-779-72x72.png",
              time: "0:30",
              location: "Red Bull Arena",
            },
            {
              team1: "Georgia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6267-72x72.png",
              team2: "Czechia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-776-72x72.png",
              time: "18:30",
              location: "Volksparkstadion",
            },
            {
              team1: "Türkiye",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-791-72x72.png",
              team2: "Portugal",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-785-72x72.png",
              time: "21:30",
              location: "SIGNAL IDUNA PARK",
            },
          ],
        },
        {
          date: "Sunday, June 23",
          matches: [
            {
              team1: "Belgium",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-774-72x72.png?1659417061",
              team2: "Romania",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6271-72x72.png",
              time: "0:30",
              location: "RheinEnergieSTADION",
            },
          ],
        },
      ],
    },
    {
      title: "GROUP STAGE MATCH WEEK 3",
      tables: [
        {
          date: "Monday, June 24",
          matches: [
            {
              team1: "Switzerland",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-790-72x72.png",
              team2: "Germany",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-727-72x72.png?1659417060",
              time: "0:30",
              location: "Deutsche Bank Park",
            },
            {
              team1: "Scotland",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-711-72x72.png",
              team2: "Hungary",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-780-72x72.png?1659417061",
              time: "0:30",
              location: "MHPArena",
            },
          ],
        },
        {
          date: "Tuesday, June 25",
          matches: [
            {
              team1: "Croatia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-775-72x72.png",
              team2: "Italy",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-781-72x72.png?1659417061",
              time: "21:30",
              location: "Red Bull Arena",
            },
            {
              team1: "Albania",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6269-72x72.png",
              team2: "Spain",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-788-72x72.png",
              time: "0:30",
              location: "Merkur Spiel-Arena",
            },
            {
              team1: "Netherlands",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-782-72x72.png",
              team2: "Austria",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-773-72x72.png?1659417061",
              time: "21:30",
              location: "Olympiastadion Berlin",
            },
            {
              team1: "France",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-779-72x72.png",
              team2: "Poland",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-784-72x72.png?1659417062",
              time: "21:30",
              location: "SIGNAL IDUNA PARK",
            },
          ],
        },
        {
          date: "Wednesday, June 26",
          matches: [
            {
              team1: "Denmark",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-777-72x72.png",
              team2: "Serbia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1173-72x72.png",
              time: "0:30",
              location: "Allianz Arena",
            },
            {
              team1: "England",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-710-72x72.png?1690247034",
              team2: "Slovenia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-774-72x72.png?1659417061",
              time: "0:30",
              location: "RheinEnergieSTADION",
            },
            {
              team1: "Ukraine",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-792-72x72.png?1659417062",
              team2: "Belgium",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-774-72x72.png?1659417061",
              time: "21:30",
              location: "MHPArena",
            },
            {
              team1: "Slovakia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-787-72x72.png?1659417063",
              team2: "Romania",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6271-72x72.png",
              time: "21:30",
              location: "Deutsche Bank Park",
            },
          ],
        },
        {
          date: "Thursday, June 27",
          matches: [
            {
              team1: "Czechia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-776-72x72.png",
              team2: "Türkiye",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-791-72x72.png",
              time: "0:30",
              location: "Volksparkstadion",
            },
            {
              team1: "Georgia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6267-72x72.png",
              team2: "Portugal",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-785-72x72.png",
              time: "0:30",
              location: "VELTINS-Arena",
            },
          ],
        },
      ],
    },
    {
      title: "ROUND OF 16",
      tables: [
        {
          date: "Saturday,June 29",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "21:30",
              location: "Olympiastadion Berlin",
            },
          ],
        },
        {
          date: "Sunday, June 30",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Red Bull Arena",
            },
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "21:30",
              location: "VELTINS-Arena",
            },
          ],
        },
        {
          date: "Monday, July 01",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "RheinEnergieSTADION",
            },
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "21:30",
              location: "Merkur Spiel-Arena",
            },
          ],
        },
        {
          date: "Tuesday, July 02",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Deutsche Bank Park",
            },
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "21:30",
              location: "Allianz Arena",
            },
          ],
        },
        {
          date: "Wednesday, July 03",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Red Bull Arena",
            },
          ],
        },
      ],
    },
    {
      title: "QUARTER-FINALS",
      tables: [
        {
          date: "Friday,July 05",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "21:30",
              location: "Olympiastadion Berlin",
            },
          ],
        },
        {
          date: "Saturday,July 06",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Volksparkstadion",
            },
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "21:30",
              location: "Merkur Spiel-Arena",
            },
          ],
        },
        {
          date: "Sunday,July 07",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Olympiastadion Berlin",
            },
          ],
        },
      ],
    },
    {
      title: "SEMI-FINALS",
      tables: [
        {
          date: "Wednesday,July 10",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Allianz Arena",
            },
          ],
        },
        {
          date: "Thursday,July 11",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Volksparkstadion",
            },
          ],
        },
      ],
    },
    {
      title: "FINALS",
      tables: [
        {
          date: "Monday,July 15",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Olympiastadion Berlin",
            },
          ],
        },
      ],
    },
  ];
  const europaSchedule = [
    {
      title: "GROUP STAGE MATCH WEEK 1",
      tables: [
        {
          date: "Thursday, September 21, 2023",
          matches: [
            {
              team1: "Servette",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-nkXX9keNBeAI3wKr-72x72.png",
              team2: "Slavia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              Result: "SFC 0-2 SLA",
              location: "Stade de Genève",
            },
            {
              team1: "Sheriff",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              team2: "Roma",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "SHE 1-2 ROM",
              location: "Bolshaya Sportivnaya Arena",
            },
          ],
        },
        {
          date: "Thursday, September 22, 2023",
          matches: [
            {
              team1: "Servette",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-nkXX9keNBeAI3wKr-72x72.png",
              team2: "Slavia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              Result: "SFC 0-2 SLA",
              location: "Stade de Genève",
            },
            {
              team1: "Sheriff",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              team2: "Roma",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "SHE 1-2 ROM",
              location: "Bolshaya Sportivnaya Arena",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <SpecialScoresSchedules
        data={title === "Euro 2024" ? euroSchedule : europaSchedule}
        title={title}
      />
    </>
  );
};

export default EuroScoresSchedulesComp;
