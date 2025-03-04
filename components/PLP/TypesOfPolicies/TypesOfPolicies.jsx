import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Styles from './TypesOfPolicies.module.css';

const TypesOfPolicies = ({ policyList }) => {
    return (
        <div className='pd-b pd-t'>
            <Container>
                <TitleSubtitle
                    title={"Types of Life Policies in India"}
                    subtitle={`Future Generali offers different kinds of simple-to-understand life insurance policies. <br/>
                    These plans will help meet your various needs such as protection, savings, investments, child’s education, health etc.`}
                    titleTag={'h2'}
                    extraClass={"pageTitle px-3"}
                />
                <div className={Styles.planSection}>
                    <Row className={Styles.heading}>
                        <Col lg="5">Life Insurance Plans</Col>
                        <Col lg="7">Coverage</Col>
                    </Row>
                    <div className={Styles.planBody}>
                        {
                            policyList && policyList.map((policy, index) => (
                                <Row key={index} className={Styles.dataRow}>
                                    <Col lg="5">
                                    <div className={Styles.dataTitle}>
                                        <img src={process.env.NEXT_PUBLIC_APP_API + policy.Image.url} alt="img"/>
                                        <p>{policy.Title}</p>
                                    </div>
                                    </Col>
                                    <Col lg="7">{policy.Coverage}</Col>
                                </Row>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TypesOfPolicies