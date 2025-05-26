import React from 'react'
import './styles/scss/main.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './components/home/Home'
import { Destination } from './components/destination/Destination'
import { Crew } from './components/crew/Crew'
import { Technology } from './components/technology/Technology'
import { Nav } from './components/nav/Nav';

function App() {
  const location = useLocation();

  const getBg = () => {
    if (location.pathname === '/') return 'home-bg'
    if (location.pathname.includes('destination')) return 'destination-bg'
    if (location.pathname.includes('crew')) return 'crew-bg'
    if (location.pathname.includes('technology')) return 'technology-bg'
    return '';
  }

  return (
    <div className={`wrapper ${getBg()}`}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  )
}

export default App
