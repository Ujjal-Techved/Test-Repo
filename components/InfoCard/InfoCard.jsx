import React from 'react'
import styles from './InfoCard.module.css';
import { Col, Container, Row } from 'reactstrap';

const InfoCard = () => {
    return (
        <Container>
                <Row>
                    <Col xs="12" sm="6" md="4" lg="4">
                        <div className={styles.info_cards}>
                            <h3>Essential Documents</h3>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}

export default InfoCard