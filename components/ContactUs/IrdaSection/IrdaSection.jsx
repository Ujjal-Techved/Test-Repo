// Import required dependencies
import React from 'react'; // Import React for functional component
import styles from './IrdaSection.module.css'; // Import CSS module for component-specific styling
import { Container } from 'reactstrap'; // Import Bootstrap container for layout

// Functional component to display the IRDA section
const IrdaSection = () => {
    return (
        <div > {/* Wrapper div for IRDA section styling */}
            <Container className={styles.IrdaContainer}> {/* Bootstrap container for responsive layout */}

                <div>
                    {/* Display License Category */}
                    <p>License Category: <span>Life</span></p>

                    {/* Display CIN (Corporate Identity Number) */}
                    <p className='mb-3'>CIN:- <span>U66010MH2006PLC165288</span></p>
                </div>

                {/* IRDA Logo Image */}
                <img
                    className='mb-3 img-fluid' // Margin bottom and responsive image class
                    src='/images/contact-us/irda.svg' // Static image source for IRDA
                    alt='irda' // Alternative text for accessibility
                />


                <div>

                    {/* Display IRDAI Registration Number */}
                    <p>IRDAI Registration No: <span>133</span></p>

                    {/* Display Validity Date */}
                    <p>(Validity 31st March 2025)</p>
                </div>

            </Container>
        </div>
    );
}

export default IrdaSection; // Export the component for use in other parts of the application
