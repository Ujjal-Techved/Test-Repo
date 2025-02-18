import React from 'react'
import styles from './ProtectPlan.module.css'
import { Col, Container, Row } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const ProtectPlan = ({ protectplanData }) => {

    // Prevent rendering if `protectplanData` is missing
    if (!protectplanData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, StartProtectingCard } = protectplanData?.StartProtecting;

    return (
        <div className='pd-t pd-b'>
            <Container>
                {/* Title and subtitle section */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />
                <Row className={styles.protect_plan_row + ' pb-0'}>
                    {/* Iterate through each item in StartProtectingCard and render a column */}
                    {StartProtectingCard?.map((item, index) => (
                        <Col lg="4" md="12" className={styles.protect_plan_col}>
                            <div className={styles.protect_plan_Card}>
                                {/* Title of the card */}
                                <span>{item?.Title}</span>

                                {/* Description of the card */}
                                <p>{item?.Description}</p>

                                {/* Image associated with the plan */}
                                <img 
                                    className={styles.plan_img} 
                                    src={process.env.NEXT_PUBLIC_APP_API + item?.Image?.url} 
                                    alt={item?.Image?.alternativeText} 
                                />

                                {/* Link to more details about the plan */}
                                <a href={item?.LinkUrl} className={styles.protect_plan_linktext}>
                                    {item?.LinkText}
                                    {/* Arrow icon for the link */}
                                    <img className={styles.protect_plan_arrow} src={'/images/reach-us/arrow-right.svg'} />
                                </a>

                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProtectPlan;
