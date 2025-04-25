import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './PlpBanner.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const PlpBanner = () => {


    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Please enter a valid name")
            .required("Name is required"),
        phone: Yup.string()
            .min(10, "Enter a valid 10-digit mobile no.")
            .max(10, "Enter a valid 10-digit mobile no.")
            .required("Phone number is required"),
    });

    return (
        <div className='pd-b'>
            <Container>
                <div className={styles.insure_wrapper}>
                    <Row className={styles.insure_main}>
                        {/* Left side: Description and buttons */}
                        <Col lg="7" className={styles.insure_description}>
                            {/* Title and subtitle rendered using the TitleSubtitle component */}
                            <TitleSubtitle
                                title={"What is a life insurance policy?"}
                                subtitle={"Life insurance provides financial security for your loved ones, helps you plan for future goals, and ensures peace of mind during uncertain times. It’s a vital step in protecting your family and building a secure financial foundation."}
                                extraClass={"leftAligned text-start pageTitle descPlp"} // Custom class for left-aligned content
                            />
                            <div className={styles.formComponent}>
                                {/* <Formik
                                    initialValues={{
                                        name: "",
                                        phone: ""
                                    }}
                                    validateOnBlur={false}
                                    validateOnChange={false}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        console.log("Form submitted:", values);
                                    }}
                                >
                                    {({ errors, setFieldValue, setFieldError }) => (
                                        <Form className={styles.leadForm}>
                                            <div className={`${styles.formGroup} ${errors.name ? styles.error : ""} `}>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    placeholder='Enter Full Name'
                                                    className={styles.inputField}
                                                    onChange={(e)=>{
                                                        setFieldValue('name',e.target.value.replace(/[^A-Za-z\s]/g, ""));
                                                        setFieldError('name','');
                                                    }}
                                                />
                                                <p className={styles.errorMsg}>{errors.name}</p>
                                            </div>
                                            <div className={`${styles.formGroup} ${errors.phone ? styles.error : ""} `}>
                                                <Field
                                                    type="tel"
                                                    name="phone"
                                                    placeholder='Enter Mobile Number'
                                                    className={styles.inputField}
                                                    maxLength={10}
                                                    onChange={(e)=>{
                                                        setFieldValue('phone',e.target.value.replace(/\D/g, ""));
                                                        setFieldError('phone','');
                                                    }}
                                                />
                                                <p className={styles.errorMsg}>{errors.phone}</p>
                                            </div>

                                            <button className="redBtn w-100" type='submit'>
                                                Schedule a Call
                                            </button>
                                        </Form>
                                    )}
                                </Formik> */}
                                <Formik
                                    initialValues={{
                                        name: "",
                                        phone: ""
                                    }}
                                    validateOnBlur={false}
                                    validateOnChange={false}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        console.log("Form submitted:", values);
                                    }}
                                >
                                    {({ errors, setFieldValue, setFieldError }) => (
                                        <Form className="lead-form">
                                            <div className={`form-group ${errors.name ? "error" : ""}`}>
                                                <label htmlFor="name">Enter Full Name</label>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your Name"
                                                    className="input-field"
                                                    onChange={(e) => {
                                                        setFieldValue("name", e.target.value.replace(/[^A-Za-z\s]/g, ""));
                                                        setFieldError("name", "");
                                                    }}
                                                />
                                                <p className="error-msg">{errors.name}</p>
                                            </div>

                                            <div className={`form-group ${errors.phone ? "error" : ""}`}>
                                                <label htmlFor="phone">Enter Mobile Number</label>
                                                <Field
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Your Mobile Number"
                                                    className="input-field"
                                                    maxLength={10}
                                                    onChange={(e) => {
                                                        setFieldValue("phone", e.target.value.replace(/\D/g, ""));
                                                        setFieldError("phone", "");
                                                    }}
                                                />
                                                <p className="error-msg">{errors.phone}</p>
                                            </div>

                                            <button type="submit" className={styles.red_btn + ' redBtn px-4 w-sm-100'}>
                                            Schedule a Call
                                            </button>
                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </Col>
                        {/* Right side: Image */}
                        <Col lg="5" className={styles.insure_imgsrc}>
                            <img src='images/product-landing/banner-fg.webp' alt='life-insurance' className='img-fluid' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default PlpBanner;
