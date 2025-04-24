import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './OurJourney.module.css';

const OurJourney = ({ insuranceData }) => {

    // Prevent rendering if `insuranceData` is missing
    if (!insuranceData?.OurJourney) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, FeatureList } = insuranceData?.OurJourney;

    return (
        <div className='pd-t pd-b'>
            <Container>
                {/* Title and subtitle section */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Display features in a responsive grid layout */}
                <Row className={styles.life_insure_row}>
                    {FeatureList?.map((item, index) => (
                        <Col
                            key={index}
                            lg="3"  // Large screen: 4 columns (25% width each)
                            xs="6"  // Small screen: 2 columns (50% width each)
                            className={styles.life_insure_col}
                        >
                            {/* Feature card */}
                            <div className={styles.life_insure_Card}>
                                <div className={styles.life_insure_counts}>
                                    {/* Display feature image */}
                                    {item?.Image?.url && (
                                        <img
                                            src={process.env.NEXT_PUBLIC_APP_API + item.Image.url}
                                            alt={item.Image.alternativeText || 'Feature Image'}
                                        />
                                    )}

                                    {/* Display feature title */}
                                    <span>{item?.Title}</span>

                                    {/* Display feature description */}
                                    <p>{item?.Description}</p>
                                </div>
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
}

export default OurJourney;
