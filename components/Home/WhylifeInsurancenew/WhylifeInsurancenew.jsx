import React from 'react'
import styles from './WhylifeInsurancenew.module.css'
import { Col, Container, Row } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const WhylifeInsurancenew = ({ whylifeInsurData, TermplanCardData }) => {

    // Prevent rendering if `whylifeInsurData` is missing
    if (!whylifeInsurData?.WhyLife) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, ButtonText1, ButtonText2, ButtonLink1, ButtonLink2 } = whylifeInsurData?.WhyLife;

    return (
        <div className='pd-t pd-b'>
            <Container>
                <div className={styles.insure_wrapper}>
                    {/* Title and subtitle rendered using the TitleSubtitle component */}
                    <TitleSubtitle
                        title={Title}
                        subtitle={Description}
                    />
                    {/* Loop through the term plan data to render UI */}
                    {TermplanCardData.map((termplan, index) => (
                        <div className={styles.insure_main}>
                            {/* Left side: Description and buttons */}
                            <div className={styles.insure_description}>
                                <div className={styles.insure_card}>
                                    <Row className={styles.guide_card_row}>
                                        {/* Mapping through the TermplanList to render each benefit card */}
                                        {termplan.TermplanList.map((item, i) => (
                                            <Col
                                                lg="4"
                                                md="6"
                                                xs="6"
                                                key={item.id}
                                                className={`${styles.guide_card_col} 
                          `}
                                            >
                                                <div className={styles.guide_card}>
                                                    <img src={item.Image.url} alt={item.Title} className={styles.termplan_image} />
                                                    <h4>{item.Title}</h4>
                                                    {/* <p>{item.Description}</p> */}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>

                                    <div className={styles.insure_btn}>
                                        {/* Buttons */}
                                        <a href={ButtonLink1} className='redBtn redborder trasborder'>{ButtonText1}</a>
                                        <a href={ButtonLink2} className='whiteBtn redborder'>{ButtonText2}</a>
                                    </div>
                                </div>

                            </div>
                            {/* Right side: Image */}
                            <div className={styles.insure_imgsrc}>
                                <img src='images/home/lifeinsurance.png' alt='life-insurance' />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default WhylifeInsurancenew