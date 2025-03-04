import React from 'react';
import styles from './LifeInsurance.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const LifeInsurance = ({ lifeInsurData }) => {
   
    // Prevent rendering if `lifeInsurData` is missing
    if (!lifeInsurData?.LifeInsurance) {
        return null;
    }

    // Destructure the `LifeInsurance` data from the API response for cleaner code
    const { Title, Description, FeatureList } = lifeInsurData?.LifeInsurance;

    return (
        <div className='pd-t'>
            <Container>
                {/* Title and subtitle rendered using the TitleSubtitle component */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />
                <Row className={styles.life_insure_row}>
                    {/* Map through the FeatureList and render each feature in a column */}
                    {FeatureList?.map((item, index) => (
                        <Col key={index} lg="3" xs="6" className={styles.life_insure_col}>
                            <div className={styles.life_insure_Card}>
                                {/* Image for the feature */}
                                <img src={process.env.NEXT_PUBLIC_APP_API + item?.Image?.url} alt={item?.Image?.alternativeText} />
                                {/* Title of the feature */}
                                <span>{item?.Title}</span>
                                {/* Description of the feature */}
                                <p>{item?.Description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default LifeInsurance;
