import React from 'react'
import { Container } from 'reactstrap'
import styles from './WhatisGenrali.module.css'

const WhatisGenrali = () => {
  return (
    <div>
        <Container>
            <div className={styles.genrali_wrapper}>
                <img src='images/home/fgli-logo.png'></img>
                <h3>What is genrali?</h3>
                <p>Generali is one of the largest global insurance and asset management providers, present in over 50 countries in the world, with a total premium income of € 82.5 billion in 2023.</p>
            </div>
        </Container>
    </div>
  )
}

export default WhatisGenrali