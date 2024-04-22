import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Commonhome from "./pages/Commonhome";
import Teams from "./pages/Teams";
import Podcasts from "./pages/Podcasts";
import LiveNews from "./pages/LiveNews";
import Standings from "./pages/Standings";
import ScoresSchedules from "./pages/ScoresSchedules";
// import LiveNewsSub from './pages/LiveNewsSub'
import Fantasy from "./pages/Fantasy";
import Headlines from "./pages/Headlines";
import TeamDetails from "./pages/TeamDetails";
import PlayerDetails from "./pages/PlayerDetails";
import SuperBowlNFL from "./pages/SuperBowlNFL";
import NFLDraft from "./pages/NFLDraft";
import OddsPicks from "./pages/OddsPicks";
import Newsletters from "./pages/Newsletters";
import Prospects from "./pages/Prospects";
// import TeamDStats from "./SubComponents/TeamDStats";
// import TeamStatsPage from "./pages/TeamStatsPage";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/live" element={<LiveNews />} />
      <Route path="/category/:title" element={<Commonhome />} />
      <Route path="/category/sub/Teams/:title" element={<Teams />} />
      <Route path="/category/sub/Podcasts/:title" element={<Podcasts />} />
      <Route path="/category/sub/Standings/:title" element={<Standings />} />
      <Route
        path="/category/sub/Scores & Schedule/:title"
        element={<ScoresSchedules />}
      />
      <Route
        path="/category/sub/Schedule/:title"
        element={<ScoresSchedules />}
      />
      <Route path="/category/sub/Live News/:title" element={<LiveNews />} />
      <Route path="/category/sub/Fantasy/:title" element={<Fantasy />} />
      <Route
        path="/category/sub/Super Bowl/:title"
        element={<SuperBowlNFL />}
      />
      <Route path="/category/sub/NFL Draft/:title" element={<NFLDraft />} />
      <Route
        path="/category/sub/OddsPicks/:title/:sort?"
        element={<OddsPicks />}
      />
      <Route
        path="/category/sub/newsletter/:title/:name?"
        element={<Newsletters />}
      />
      <Route
        path="/category/sub/prospects/:title/:name?"
        element={<Prospects />}
      />
      <Route path="/category/headlines/:title" element={<Headlines />} />
      <Route path="/team/:title/:name?" element={<TeamDetails />} />
      <Route path="/team/Standings/:title/:name?" element={<Standings />} />
      {/* <Route path="/team/Schedules/:title" element={<ScoresSchedules />} />
      <Route path="/team/Stats/:title/:name?" element={<TeamStatsPage />} /> */}

      <Route
        path="/playerDetails/:title/:playername?"
        element={<PlayerDetails />}
      />
    </Routes>
  );
};

export default AllRoute;
