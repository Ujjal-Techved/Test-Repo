import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './OurJourney.module.css';

const OurJourney = ({ insuranceData }) => {
    // Return null if data for 'OurJourney' is not available
    if (!insuranceData?.OurJourney) {
        return null;
    }

    // Destructure necessary data from props for easier use
    const { Title, Description, JourneyCards } = insuranceData?.OurJourney;

    return (
        <div className={styles.OurJourney_wrapper + ' pd-t pd-b'}>
            <Container>
                {/* Section title and description */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Journey cards displayed in a responsive grid */}
                <Row className={styles.life_insure_row}>
                    {JourneyCards?.map((item, index) => (
                        <Col
                            key={index}
                            lg="3"  // 4 cards per row on large screens
                            xs="6"  // 2 cards per row on extra small screens
                            className={styles.life_insure_col}
                        >
                            {/* Individual journey card */}
                            <div className={styles.life_insure_Card}>
                                <div className={styles.life_insure_counts}>
                                    {/* Card image, if available */}
                                    {item?.Image?.url && (
                                        <img
                                            src={process.env.NEXT_PUBLIC_APP_API + item.Image.url}
                                            alt={item.Image.alternativeText || 'Feature Image'}
                                        />
                                    )}

                                    {/* Card title */}
                                    <span>{item?.Title}</span>

                                    {/* Card description */}
                                    <p>{item?.SubTitle}</p>
                                </div>

                                {/* Static financial year section - can be made dynamic if needed */}
                                <div className={styles.life_insure_fy}>
                                    <p>FY 21-22 <span>1.2 Mn+</span></p>
                                    <p>FY 21-22 <span>1.2 Mn+</span></p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default OurJourney;
