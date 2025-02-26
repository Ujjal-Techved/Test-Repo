import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './ReportsDiscloser.module.css';

const ReportsDiscloser = ({ reportsData }) => {

    // Prevent rendering if `reportsData` is missing to avoid errors
    if (!reportsData?.Reports) {
        return null;
    }

    // Destructure API response data for cleaner and more readable code
    const { Title, Description, ReportItems } = reportsData?.Reports;

    return (
        <div className='pd-t pd-b'>
            <Container>
                {/* Section Title and Description */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Reports List */}
                <Row className={styles.reports_disclosure_row}>
                    {ReportItems?.map((item, index) => (
                        <Col lg="3" key={index}>
                            {/* Report Card with a clickable link */}
                            <a href={item?.LinkUrl} className={styles.reports_disclosure_card} target="_blank" rel="noopener noreferrer">
                                <div className={styles.reports_disclosure_title}>
                                    {/* Report Image */}
                                    <img src={process.env.NEXT_PUBLIC_APP_API + item?.Image.url} alt={item.Image.alternativeText} />
                                    
                                    {/* Report Title */}
                                    <p>{item?.Title}</p>
                                </div>

                                {/* Right Arrow Icon for Navigation */}
                                <div>
                                    <img src="/images/reach-us/arrow-right.svg" alt="Navigate to Report" />
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
