import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './ReportsDiscloser.module.css'



const ReportsDiscloser = ({reportsData}) => {
    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Reports and Disclosures"}
                    subtitle={"This section lists Future Generali Life’s performance information including annual reports, bonus declaration, and public disclosures"}
                />
                <Row className={styles.reports_disclosure_row}>
                    {reportsData.map((item, index) => (
                        <Col lg="3" key={index}>
                            <a href={item.link} className={styles.reports_disclosure_card}>
                                <div className={styles.reports_disclosure_title}>
                                    <img src={item.image} alt="image" />
                                    <p>{item.title}</p>
                                </div>
                                <div>
                                    <img src="/images/reach-us/arrow-right.svg" alt="arrow" />
                                </div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ReportsDiscloser;
