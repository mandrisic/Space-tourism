import React, { useState } from 'react'
import styles from './Crew.module.scss'
import data from '../../data.json'

export const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
      const handleClick = (index) => {
          setActiveIndex(index);
      }
  
      let crew = data.crew[activeIndex];
  
    return (
      <div className={styles.crewContainer} key={activeIndex}>
          <h2 className={styles.title}><span>02</span> Meet your crew</h2>
          <div className={styles.contentContainer}>
          <section className={styles.textContainer}>
            <p className={styles.role}>{crew.role}</p>
            <h1 className={styles.heading}>{crew.name}</h1>
            <p className={styles.description}>{crew.bio}</p>
          </section>  

          <div className={styles.dots}>
                <div onClick={() => handleClick(0)} className={activeIndex === 0 ? `${styles.dot} ${styles.activeDot}` : styles.dot}></div>
                <div onClick={() => handleClick(1)} className={activeIndex === 1 ? `${styles.dot} ${styles.activeDot}` : styles.dot}></div>
                <div onClick={() => handleClick(2)} className={activeIndex === 2 ? `${styles.dot} ${styles.activeDot}` : styles.dot}></div>
                <div onClick={() => handleClick(3)} className={activeIndex === 3 ? `${styles.dot} ${styles.activeDot}` : styles.dot}></div>
            </div>

              <section className={styles.imageContainer}>
              <img 
                      src={crew.images.png} 
                      alt={crew.name} 
                      className={styles.crewImage} 
                      />
                  </section>
          </div>
      </div>
    )
}
