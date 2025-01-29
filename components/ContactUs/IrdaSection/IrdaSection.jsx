import React from 'react';
import styles from './IrdaSection.module.css'
import { Container } from 'reactstrap';

const IrdaSection = () => {
    return (
        <div className={styles.IrdaContainer}>
            <Container>
                <img className='mb-3 img-fluid' src='/images/contact-us/irda.svg' alt='irda' />
                <p>License Category: <span>Life</span></p>
                <p className='mb-3'>CIN:- <span>U66010MH2006PLC165288</span></p>
                <p>IRDAI Registration No: <span>133</span></p>
                <p>(Validity 31st March 2025)</p>
            </Container>
        </div>
    )
}

export default IrdaSection