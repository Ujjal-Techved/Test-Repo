import React from 'react';
import styles from './Promises.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { richTextToHtml } from "../../../utils/richTextToHtml";

const Promises = ({ promisesData }) => {

    // Prevent rendering if `promisesData` is missing or undefined
    if (!promisesData) {
        return null;
    }

    // Destructure API response data for cleaner code and easier access
    const { Title, Description, ValueCards } = promisesData?.ValueSection;

    return (
        <div>
            <Container>
                {/* Section Title and Subtitle */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Wrapper for all promise cards */}
                <div className={styles.promise_wrapper}>
                    <Row>
                        {/* Loop through ValueCards and render each promise */}
                        {ValueCards?.map((promise, index) => (
                            <Col lg="4" xs="12" key={index}>
                                <div className={styles.promise_cards}>
                                    
                                    {/* Card Title with Image */}
                                    <div className={styles.promise_title}>
                                        <h3>{promise?.Title}</h3>
                                        <img  
                                            src={process.env.NEXT_PUBLIC_APP_API + promise?.Image?.url} 
                                            alt={promise?.Image?.alternativeText || 'Promise Image'} 
                                        />
                                    </div>

                                    {/* Description with rich text formatting */}
                                    <div className={`${styles.promise_text} cms-data`}>
                                        <span>{richTextToHtml(promise?.Description)}</span>

                                        {/* If there are additional bullet points, render as a list */}
                                        {/* <ul>
                                            {promise?.points?.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul> */}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Promises;
