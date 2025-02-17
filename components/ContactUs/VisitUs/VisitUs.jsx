// Import required dependencies
import React from 'react';
import style from './VisitUs.module.css'; // Import CSS module for styling
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'; // Import title and subtitle component

// Functional component to display "Visit Us" section
const VisitUs = ({ visitUsCard }) => {
    return (
        <div className={style.visitUs_wrapper}> {/* Wrapper for Visit Us section */}
            <Container>
                <Row className='align-items-center'> {/* Align items vertically */}
                    
                    {/* Left Column - Title, Subtitle, and Button */}
                    <Col lg="6">
                        {/* Display Title and Description from visitUsCard props */}
                        <TitleSubtitle
                            title={visitUsCard?.Title}
                            subtitle={visitUsCard?.Description}
                            extraClass="leftAligned"
                        />

                        {/* Link button with arrow icon */}
                        <a href={visitUsCard?.LinkUrl} className='redArrowBtn w-sm-100'>
                            {visitUsCard?.LinkText} <span>&#10095;</span> {/* Unicode for right arrow */}
                        </a>
                    </Col>

                    {/* Right Column - Image */}
                    <Col lg="6">
                        {/* Display contact locator image */}
                        <img className='w-100 mt-md-0 mt-3' src='/images/contact-us/locator.png' alt="Visit Us Location" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default VisitUs; // Export the component
