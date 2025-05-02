import React, { useState, useEffect } from 'react';
import styles from './PdpBanner.module.css';
import { Col, Container, Row } from 'reactstrap';
import Select from 'react-select';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const PdpBanner = ({ bannerData }) => {
    // State for selected job role from dropdown
    const [selectedAge, setSelectedAge] = useState(null);
    const [selectedIncome, setSelectedIncome] = useState(null);

    // State for job roles fetched from API
    const [ageList, setAgeList] = useState([
        { label: "20", value: "20" },
        { label: "40", value: "40" },
        { label: "50", value: "50" },
        { label: "60", value: "60" },
        { label: "70", value: "70" },
        { label: "80", value: "80" },
        { label: "90", value: "90" }
    ]);
    const [incomeList, setIncomeList] = useState([
        { label: "1 Lakh", value: "1 Lakh" },
        { label: "2 Lakh", value: "2 Lakh" },
        { label: "3 Lakh", value: "3 Lakh" },
        { label: "4 Lakh", value: "4 Lakh" },
        { label: "5 Lakh", value: "5 Lakh" },
        { label: "6 Lakh", value: "6 Lakh" },
        { label: "7 Lakh", value: "7 Lakh" },
        { label: "8 Lakh", value: "8 Lakh" },
        { label: "9 Lakh", value: "9 Lakh" },
        { label: "10 Lakh", value: "10 Lakh" },
        { label: "11 Lakh", value: "11 Lakh" },
        { label: "12 Lakh", value: "12 Lakh" }
    ]);

    // State for banner statistics fetched from API
    const [bannerStats, setBannerStats] = useState([
        { img: "/images/product-detail/stats-icon-1.png", title: "Guaranteed Benefits", desc: "on death, survival, and maturity" },
        { img: "/images/product-detail/stats-icon-2.png", title: "Extended Life Cover", desc: " with Death Benefit Multiples" },
        { img: "/images/product-detail/stats-icon-3.png", title: "Long Term Income", desc: "for upto 50 years" },
    ]);

    // validation schema 
    const validationSchema = Yup.object().shape({
        age: Yup.string().required("Age is required"),
        income: Yup.string().required("Income is required"),
    });



    return (
        <div className={styles.bannerMain + ' pdp-bannermain'}>
            <Container>
                <Row>
                    {/* Left Section: Banner Content and Job Filter */}
                    <Col lg="6">
                        <p className={styles.bannerDesc}>PLAN TODAY, SECURE TOMORROW</p>
                        <h1 className={styles.bannerTitle}>Future Generali Long Term Income Plan</h1>
                        <p className={styles.bannerDesc2}>
                            A Life Insurance Plan with growing income and protection to support your family through milestones
                        </p>

                        {/* Job Role Dropdown and Button */}
                        <div className={styles.filterComponent}>
                            <Formik
                                initialValues={{
                                    age: "",
                                    income: ""
                                }}
                                validateOnBlur={false}
                                validateOnChange={false}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    console.log("Form submitted:", values);
                                }}
                            >
                                {({ errors, setFieldValue, setFieldError }) => (
                                    <Form>
                                        <Row className={styles.row + ' lead-form'}>
                                            {/* Dropdown for Selecting Job Role */}
                                            <Col lg="3" className={styles.col + ' dropdown-arrow'}>
                                                <div className={`form-group pb-lg-0 ${errors.age ? "error" : ""}`}>
                                                    <label className='mb-0' for="name">Select Age</label>
                                                    <Select
                                                        options={ageList}
                                                        value={selectedAge}
                                                        onChange={(option) => {
                                                            setSelectedAge(option);
                                                            setFieldValue("age", option.value);
                                                            setFieldError("age", "");
                                                        }}
                                                        placeholder="Select Age"
                                                        className="react-select-container"
                                                        classNamePrefix="react-select"
                                                        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Remove default dropdown arrow
                                                        isSearchable={false}
                                                    />
                                                    <p class="error-msg">{errors.age}</p>
                                                </div>
                                            </Col>
                                            <Col lg="9" className={styles.col + ' px-0'}>
                                                <Row className={styles.innerRow + " m-0"}>
                                                    {/* Dropdown for Selecting Job Role */}
                                                    <Col lg="6" className={styles.col + ' dropdown-arrow'}>
                                                        <div className={`form-group pb-lg-0 ${errors.income ? "error" : ""}`}>
                                                            <label className='mb-0' for="name">Select Annual Income</label>
                                                            <Select
                                                                options={incomeList}
                                                                value={selectedIncome}
                                                                onChange={(option) => {
                                                                    setSelectedIncome(option);
                                                                    setFieldValue("income", option.value);
                                                                    setFieldError("income", "");

                                                                }}
                                                                placeholder="Select Annual Income"
                                                                className="react-select-container"
                                                                classNamePrefix="react-select"
                                                                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Remove default dropdown arrow
                                                                isSearchable={false}
                                                            />
                                                            <p class="error-msg">{errors.income}</p>
                                                        </div>
                                                    </Col>

                                                    {/* "View Openings" Button */}
                                                    <Col lg="6" className={styles.col}>
                                                        <button type="submit" className="redBtn w-100 capitalize-text">
                                                            Calculate Premium
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Col>

                    {/* Right Section: Banner Image and Stats */}
                    <Col lg="6">
                        <div className={styles.statsContainer}>
                            {/* Background Banner Image */}
                            <img src='/images/product-detail/banner-fg.png' alt='banner' className={styles.bannerImg} />

                            {/* Banner Statistics (Dynamic Data) */}
                            {bannerStats?.map((data, index) => (
                                <div key={index} className={styles.statsItem}>
                                    <img
                                        src={data.img}
                                        alt="Banner Image"
                                    />
                                    <div>
                                        <p className={styles.statTitle}>{data.title}</p>
                                        <p className={styles.statDesc}>{data.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg="12">
                        <p className={styles.note}>An Individual, Non-Linked, Non-Participating (without profits), Savings, Life Insurance Plan.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PdpBanner;
