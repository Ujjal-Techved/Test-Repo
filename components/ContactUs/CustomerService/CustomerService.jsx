// Import required dependencies
import React from 'react'; // Import React for functional component
import styles from './CustomerService.module.css'; // Import CSS module for component-specific styling
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'; // Import reusable title and subtitle component
import { Col, Container, Row } from 'reactstrap'; // Import Bootstrap components for responsive layout

// Functional component to display the "Customer Service" section
const CustomerService = ({ csData }) => {
    return (
        <div className={styles.Customer_wrapper}> {/* Wrapper div for styling */}
            <Container className='mt-negative'> {/* Bootstrap container with custom margin class */}
                <div>
                    {/* Display Title and Subtitle dynamically from csData props */}
                    <TitleSubtitle
                        title={csData?.Title} // Fetch title from props
                        subtitle={csData?.Description} // Fetch description from props
                    />

                    {/* Map through the list of service categories */}
                    {csData?.CategoryList?.map((service, index) => (
                        <div key={index} className={styles.service_cards_main}> {/* Service category wrapper */}
                            
                            {/* Service category title and image */}
                            <div className={styles.service_cards_title}>
                                <img 
                                    src={process.env.NEXT_PUBLIC_APP_API + service?.Image?.url} // Fetch image dynamically
                                    alt={service.title} // Alternative text for accessibility
                                />
                                <h4>{service.Title}</h4> {/* Display service category title */}
                            </div>

                            {/* List of service links within each category */}
                            <Row className={styles.service_card_list}>
                                {service?.ListItem?.map((link, idx) => (
                                    <Col key={idx} lg='4' xs='12'> {/* 4-column layout on large screens, full width on small screens */}
                                        {/* Clickable service link with right arrow icon */}
                                        <a href={link.LinkUrl}>
                                            {link.LinkText} {/* Display link text dynamically */}
                                            <img src='/images/reach-us/arrow-right.svg' alt='arrow' /> {/* Arrow icon */}
                                        </a>
                                    </Col>
                                ))}
                            </Row>

                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default CustomerService; // Export the component for use in other parts of the application
