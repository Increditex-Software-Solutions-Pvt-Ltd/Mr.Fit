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
            {
              team1: "Rennes",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              team2: "M Haifa",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "REN 3-0 MHA",
              location: "Roazhon Park",
            },
            {
              team1: "Leverkusen",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              team2: "Häcken",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-eTDxJmtRpEjQptdn-72x72.png",
              Result: "LEV 4-0 BKH",
              location: "BayArena",
            },
            {
              team1: "Panathinaikos",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-uPMy4xA9dtzMfRu9-72x72.png",
              team2: "Villarreal",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1201-72x72.png",
              Result: "PAO 2-0 VIL",
              location: "Olympiako Stadio Spyros Louis",
            },
            {
              team1: "Qarabağ",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              team2: "Molde",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JRyuyNl7rdCtsUpA-72x72.png",
              Result: "QAR 1-0 MOL",
              location: "Tofiq Bəhramov adına Respublika stadionu",
            },
            {
              team1: "LASK",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-QrK1PBAOzcUbGrtG-72x72.png",
              team2: "Liverpool",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              Result: "LAS 1-3 LIV",
              location: "Raiffeisen Arena",
            },
            {
              team1: "R. Union SG",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-GWEoWSQmY4lDpzDC-72x72.png",
              team2: "Toulouse",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              Result: "STG 1-1 TFC",
              location: "Lotto Park",
            },
          ],
        },
        {
          date: "Thursday, September 22, 2023",
          matches: [
            {
              team1: "West Ham",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
              team2: "TSC",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wuLC0BJrV4FebxKk-72x72.png",
              Result: "WHU 3-1 TSC",
              location: "London Stadium",
            },
            {
              team1: "Rangers",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              team2: "Real Betis",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "RAN 1-0 BET",
              location: "Ibrox Stadium",
            },
            {
              team1: "Olympiakos",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Xf4ZpijH5iE83BNS-72x72.png",
              team2: "Freiburg",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              Result: "OLY 2-3 SCF",
              location: "Stadio Georgios Karaiskáki",
            },
            {
              team1: "Sturm",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-zOZUYEP518ld4YlW-72x72.png",
              team2: "Sporting",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              Result: "STU 1-2 SCP",
              location: "Merkur Arena",
            },
            {
              team1: "Sparta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              team2: "Aris Limassol",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1201-72x72.png",
              Result: "SPA 3-2 ARI",
              location: "epet ARENA",
            },
            {
              team1: "Brighton",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-72x72.png",
              team2: "AEK Athens",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-0vtFj5iXqnka7i5R-72x72.png",
              Result: "BHA 2-3 AEK",
              location: "American Express Stadium",
            },
            {
              team1: "Ajax",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-NP5DjNgKSxcZw1a4-72x72.png",
              team2: "Marseilled",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              Result: "AJX 3-3 OM",
              location: "Johan Cruijff Arena",
            },
            {
              team1: "Atalanta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              team2: "Raków",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-IxTgLKW61CjukMLj-72x72.png",
              Result: "ATA 2-0 RAK",
              location: "Gewiss Stadium",
            },
          ],
        },
      ],
    },
    {
      title: "GROUP STAGE MATCH WEEK 2",
      tables: [
        {
          date: "Thursday, October 05,2023",
          matches: [
            {
              team1: "Marseille",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              team2: "Brighton",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-72x72.png",
              Result: "OM 2-2 BHA",
              location: "Orange Vélodrome",
            },
            {
              team1: "Real Betis",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1213-72x72.png",
              team2: "Sparta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              Result: "BET 2-1 SPA",
              location: "Estadio Benito Villamarín",
            },
            {
              team1: "Aris Limassol",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-2dgHFeK0qWX31tay-72x72.png",
              team2: "Rangers",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-718-72x72.png",
              Result: "ARI 2-1 RAN",
              location: "Alphamega Stadium",
            },
            {
              team1: "Sporting",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              team2: "Atalanta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              Result: "SCP 1-2 ATA",
              location: "Estádio José Alvalade",
            },
            {
              team1: "AEK Athens",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-0vtFj5iXqnka7i5R-72x72.png",
              team2: "Ajax",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-NP5DjNgKSxcZw1a4-72x72.png",
              Result: "AEK 1-1 AJX",
              location: "OPAP Arena",
            },
            {
              team1: "Freiburg",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              team2: "West Ham",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JRyuyNl7rdCtsUpA-72x72.png",
              Result: "SCF 1-2 WHU",
              location: "Europa-Park Stadion",
            },
            {
              team1: "Raków",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-IxTgLKW61CjukMLj-72x72.png",
              team2: "Sturm",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-zOZUYEP518ld4YlW-72x72.png",
              Result: "RAK 0-1 STU",
              location: "ArcelorMittal Park",
            },
            {
              team1: "TSC",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wuLC0BJrV4FebxKk-72x72.png",
              team2: "Olympiakos",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Xf4ZpijH5iE83BNS-72x72.png",
              Result: "TSC 2-2 OLY",
              location: "TSC Arena",
            },
          ],
        },
        {
          date: "Friday, October 06, 2023",
          matches: [
            {
              team1: "Liverpool",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              team2: "R. Union SG",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-GWEoWSQmY4lDpzDC-72x72.png",
              Result: "LIV 2-0 STG",
              location: "Anfield",
            },
            {
              team1: "Roma",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              team2: "Servette",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-nkXX9keNBeAI3wKr-72x72.png",
              Result: "ROM 4-0 SFC",
              location: "Stadio Olimpico",
            },
            {
              team1: "Molde",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JRyuyNl7rdCtsUpA-72x72.png",
              team2: "Leverkusen",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              Result: "MOL 1-2 LEV",
              location: "Aker Stadion",
            },
            {
              team1: "Villarreal",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-zOZUYEP518ld4YlW-72x72.png",
              team2: "Rennes",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              Result: "VIL 1-0 REN",
              location: "Estadio de la Cerámica",
            },
            {
              team1: "M Haifa",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              team2: "Panathinaikos",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1201-72x72.png",
              Result: "MHA 0-0 PAO",
              location: "Sammy Ofer Stadium",
            },
            {
              team1: "Slavia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              team2: "Sheriff",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              Result: "SLA 6-0 SHE",
              location: "Fortuna Arena",
            },
            {
              team1: "Häcken",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-eTDxJmtRpEjQptdn-72x72.png",
              team2: "Qarabağ",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              Result: "BKH 0-1 QAR",
              location: "Nya Ullevi",
            },
            {
              team1: "Toulouse",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              team2: "LASK",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-QrK1PBAOzcUbGrtG-72x72.png",
              Result: "TFC 1-0 LAS",
              location: "Stadium de Toulouse",
            },
          ],
        },
      ],
    },
    {
      title: "GROUP STAGE MATCH WEEK 3",
      tables: [
        {
          date: "Thursday, October 26,2023",
          matches: [
            {
              team1: "TSC",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wuLC0BJrV4FebxKk-72x72.png",
              team2: "Freiburg",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              Result: "TSC 1-3 SCF",
              location: "TSC Arena",
            },
            {
              team1: "Aris Limassol",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-2dgHFeK0qWX31tay-72x72.png",
              team2: "Real Betis",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1213-72x72.png",
              Result: "ARI 0-1 BET",
              location: "Alphamega Stadium",
            },
            {
              team1: "Raków",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-IxTgLKW61CjukMLj-72x72.png",
              team2: "Sporting",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              Result: "RAK 1-1 SCP",
              location: "ArcelorMittal Park",
            },
            {
              team1: "Sturm",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-zOZUYEP518ld4YlW-72x72.png",
              team2: "Atalanta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              Result: "STU 2-2 ATA",
              location: "Merkur Arena",
            },
            {
              team1: "Olympiakos",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Xf4ZpijH5iE83BNS-72x72.png",
              team2: "West Ham",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
              Result: "OLY 2-1 WHU",
              location: "Stadio Georgios Karaiskáki",
            },
            {
              team1: "Sparta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              team2: "Rangers",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-718-72x72.png",
              Result: "SPA 0-0 RAN",
              location: "epet ARENA",
            },
            {
              team1: "Molde",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JRyuyNl7rdCtsUpA-72x72.png",
              team2: "Häcken",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-eTDxJmtRpEjQptdn-72x72.png",
              Result: "MOL 5-1 BKH",
              location: "Aker Stadion",
            },
            {
              team1: "Marseille",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wuLC0BJrV4FebxKk-72x72.png",
              team2: "AEK Athens",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Xf4ZpijH5iE83BNS-72x72.png",
              Result: "OM 3-1 AEK",
              location: "Orange Vélodrome",
            },
          ],
        },
        {
          date: "Friday,October 27,2023",
          matches: [
            {
              team1: "Sheriff",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              team2: "Servette",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-GWEoWSQmY4lDpzDC-72x72.png",
              Result: "SHE 1-1 SFC",
              location: "Bolshaya Sportivnaya Arena",
            },
            {
              team1: "Roma",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              team2: "Slavia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-nkXX9keNBeAI3wKr-72x72.png",
              Result: "ROM 2-0 SLA",
              location: "Stadio Olimpico",
            },
            {
              team1: "Liverpool",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              team2: "Toulouse",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              Result: "LIV 5-1 TFC",
              location: "Anfield",
            },
            {
              team1: "Leverkusen",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              team2: "Qarabağ",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              Result: "LEV 5-1 QAR",
              location: "BayArena",
            },
            {
              team1: "Brighton",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-72x72.png",
              team2: "Ajax",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-NP5DjNgKSxcZw1a4-72x72.png",
              Result: "BHA 2-0 AJX",
              location: "American Express Stadium",
            },
            {
              team1: "Panathinaikos",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              team2: "Rennes",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              Result: "PAO 1-2 REN",
              location: "Olympiako Stadio Spyros Louis",
            },
            {
              team1: "R. Union SG",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-GWEoWSQmY4lDpzDC-72x72.png",
              team2: "LASK",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-QrK1PBAOzcUbGrtG-72x72.png",
              Result: "STG 2-1 LAS",
              location: "Lotto Park",
            },
          ],
        },
        {
          date: "Thursday, December 07,2023",
          matches: [
            {
              team1: "Villarreal",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wuLC0BJrV4FebxKk-72x72.png",
              team2: "M Haifa",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Xf4ZpijH5iE83BNS-72x72.png",
              Result: "VIL 0-0 MHA",
              location: "Estadio de la Cerámica",
            },
          ],
        },
      ],
    },
    {
      title: "GROUP STAGE MATCH WEEK 4",
      tables: [
        {
          date: "Thursday,November 09,2023",
          matches: [
            {
              team1: "Slavia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              team2: "Roma",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "SLA 2-0 ROM",
              location: "Fortuna Arena",
            },
            {
              team1: "Qarabağ",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              team2: "Leverkusen",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              Result: "QAR 0-1 LEV",
              location: "Tofiq Bəhramov adına Respublika stadionu",
            },
            {
              team1: "Ajax",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-NP5DjNgKSxcZw1a4-72x72.png",
              team2: "Brighton",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-72x72.png",
              Result: "AJX 0-2 BHA",
              location: "Johan Cruijff Arena",
            },
            {
              team1: "Rennes",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JuHWBs24Ho6mrUtN-72x72.png",
              team2: "Panathinaikos",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-uPMy4xA9dtzMfRu9-72x72.png",
              Result: "REN 3-1 PAO",
              location: "Roazhon Park",
            },
            {
              team1: "M Haifa",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-RvsJ9e8bQbyuhl49-72x72.png",
              team2: "Villarreal",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1201-72x72.png",
              Result: "MHA 1-2 VIL",
              location: "AEK Arena - George Karapatakis",
            },
            {
              team1: "Servette",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-nkXX9keNBeAI3wKr-72x72.png",
              team2: "Sheriff",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              Result: "SFC 2-1 SHE",
              location: "Stade de Genève",
            },
            {
              team1: "Toulouse",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              team2: "Liverpool",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              Result: "TFC 3-2 LIV",
              location: "Stadium de Toulouse",
            },
            {
              team1: "LASK",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-QrK1PBAOzcUbGrtG-72x72.png",
              team2: "R. Union SG",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-GWEoWSQmY4lDpzDC-72x72.png",
              Result: "LAS 3-0 STG",
              location: "Raiffeisen Arena",
            },
          ],
        },
        {
          date: "Friday,November 10,2023",
          matches: [
            {
              team1: "Sporting",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              team2: "Raków",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-IxTgLKW61CjukMLj-72x72.png",
              Result: "SCP 2-1 RAK",
              location: "Estádio José Alvalade",
            },
            {
              team1: "Rangers",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-718-72x72.png",
              team2: "Sparta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              Result: "RAN 2-1 SPA",
              location: "Ibrox Stadium",
            },
            {
              team1: "Häcken",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-eTDxJmtRpEjQptdn-72x72.png",
              team2: "Molde",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JRyuyNl7rdCtsUpA-72x72.png",
              Result: "BKH 1-3 MOL",
              location: "Nya Ullevi",
            },
            {
              team1: "Real Betis",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1213-72x72.png",
              team2: "Aris Limassol",
              logo2:
                "hhttps://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-2dgHFeK0qWX31tay-72x72.png",
              Result: "BET 4-1 ARI",
              location: "Estadio Benito Villamarín",
            },
            {
              team1: "AEK Athens",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-0vtFj5iXqnka7i5R-72x72.png",
              team2: "Marseille",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              Result: "AEK 0-2 OM",
              location: "OPAP Arena",
            },
            {
              team1: "Freiburg",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              team2: "TSC",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wuLC0BJrV4FebxKk-72x72.png",
              Result: "SCF 5-0 TSC",
              location: "Europa-Park Stadion",
            },
            {
              team1: "Atalanta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              team2: "Sturm",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-zOZUYEP518ld4YlW-72x72.png",
              Result: "ATA 1-0 STU",
              location: "Gewiss Stadium",
            },
            {
              team1: "West Ham",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
              team2: "Olympiakos",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Xf4ZpijH5iE83BNS-72x72.png",
              Result: "WHU 1-0 OLY",
              location: "London Stadium",
            },
          ],
        },
      ],
    },
    {
      title: "GROUP STAGE MATCH WEEK 5",
      tables: [
        {
          date: "Thursday,November 30,2023",
          matches: [
            {
              team1: "M Haifa",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-RvsJ9e8bQbyuhl49-72x72.png",
              team2: "Rennes",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JuHWBs24Ho6mrUtN-72x72.png",
              Result: "MHA 0-3 REN",
              location: "Puskás Aréna",
            },
            {
              team1: "Sparta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              team2: "Real Betis",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1213-72x72.png",
              Result: "SPA 1-0 BET",
              location: "epet ARENA",
            },
            {
              team1: "Sturm",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-zOZUYEP518ld4YlW-72x72.png",
              team2: "Raków",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-IxTgLKW61CjukMLj-72x72.png",
              Result: "STU 0-1 RAK",
              location: "Merkur Arena",
            },
            {
              team1: "Freiburg",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              team2: "Olympiakos",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Xf4ZpijH5iE83BNS-72x72.png",
              Result: "SCF 5-0 OLY",
              location: "Europa-Park Stadion",
            },
            {
              team1: "AEK Athens",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-0vtFj5iXqnka7i5R-72x72.png",
              team2: "Brighton",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-72x72.png",
              Result: "AEK 0-1 BHA",
              location: "OPAP Arena",
            },
            {
              team1: "Atalanta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              team2: "Sporting",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              Result: "ATA 1-1 SCP",
              location: "Gewiss Stadium",
            },
            {
              team1: "TSC",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              team2: "West Ham",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              Result: "TSC 0-1 WHU",
              location: "TSC Arena",
            },
          ],
        },
        {
          date: "Friday, December 01, 2023",
          matches: [
            {
              team1: "Häcken",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-eTDxJmtRpEjQptdn-72x72.png",
              team2: "Leverkusen",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              Result: "BKH 0-2 LEV",
              location: "Nya Ullevi",
            },
            {
              team1: "Marseille",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              team2: "Ajax",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-NP5DjNgKSxcZw1a4-72x72.png",
              Result: "OM 4-3 AJX",
              location: "Orange Vélodrome",
            },
            {
              team1: "Villarreal",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1201-72x72.png",
              team2: "Panathinaikos",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-uPMy4xA9dtzMfRu9-72x72.png",
              Result: "VIL 3-2 PAO",
              location: "Estadio de la Cerámica",
            },
            {
              team1: "Liverpool",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              team2: "LASK",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-QrK1PBAOzcUbGrtG-72x72.png",
              Result: "LIV 4-0 LAS",
              location: "Anfield",
            },
            {
              team1: "Molde",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JRyuyNl7rdCtsUpA-72x72.png",
              team2: "Qarabağ",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              Result: "MOL 2-2 QAR",
              location: "Aker Stadion",
            },
            {
              team1: "Sheriff",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              team2: "Slavia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              Result: "SHE 2-3 SLA",
              location: "Bolshaya Sportivnaya Arena",
            },
            {
              team1: "Toulouse",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              team2: "R. Union SG",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-GWEoWSQmY4lDpzDC-72x72.png",
              Result: "TFC 0-0 STG",
              location: "Stadium de Toulouse",
            },
            {
              team1: "Servette",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-nkXX9keNBeAI3wKr-72x72.png",
              team2: "Roma",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "SFC 1-1 ROM",
              location: "Stade de Genève",
            },
            {
              team1: "Rangers",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-718-72x72.png",
              team2: "Aris Limassol",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-2dgHFeK0qWX31tay-72x72.png",
              Result: "RAN 1-1 ARI",
              location: "Ibrox Stadium",
            },
          ],
        },
      ],
    },
    {
      title: "GROUP STAGE MATCH WEEK 6",
      tables: [
        {
          date: "Thursday,December 14,2023",
          matches: [
            {
              team1: "LASK",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-QrK1PBAOzcUbGrtG-72x72.png",
              team2: "Toulouse",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              Result: "LAS 1-2 TFC",
              location: "Raiffeisen Arena",
            },
            {
              team1: "Rennes",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JuHWBs24Ho6mrUtN-72x72.png",
              team2: "Villarreal",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1201-72x72.png",
              Result: "REN 2-3 VIL",
              location: "Roazhon Park",
            },
            {
              team1: "Slavia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              team2: "Servette",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-nkXX9keNBeAI3wKr-72x72.png",
              Result: "SLA 4-0 SFC",
              location: "Fortuna Arena",
            },
            {
              team1: "Panathinaikos",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-uPMy4xA9dtzMfRu9-72x72.png",
              team2: "M Haifa",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-RvsJ9e8bQbyuhl49-72x72.png",
              Result: "PAO 1-2 MHA",
              location: "Stadio Apóstolos Nikolaidis",
            },
            {
              team1: "Leverkusen",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              team2: "Molde",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JRyuyNl7rdCtsUpA-72x72.png",
              Result: "LEV 5-1 MOL",
              location: "BayArena",
            },
            {
              team1: "Roma",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              team2: "Sheriff",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-KmdTlWIJ2kIWgWbq-72x72.png",
              Result: "ROM 3-0 SHE",
              location: "Stadio Olimpico",
            },
            {
              team1: "R. Union SG",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-GWEoWSQmY4lDpzDC-72x72.png",
              team2: "Liverpool",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              Result: "STG 2-1 LIV",
              location: "Lotto Park",
            },
          ],
        },
        {
          date: "Friday,December 15, 2023",
          matches: [
            {
              team1: "West Ham",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
              team2: "Freiburg",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              Result: "WHU 2-0 SCF",
              location: "London Stadium",
            },
            {
              team1: "Raków",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-IxTgLKW61CjukMLj-72x72.png",
              team2: "Atalanta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              Result: "RAK 0-4 ATA",
              location: "ArcelorMittal Park",
            },
            {
              team1: "Ajax",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-NP5DjNgKSxcZw1a4-72x72.png",
              team2: "AEK Athens",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-0vtFj5iXqnka7i5R-72x72.png",
              Result: "AJX 3-1 AEK",
              location: "Johan Cruijff Arena",
            },
            {
              team1: "Aris Limassol",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-2dgHFeK0qWX31tay-72x72.png",
              team2: "Sparta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              Result: "ARI 1-3 SPA",
              location: "Alphamega Stadium",
            },
            {
              team1: "Real Betis",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1213-72x72.png",
              team2: "Rangers",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-718-72x72.png",
              Result: "BET 2-3 RAN",
              location: "Estadio Benito Villamarín",
            },
            {
              team1: "Sporting",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              team2: "Sturm",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-zOZUYEP518ld4YlW-72x72.png",
              Result: "SCP 3-0 STU",
              location: "Estádio José Alvalade",
            },
            {
              team1: "Brighton",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              team2: "Marseille",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-GWEoWSQmY4lDpzDC-72x72.png",
              Result: "BHA 1-0 OM",
              location: "American Express Stadium",
            },
            {
              team1: "Olympiakos",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Xf4ZpijH5iE83BNS-72x72.png",
              team2: "TSC",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wuLC0BJrV4FebxKk-72x72.png",
              Result: "OLY 5-2 TSC",
              location: "Stadio Georgios Karaiskáki",
            },
          ],
        },
      ],
    },
    {
      title: "KNOCKOUT ROUND LEG 1",
      tables: [
        {
          date: "Thursday, February 15",
          matches: [
            {
              team1: "Feyenoord",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-HIYFRGiODIeC8hw5-72x72.png",
              team2: "Roma",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "FEY 1-1 ROM",
              location: "Stadion Feijenoord",
            },
            {
              team1: "Galatasaray",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-yGHwZv5WfXlUOmkL-72x72.png",
              team2: "Sparta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              Result: "GS 3-2 SPA",
              location: "RAMS Park",
            },
            {
              team1: "Young Boys",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-sjsyR42U1th4uOqT-72x72.png",
              team2: "Sporting",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              Result: "YB 1-3 SCP",
              location: "Stadion Wankdorf",
            },
            {
              team1: "Shakhtar D",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-fuposPnXlS5i8r4o-72x72.png",
              team2: "Marseille",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              Result: "SHK 2-2 OM",
              location: "Volksparkstadion",
            },
          ],
        },
        {
          date: "Friday,February 16",
          matches: [
            {
              team1: "Milan",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-761-72x72.png",
              team2: "Rennes",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JuHWBs24Ho6mrUtN-72x72.png",
              Result: "MIL 3-0 REN",
              location: "Stadio Giuseppe Meazza",
            },
            {
              team1: "Benfica",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-IxTgLKW61CjukMLj-72x72.png",
              team2: "Toulouse",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              Result: "SLB 2-1 TFC",
              location: "Estádio do Sport Lisboa e Benfica (da Luz)",
            },
            {
              team1: "Braga",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Z54vcYbLpkIaPhuX-72x72.png",
              team2: "Qarabağ",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              Result: "BRA 2-4 QAR",
              location: "Estádio Municipal de Braga",
            },
            {
              team1: "Lens",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-J8ZabnK7eZRNpGZA-72x72.png",
              team2: "Freiburg",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              Result: "RCL 0-0 SCF",
              location: "Stade Bollaert-Delelis",
            },
          ],
        },
      ],
    },
    {
      title: "KNOCKOUT ROUND LEG 2",
      tables: [
        {
          date: "Thursday, February 22",
          matches: [
            {
              team1: "Freiburg",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              team2: "Lens",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-J8ZabnK7eZRNpGZA-72x72.png",
              Result: "SCF 3-2 RCL",
              location: "Europa-Park Stadion",
            },
            {
              team1: "Rennes",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-JuHWBs24Ho6mrUtN-72x72.png",
              team2: "Milan",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-761-72x72.png",
              Result: "REN 3-2 MIL",
              location: "Roazhon Park",
            },
            {
              team1: "Toulouse",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-k5Y42yhgqfCjCKa6-72x72.png",
              team2: "Benfica",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-OD2wsEahuuXzGQyH-72x72.png",
              Result: "TFC 0-0 SLB",
              location: "Stadium de Toulouse",
            },
            {
              team1: "Qarabağ",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              team2: "Braga",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-Z54vcYbLpkIaPhuX-72x72.png",
              Result: "QAR 2-3 BRA",
              location: "Tofiq Bəhramov adına Respublika stadionu",
            },
          ],
        },
        {
          date: "Friday,February 23",
          matches: [
            {
              team1: "Roma",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              team2: "Feyenoord",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-HIYFRGiODIeC8hw5-72x72.png",
              Result: "ROM (4) 1-1 (2) FEY",
              location: "Stadio Olimpico",
            },
            {
              team1: "Marseille",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              team2: "Shakhtar D",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-fuposPnXlS5i8r4o-72x72.png",
              Result: "OM 3-1 SHK",
              location: "Orange Vélodrome",
            },
            {
              team1: "Sporting",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              team2: "Young Boys",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-sjsyR42U1th4uOqT-72x72.png",
              Result: "SCP 1-1 YB",
              location: "Estádio José Alvalade",
            },
            {
              team1: "Sparta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              team2: "Galatasaray",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-yGHwZv5WfXlUOmkL-72x72.png",
              Result: "SPA 4-1 GS",
              location: "epet ARENA",
            },
          ],
        },
      ],
    },
    {
      title: "ROUND OF 16 LEG 1",
      tables: [
        {
          date: "WEDNESDAY, March 06",
          matches: [
            {
              team1: "Sporting",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              team2: "Atalanta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              Result: "SCP 1-1 ATA",
              location: "Estádio José Alvalade",
            },
          ],
        },
        {
          date: "Thursday,March 07",
          matches: [
            {
              team1: "Sparta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              team2: "Liverpool",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              Result: "SPA 1-5 LIV",
              location: "epet ARENA",
            },
            {
              team1: "Qarabağ",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              team2: "Leverkusen",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-fuposPnXlS5i8r4o-72x72.png",
              Result: "QAR 2-2 LEV",
              location: "Tofiq Bəhramov adına Respublika stadionu",
            },
            {
              team1: "Roma",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              team2: "Brighton",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-72x72.png",
              Result: "ROM 4-0 BHA",
              location: "Stadio Olimpico",
            },
          ],
        },
        {
          date: "Friday, March 08",
          matches: [
            {
              team1: "Freiburg",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              team2: "West Ham",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
              Result: "SCF 1-0 WHU",
              location: "Europa-Park Stadion",
            },
            {
              team1: "Marseille",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              team2: "Villarreal",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-1201-72x72.png",
              Result: "OM 4-0 VIL",
              location: "Orange Vélodrome",
            },
            {
              team1: "Milan",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-761-72x72.png",
              team2: "Slavia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              Result: "MIL 4-2 SLA",
              location: "Stadio Giuseppe Meazza",
            },
            {
              team1: "Benfica",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-OD2wsEahuuXzGQyH-72x72.png",
              team2: "Rangers",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-718-72x72.png",
              Result: "SLB 2-2 RAN",
              location: "Estádio do Sport Lisboa e Benfica (da Luz)",
            },
          ],
        },
      ],
    },
    {
      title: "ROUND OF 16 LEG 2",
      tables: [
        {
          date: "Thursday, March 14",
          matches: [
            {
              team1: "Villarreal",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              team2: "Marseille",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              Result: "VIL 3-1 OM",
              location: "Estadio de la Cerámica",
            },
            {
              team1: "Rangers",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-718-72x72.png",
              team2: "Benfica",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-OD2wsEahuuXzGQyH-72x72.png",
              Result: "RAN 0-1 SLB",
              location: "Ibrox Stadium",
            },
            {
              team1: "West Ham",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
              team2: "Freiburg",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6zUxkidFo6VvNkEJ-72x72.png",
              Result: "WHU 5-0 SCF",
              location: "London Stadium",
            },
            {
              team1: "Slavia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-d0H3A73XkgJ8giPe-72x72.png",
              team2: "Milan",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-761-72x72.png",
              Result: "SLA 1-3 MIL",
              location: "Fortuna Arena",
            },
          ],
        },
        {
          date: "Friday, March 15",
          matches: [
            {
              team1: "Atalanta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              team2: "Sporting",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-S3wsupN3U3e7SOH6-72x72.png",
              Result: "ATA 2-1 SCP",
              location: "Gewiss Stadium",
            },
            {
              team1: "Brighton",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-72x72.png",
              team2: "Roma",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "BHA 1-0 ROM",
              location: "American Express Stadium",
            },
            {
              team1: "Liverpool",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              team2: "Sparta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-AvbyCSdxlfepIB9A-72x72.png",
              Result: "LIV 6-1 SPA",
              location: "Anfield",
            },
            {
              team1: "Leverkusen",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              team2: "Qarabağ",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-wo5HniTW502CcYRz-72x72.png",
              Result: "LEV 3-2 QAR",
              location: "BayArena",
            },
          ],
        },
      ],
    },
    {
      title: "QUARTER-FINALS LEG 1",
      tables: [
        {
          date: "Friday, April 12",
          matches: [
            {
              team1: "Benfica",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-OD2wsEahuuXzGQyH-72x72.png",
              team2: "Marseille",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              Result: "SLB 2-1 OM",
              location: "Estádio do Sport Lisboa e Benfica (da Luz)",
            },
            {
              team1: "Liverpool",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-718-72x72.png",
              team2: "Atalanta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-OD2wsEahuuXzGQyH-72x72.png",
              Result: "LIV 0-3 ATA",
              location: "Anfield",
            },
            {
              team1: "Leverkusen",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              team2: "West Ham",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
              Result: "LEV 2-0 WHU",
              location: "BayArena",
            },
            {
              team1: "Milan",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-761-72x72.png",
              team2: "Roma",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              Result: "MIL 0-1 ROM",
              location: "Stadio Giuseppe Meazza",
            },
          ],
        },
      ],
    },
    {
      title: "QUARTER-FINALS LEG 2",
      tables: [
        {
          date: "Friday, April 19",
          matches: [
            {
              team1: "Marseille",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              team2: "Benfica",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-OD2wsEahuuXzGQyH-72x72.png",
              Result: "OM (4) 1-0 (2) SLB",
              location: "Orange Vélodrome",
            },
            {
              team1: "Roma",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              team2: "Milan",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-761-72x72.png",
              Result: "ROM 2-1 MIL",
              location: "Stadio Olimpico",
            },
            {
              team1: "Atalanta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              team2: "Liverpool",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
              Result: "ATA 0-1 LIV",
              location: "Gewiss Stadium",
            },
            {
              team1: "West Ham",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
              team2: "Leverkusen",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              Result: "WHU 1-1 LEV",
              location: "London Stadium",
            },
          ],
        },
      ],
    },
    {
      title: "SEMI-FINALS LEG 1",
      tables: [
        {
          date: "Friday, May 03",
          matches: [
            {
              team1: "Marseille",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              team2: "Atalanta",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              time: "0:30",
              location: "Orange Vélodrome",
            },
            {
              team1: "Roma",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              team2: "Leverkusen",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              time: "0:30",
              location: "Stadio Olimpico",
            },
          ],
        },
      ],
    },
    {
      title: "SEMI-FINALS LEG 2",
      tables: [
        {
          date: "Friday, May 10",
          matches: [
            {
              team1: "Leverkusen",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-741-72x72.png",
              team2: "Roma",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-REzg1IUt6VABzG8w-72x72.png",
              time: "0:30",
              location: "BayArena",
            },
            {
              team1: "Atalanta",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-762-72x72.png",
              team2: "Marseille",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-3oztNSQHarVkZmVY-72x72.png",
              time: "0:30",
              location: "Gewiss Stadium",
            },
          ],
        },
      ],
    },
    {
      title: "FINAL",
      tables: [
        {
          date: "THURSDAY, May 23",
          matches: [
            {
              team1: "TBC",
              logo1:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              team2: "TBC",
              logo2:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMTkuMDQ3IDI4LjMxMDZWMTU0LjQwNkMyMTkuMDQ3IDIwMS42NzQgMTE5Ljk5MyAyNDAgMTE5Ljk5MyAyNDBDMTE5Ljk5MyAyNDAgMjAuOTUxNyAyMDEuNjgzIDIwLjk1MTcgMTU0LjQwNlYyOC4yMzM2Qzg1LjQ0NTIgMjYuNTU4OSAxMTkuMDg3IDAuMjk4MzcxIDExOS42OTcgMEgxMTkuNzIyQzExOS43MjIgMCAxNDguMzE1IDI2LjcyMjUgMjEzLjU0MSAyOC4yNjI1QzIxNS40OTQgMjguMzEwNiAyMTcuMzI2IDI4LjMyMDIgMjE5LjA0NyAyOC4zMTA2WiIgZmlsbD0iIzk2OTQ5MiIvPgo8cGF0aCBkPSJNMjA3LjUgMzkuNzcxOFYxNTAuMTA1QzIwNy41IDE5MS40NjUgMTE5Ljk5NSAyMjUgMTE5Ljk5NSAyMjVDMTE5Ljk5NSAyMjUgMzIuNSAxOTEuNDczIDMyLjUgMTUwLjEwNVYzOS43MDQ0Qzg5LjQ3NDUgMzguMjM5IDExOS41NDQgMTUuMjYxMSAxMjAuMDgzIDE1SDEyMC4xMDRDMTIwLjEwNCAxNSAxNDUuMDE1IDM4LjM4MjIgMjAyLjYzNiAzOS43Mjk3QzIwNC4zNjIgMzkuNzcxOCAyMDUuOTc5IDM5Ljc4MDIgMjA3LjUgMzkuNzcxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTggNDYuNjQ4NVYxNDcuNTI1QzE5OCAxODUuMzM5IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDQyIDE4NS4zNDcgNDIgMTQ3LjUyNVY0Ni41ODY5QzkyLjc4ODcgNDUuMjQ3MSAxMTkuNTE5IDI0LjIzODcgMTIwIDI0QzEyMCAyNCAxNDIuMjk5IDQ1LjM3OCAxOTMuNjY0IDQ2LjYxQzE5NS4yMDIgNDYuNjQ4NSAxOTYuNjQ0IDQ2LjY1NjIgMTk4IDQ2LjY0ODVaIiBmaWxsPSIjOTY5NDkyIi8+CjxwYXRoIGQ9Ik0xOTggMTQ3LjUyNVYxMjZINDJWMTQ3LjUyNUM0MiAxODUuMzQ3IDExOS45OTUgMjE2IDExOS45OTUgMjE2QzExOS45OTUgMjE2IDE5OCAxODUuMzM5IDE5OCAxNDcuNTI1WiIgZmlsbD0iIzVDNTY1NiIvPgo8cmVjdCB4PSI0MCIgeT0iMTE3IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
              time: "0:30",
              location: "Aviva Stadium",
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
