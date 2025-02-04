import React, { useState } from 'react';
import styles from './CareerBanner.module.css';
import { Col, Container, Row } from 'reactstrap';
import Select from 'react-select';

const CareerBanner = () => {

    const statsItems = [
        { img: "/images/careers/stats-icon-1.webp", title: "100+ Offices Worldwide" },
        { img: "/images/careers/stats-icon-2.webp", title: "1000+ Employees" },
        { img: "/images/careers/stats-icon-3.webp", title: "Average Age: 29" },
      ];

    const [selectedOption, setSelectedOption] = useState("");

    const optionList = [
        { label: "Software Engineer", value: "Software Engineer" },
        { label: "Product Manager", value: "Product Manager" },
        { label: "Data Analyst", value: "Data Analyst" },
        { label: "UX Designer", value: "UX Designer" }
    ];

    const handleSubmit = () => { }

    return (
        <div className={styles.bannerMain}>
            <Container>
                <Row>
                    <Col lg="6">
                        <p className={styles.bannerDesc}>YOUR POTENTIAL, OUR PLATFORM</p>
                        <h1 className={styles.bannerTitle}>Join Us, Where People Make the Difference</h1>
                        <p className={styles.bannerDesc2}>An Individual, Non-Linked, Non-Participating (without profits), Savings, Life Insurance Plan.</p>
                        <div className={styles.filterComponent}>
                            <Row className={styles.row}>
                                <Col lg="7" className={styles.col + ' dropdown-arrow'}>
                                    <Select
                                        options={optionList}
                                        value={selectedOption}
                                        onChange={(option) => {
                                            setSelectedOption(option);
                                        }}
                                        placeholder="Choose Job Role"
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Removes the arrow and separator
                                    />
                                </Col>
                                <Col lg="5" className={styles.col}>
                                    <button className="redBtn w-100" onClick={handleSubmit}>
                                        View Openings
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className={styles.statsContainer}>
                            <img src='/images/careers/banner-fg.png' alt='banner' className={styles.bannerImg} />
                            <>
                            {
                                statsItems.slice(0,3).map((data,index)=>(
                                    <div key={index} className={styles.statsItem}>
                                        <img src={data.img} alt={data.title} />
                                        <p>{data.title}</p>
                                    </div>
                                ))
                            }
                            </>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CareerBanner