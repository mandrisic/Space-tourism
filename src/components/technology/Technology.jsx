import React, { useState, useEffect } from 'react'
import data from '../../data.json'
import styles from './Technology.module.scss'

export const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

      const handleClick = (index) => {
          setActiveIndex(index);
      }

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  
      let tech = data.technology[activeIndex];
      const imageUrl = isMobile ? tech.images.landscape : tech.images.portrait;
  
    return (
      <div className={styles.techContainer} key={activeIndex}>
          <h2 className={styles.title}><span>03</span> Space launch 101</h2>
          <div className={styles.contentContainer}>
            <section className={styles.imageContainer} style={{ backgroundImage: `url(${imageUrl})`}}></section>
            <section className={styles.textContainer}>
              <div className={styles.dots}>
                <div onClick={() => handleClick(0)} className={activeIndex === 0 ? `${styles.dot} ${styles.activeDot}` : styles.dot}>1</div>
                <div onClick={() => handleClick(1)} className={activeIndex === 1 ? `${styles.dot} ${styles.activeDot}` : styles.dot}>2</div>
                <div onClick={() => handleClick(2)} className={activeIndex === 2 ? `${styles.dot} ${styles.activeDot}` : styles.dot}>3</div>
              </div>
              <div className={styles.text}>
                <p className={styles.subheading}>The terminology...</p>
                <h1 className={styles.heading}>{tech.name}</h1>
                <p className={styles.description}>{tech.description}</p>
              </div>
            </section>  
          </div>
      </div>
    )
}
