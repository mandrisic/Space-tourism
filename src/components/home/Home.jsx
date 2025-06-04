import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'

export const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/destination');
    }
  return (
    <div className={styles.wrapper}>
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
            <section className={styles.btnContainer} onClick={handleClick}>
                <div className={styles.btn}><p>Explore</p></div>
            </section>
        </div>
    </div>
  )
}
