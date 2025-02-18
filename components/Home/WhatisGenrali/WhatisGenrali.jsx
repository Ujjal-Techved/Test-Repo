import React from 'react'
import { Container } from 'reactstrap'
import styles from './WhatisGenrali.module.css'

const WhatisGenrali = ({ whatIsData }) => {

   // Prevent rendering if `whatIsData` is missing
   if (!whatIsData) {
    return null;
  }

  // Destructure API response data for cleaner code
  const { Title, Description } = whatIsData?.WhatIs;

  return (
    <div className='pd-b'>
        <Container>
            <div className={styles.genrali_wrapper}>
                {/* Displaying a static logo image */}
                <img src='images/home/fgli-logo.png' alt="FGLI Logo"></img>
                {/* Title from API response */}
                <h3>{Title}</h3>
                {/* Description content: Assuming it's an array and accessing the first element */}
                <p>{Description[0].children[0].text}</p>
            </div>
        </Container>
    </div>
  )
}

export default WhatisGenrali;
