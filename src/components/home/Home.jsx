import React, { useState } from 'react';
import styles from './Home.module.scss'

export const Home = () => {
    const [hamb, setHamb] = useState(false);
    const handleHamb = () => {
        setHamb(!hamb);
    }
  return (
    <div className={styles.wrapper}>
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>
            <svg className={styles.hamburger} onClick={handleHamb} xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
            <div className={`${styles.listContainer} ${hamb ? styles.open : ''}`}>
                <svg className={styles.close} onClick={handleHamb} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
                <ul className={styles.list}>
                    <li><a href="#home"><span>00</span> Home</a></li>
                    <li><a href="#destination"><span>01</span> Destination</a></li>
                    <li><a href="#crew"><span>02</span> Crew</a></li>
                    <li><a href="#technology"><span>03</span> Technology</a></li>
                </ul>
            </div>
        </nav>

        <div className={styles.mainContent}>
            <section className={styles.intro}>
                <p className={styles.subtitle}>So, you want to travel to</p>
                <h1 className={styles.title}>Space</h1>
                <p className={styles.description}>
                    Let’s face it; if you want to go to space, you might as well genuinely 
                    go to outer space and not hover kind of on the edge of it. Well sit back, 
                    and relax because we’ll give you a truly out of this world experience!
                </p>
            </section>
            <section className={styles.btnContainer}>
                <div className={styles.btn}><p>Explore</p></div>
            </section>
        </div>
    </div>
  )
}
