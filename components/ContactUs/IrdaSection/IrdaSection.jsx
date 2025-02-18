// Import required dependencies
import React from 'react'; // Import React for functional component
import styles from './IrdaSection.module.css'; // Import CSS module for component-specific styling
import { Container } from 'reactstrap'; // Import Bootstrap container for layout

// Functional component to display the IRDA section
const IrdaSection = ({ irdaSectionData }) => {

    // Prevent rendering if `irdaSectionData` is missing to avoid errors
    if (!irdaSectionData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { LeftText, RightText, Image } = irdaSectionData?.IrdaSection;

    return (
        <div > {/* Wrapper div for IRDA section styling */}
            <Container className={styles.IrdaContainer}> {/* Bootstrap container for responsive layout */}

                <div>
                    {/* Display License Category */}
                    <p>
                        {RightText[0]?.children[0]?.text} {/* License Category Label */}
                        <span>{RightText[0]?.children[1]?.text}</span> {/* License Category Value */}
                    </p>

                    {/* Display CIN (Corporate Identity Number) */}
                    <p className='mb-3'>
                        {RightText[1]?.children[0]?.text} {/* CIN Label */}
                        <span>{RightText[1]?.children[1]?.text}</span> {/* CIN Value */}
                    </p>
                </div>

                {/* IRDA Logo Image */}
                <img
                    className='mb-3 img-fluid' // Adds margin-bottom and ensures responsiveness
                    src={process.env.NEXT_PUBLIC_APP_API + Image?.url} // Constructs image URL dynamically
                    alt={Image?.alternativeText || "IRDA Logo"} // Adds alternative text for accessibility
                />


                <div>

                    {/* Display IRDAI Registration Number */}
                    <p>
                        {LeftText[0]?.children[0]?.text} {/* IRDAI Registration Label */}
                        <span>{LeftText[0]?.children[1]?.text}</span> {/* IRDAI Registration Number */}
                    </p>

                    {/* Display Validity Date */}
                    <p>{LeftText[1]?.children[0]?.text}</p> {/* Validity Period */}
                </div>

            </Container>
        </div>
    );
}

export default IrdaSection; // Export the component for use in other parts of the application
