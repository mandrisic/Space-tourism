import React, { useState } from 'react'
import styles from './Destination.module.scss'
import data from '../../data.json'


export const Destination = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    let destination = data.destinations[activeIndex];

  return (
    <div className={styles.destinationContainer} key={activeIndex}>
        <h2 className={styles.title}><span>01</span> Pick your destination</h2>
        <div className={styles.contentContainer}>
            <section className={styles.imageContainer}>
            <img 
                    src={destination.images.png} 
                    alt={destination.name} 
                    className={styles.destinationImage} 
                    />
                </section>
            <section className={styles.textContainer}>
                <nav className={styles.navContainer}>
                    <ul className={styles.list}>
                        <li onClick={() => handleClick(0)} className={activeIndex === 0 ? styles.activeOption : ''}>Moon</li>
                        <li onClick={() => handleClick(1)} className={activeIndex === 1 ? styles.activeOption : ''}>Mars</li>
                        <li onClick={() => handleClick(2)} className={activeIndex === 2 ? styles.activeOption : ''}>Europa</li>
                        <li onClick={() => handleClick(3)} className={activeIndex === 3 ? styles.activeOption : ''}>Titan</li>
                    </ul>
                </nav>
                
                <h1 className={styles.heading}>{destination.name}</h1>
                <p className={styles.description}>{destination.description}</p>
                <div className={styles.line}></div>
                <div className={styles.distanceContainer}>
                    <div className={styles.distance}>
                        <p>Avg. distance</p>
                        <h3>{destination.distance}</h3>
                    </div>
                    <div className={styles.travelTime}>
                        <p>Est. travel time</p>
                        <h3>{destination.travel}</h3>
                    </div>
                </div>
            </section>  
        </div>
    </div>
  )
}
