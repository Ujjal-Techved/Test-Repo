import React from 'react';
import styles from './IrdaSection.module.css'
import { Container } from 'reactstrap';

const IrdaSection = () => {
    return (
        <Container>
            <div className={styles.IrdaContainer}>

                <img className='mb-lg-0 mb-3 img-fluid' src='/images/contact-us/irda.svg' alt='irda' />
                <div>
                    <p>License Category: <span>Life</span></p>
                    <p className='mb-lg-0 mb-3'>CIN:- <span>U66010MH2006PLC165288</span></p>
                </div>
                <div>
                    <p>IRDAI Registration No: <span>133</span></p>
                    <p>(Validity 31st March 2025)</p>
                </div>

            </div>
        </Container>
    )
}

export default IrdaSection