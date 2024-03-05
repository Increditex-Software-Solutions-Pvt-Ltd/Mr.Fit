import React from 'react'
import './App.css';
// import Navbar from './components/Navbar';
import AllRoute from './AllRoute';
import { WindowWidthProvider } from './contexts/WindowWidth';

const App = () => {

  return (
    <WindowWidthProvider>
      <AllRoute />
    </WindowWidthProvider>

  )
}

export default App