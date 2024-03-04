import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Commonhome from './pages/Commonhome'
import Teams from './pages/Teams'
import Podcasts from './pages/Podcasts'
import LiveNews from './pages/LiveNews'

const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/live' element={<LiveNews />} />
      <Route path='/category/:title' element={<Commonhome />} />
      <Route path='/category/sub/Teams/:title' element={<Teams />} />
      <Route path='/category/sub/Podcasts/:title' element={<Podcasts />} />

    </Routes>
  )
}

export default AllRoute