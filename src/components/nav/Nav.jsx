import React, { useState } from 'react'
import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
   const [hamb, setHamb] = useState(false);
      const handleHamb = () => {
          setHamb(!hamb);
      }
    return (
        <>
          <nav className={styles.nav}>
              <div className={styles.logoContainer}>
                  <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
              </div>
              <svg className={styles.hamburger} onClick={handleHamb} xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
              <div className={`${styles.listContainer} ${hamb ? styles.open : ''}`}>
                  <svg className={styles.close} onClick={handleHamb} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
                  <ul className={styles.list}>
                      <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleHamb}><span>00</span> Home</NavLink></li>
                      <li><NavLink to="/destination" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleHamb}><span>01</span> Destination</NavLink></li>
                      <li><NavLink to="/crew" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleHamb}><span>02</span> Crew</NavLink></li>
                      <li><NavLink to="/technology" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleHamb}><span>03</span> Technology</NavLink></li>
                  </ul>
              </div>
          </nav>
      </>
    )
}
