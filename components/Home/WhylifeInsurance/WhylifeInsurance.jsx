import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './WhylifeInsurance.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const WhylifeInsurance = ({ whylifeInsurData }) => {

    // Prevent rendering if `whylifeInsurData` is missing
    if (!whylifeInsurData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, ButtonText1, ButtonText2 } = whylifeInsurData?.WhyLife;

    return (
        <div>
            <Container>
                <div className={styles.insure_wrapper}>
                    <Row className={styles.insure_main}>
                        {/* Left side: Description and buttons */}
                        <Col lg="6" className={styles.insure_description}>
                            {/* Title and subtitle rendered using the TitleSubtitle component */}
                            <TitleSubtitle
                                title={Title}
                                subtitle={Description}
                                extraClass={"leftAligned"} // Custom class for left-aligned content
                            />
                            <div className={styles.insure_btn}>
                                {/* Buttons */}
                                <a className='redBtn redborder trasborder'>{ButtonText1}</a>
                                <a className='whiteBtn redborder'>{ButtonText2}</a>
                            </div>
                        </Col>
                        {/* Right side: Image */}
                        <Col lg="5" className={styles.insure_imgsrc}>
                            <img src='images/home/lifeinsurance.png' alt='life-insurance' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default WhylifeInsurance;
