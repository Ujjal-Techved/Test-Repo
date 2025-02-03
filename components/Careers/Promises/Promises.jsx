import React from 'react';
import styles from './Promises.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const Promises = ({promisesData}) => {
    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Guided by Values, Driven by Growth"}
                    subtitle={"Our values shape our journey and inspire success"}
                />
                <div className={styles.promise_wrapper}>
                    <Row>
                        {promisesData.map((promise, index) => (
                            <Col lg="4" xs="12" key={index}>
                                <div className={styles.promise_cards}>
                                    <div className={styles.promise_title}>
                                        <h3>{promise.title}</h3>
                                        <img src={promise.imgSrc} alt={promise.title} />
                                    </div>
                                    <div className={`${styles.promise_text} cms-data`}>
                                        <span>{promise.description}</span>
                                        <ul>
                                            {promise.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
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
