import React, { useState } from 'react';
import styles from './RequestCallback.module.css';
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RequestCallback = ({ requestCallbackData }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDrop = () => setDropdownOpen((prevState) => !prevState);
    const planlist = ["Life Insurance", "Health Insurance", "Car Insurance", "Bike Insurance"];

    // Prevent rendering if `requestCallbackData` is missing
    if (!requestCallbackData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description } = requestCallbackData;

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Please enter a valid name")
            .required("Name is required"),
        phone: Yup.string()
            .min(10, "Enter a valid 10-digit mobile no.")
            .max(10, "Enter a valid 10-digit mobile no.")
            .required("Phone number is required"),
        pincode: Yup.string()
            .min(6, "Enter a valid pincode")
            .required("Pincode is required"),
        plan: Yup.string()
            .required("Plan is required"),
    });

    return (
        <div className='pd-b'>
            <Container>
                <div className={styles.application_wrapper}>
                    {/* Title and subtitle rendered using the TitleSubtitle component */}
                    <TitleSubtitle
                        title={Title}
                        subtitle={Description}
                        extraClass="whiteColor pageTitle max-792" // Custom class for styling
                    />
                    <div>
                        <Formik
                            initialValues={{
                                name: "",
                                phone: "",
                                pincode: "",
                                plan: "Life Insurance"
                            }}
                            validateOnBlur={false}
                            validateOnChange={false}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log("Form submitted:", values);
                            }}
                        >
                            {({ values, errors, setFieldValue, setFieldError }) => (
                                <Form className={styles.leadForm}>
                                    <Row>
                                        <Col xl={3} md={6} xs={12}>
                                            <div className={`${styles.formGroup} ${errors.name ? styles.error : ""} `}>
                                                <label htmlFor="name">Full Name *</label>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    placeholder='Enter your Full Name'
                                                    className={styles.inputField}
                                                    autoComplete="off"
                                                    onChange={(e) => {
                                                        setFieldValue('name', e.target.value.replace(/[^A-Za-z\s]/g, ""));
                                                        setFieldError('name', '');
                                                    }}
                                                />
                                                <p className={styles.errorMsg}>{errors.name}</p>
                                            </div>
                                        </Col>
                                        <Col xl={3} md={6} xs={12}>
                                            <div className={`${styles.formGroup} ${errors.phone ? styles.error : ""} `}>
                                                <label htmlFor="phone">Mobile Number *</label>
                                                <Field
                                                    type="tel"
                                                    name="phone"
                                                    placeholder='Enter your Mobile Number'
                                                    className={styles.inputField}
                                                    autoComplete="off"
                                                    maxLength={10}
                                                    onChange={(e) => {
                                                        setFieldValue('phone', e.target.value.replace(/\D/g, ""));
                                                        setFieldError('phone', '');
                                                    }}
                                                />
                                                <p className={styles.errorMsg}>{errors.phone}</p>
                                            </div>
                                        </Col>
                                        <Col xl={3} md={6} xs={12}>
                                            <div className={`${styles.formGroup} ${errors.phone ? styles.error : ""} `}>
                                                <label htmlFor="phone">Pincode *</label>
                                                <Field
                                                    type="tel"
                                                    name="pincode"
                                                    placeholder='Enter your Pincode'
                                                    className={styles.inputField}
                                                    autoComplete="off"
                                                    maxLength={6}
                                                    onChange={(e) => {
                                                        setFieldValue('pincode', e.target.value.replace(/\D/g, ""));
                                                        setFieldError('pincode', '');
                                                    }}
                                                />
                                                <p className={styles.errorMsg}>{errors.phone}</p>
                                            </div>
                                        </Col>
                                        <Col xl={3} md={6} xs={12}>
                                            <div className={`${styles.formGroup} ${errors.phone ? styles.error : ""} `}>
                                                <label htmlFor="plan">Select Plan *</label>
                                                <Dropdown isOpen={dropdownOpen} toggle={toggleDrop}>
                                                    <DropdownToggle tag="button"
                                                        type='button'
                                                        className={`${styles.inputField} ${styles.drop} ` + (dropdownOpen ? (styles.active) : "")}
                                                    >
                                                        {values.plan ? values.plan : "Select your plan"}
                                                    </DropdownToggle>
                                                    <DropdownMenu className={styles.dropMenu}>
                                                        {
                                                            planlist.map((data, index) => (
                                                                <DropdownItem key={index}
                                                                    onClick={() => { setFieldValue("plan", data); setFieldError("plan", "") }}
                                                                >{data}</DropdownItem>
                                                            ))
                                                        }
                                                    </DropdownMenu>
                                                </Dropdown>
                                                <p className={styles.errorMsg}>{errors.phone}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className={styles.footNoteContainer}>
                                        <button type='submit' className="whiteBtn px-4 w-sm-100">Request a Call Back</button>
                                        <p className={styles.footNote}>We promise we won’t spam you. Just real conversations with real people, whenever you need help! </p>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RequestCallback;
