import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './MediaCenter.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const MediaCenter = ({ mediacenterData }) => {

    // Prevent rendering if `mediacenterData` is missing
    if (!mediacenterData?.MediaCenter) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, MediaCard } = mediacenterData?.MediaCenter;

    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />
                <Row className={styles.protect_plan_row}>
                    {MediaCard?.map((item, index) => (
                        <Col lg="4" md="12" className={styles.protect_plan_col} key={index}>
                            <div className={styles.protect_plan_Card}>
                                <span>{item?.Title}</span>
                                <p>{item?.Description}</p>
                                <img className={styles.plan_img} src={process.env.NEXT_PUBLIC_APP_API + item?.Image.url} alt={item.Image.alternativeText} />
                                <a href={item?.LinkUrl} className={styles.protect_plan_linktext} target="_blank"
                                    rel="noopener noreferrer">
                                    Know More
                                    <img className={styles.protect_plan_arrow} src={'/images/reach-us/arrow-right.svg'} alt="arrow" />
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default MediaCenter;