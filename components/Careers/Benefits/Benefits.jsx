import React from 'react';
import styles from './Benefits.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';


const Benefits = ({benefitsData}) => {

// Prevent rendering if `promisesData` is missing or undefined
if (!benefitsData?.Benefits) {
    return null;
}

// Destructure API response data for cleaner code and easier access
const { Title, Description, BenefitsCards } = benefitsData?.Benefits;


return (
        <div>
            <Container>
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />
                <div className={styles.benefits_wrapper}>
                    <Row className={styles.benefits_main}>
                        {BenefitsCards?.map((benefit, index) => (
                            <Col key={index} lg="4" xs="12">
                                <div className={styles.benefits_card}>
                                    <img src={process.env.NEXT_PUBLIC_APP_API +benefit?.Image?.url} alt={benefit?.Image?.alternativeText} />
                                    <p>{benefit?.Title}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Benefits;
