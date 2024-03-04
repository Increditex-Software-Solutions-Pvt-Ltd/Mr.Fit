import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Commonhome from './pages/Commonhome'
import Teams from './pages/Teams'

const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/category/:title' element={<Commonhome />} />
      <Route path='/category/sub/Teams/:title' element={<Teams />} />
      {/* <Route path='/category/sub/Home/:title' element={<Navigate replace to={'/category/:title'}/>} /> */}

    </Routes>
  )
}

export default AllRoute