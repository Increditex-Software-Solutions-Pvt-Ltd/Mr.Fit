import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Commonhome from './pages/Commonhome'
import Teams from './pages/Teams'
import Podcasts from './pages/Podcasts'
import LiveNews from './pages/LiveNews'
import Standings from './pages/Standings'
import ScoresSchedules from './pages/ScoresSchedules'
// import LiveNewsSub from './pages/LiveNewsSub'
import Fantasy from './pages/Fantasy'
import Headlines from './pages/Headlines'
import TeamDetails from './pages/TeamDetails'

const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/live' element={<LiveNews />} />
      <Route path='/category/:title' element={<Commonhome />} />
      <Route path='/category/sub/Teams/:title' element={<Teams />} />
      <Route path='/category/sub/Podcasts/:title' element={<Podcasts />} />
      <Route path='/category/sub/Standings/:title' element={<Standings />} />
      <Route path='/category/sub/Scores & Schedule/:title' element={<ScoresSchedules />} />
      <Route path='/category/sub/Schedule/:title' element={<ScoresSchedules />} />
      <Route path='/category/sub/Live News/:title' element={<LiveNews />} />
      <Route path='/category/sub/Fantasy/:title' element={<Fantasy />} />
      <Route path="/category/headlines/:title" element={<Headlines />} />
      <Route path="/team/:name" element={<TeamDetails />} />
    </Routes>

  )
}

export default AllRoute