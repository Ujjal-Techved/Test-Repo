import React, { useState } from 'react';
import styles from './RequestCallback.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RequestCallback = ({ requestCallbackData }) => {

    // Prevent rendering if `requestCallbackData` is missing
    if (!requestCallbackData?.CallBack) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description } = requestCallbackData?.CallBack;

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
                <div className={styles.application_wrapper}>
                    {/* Title and subtitle rendered using the TitleSubtitle component */}
                    <TitleSubtitle
                        title={"Get Expert Advice from Your Trusted Life Insurance Company!"}
                        subtitle={"Need quick answers? Future Generali is the best life insurance company in India with 24/7 support and expert financial guidance."}
                        extraClass="whiteColor pageTitle max-792" // Custom class for styling
                    />
                    <div>
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
                                <Form className={styles.leadForm}>
                                    <div className={`${styles.formGroup} ${errors.name ? styles.error : ""} `}>
                                        <label htmlFor="name">Full Name *</label>
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder='Enter your Full Name'
                                            className={styles.inputField}
                                            onChange={(e) => {
                                                setFieldValue('name', e.target.value.replace(/[^A-Za-z\s]/g, ""));
                                                setFieldError('name', '');
                                            }}
                                        />
                                        <p className={styles.errorMsg}>{errors.name}</p>
                                    </div>
                                    <div className={`${styles.formGroup} ${errors.phone ? styles.error : ""} `}>
                                        <label htmlFor="phone">Mobile Number *</label>
                                        <Field
                                            type="tel"
                                            name="phone"
                                            placeholder='Enter your Mobile Number'
                                            className={styles.inputField}
                                            maxLength={10}
                                            onChange={(e) => {
                                                setFieldValue('phone', e.target.value.replace(/\D/g, ""));
                                                setFieldError('phone', '');
                                            }}
                                        />
                                        <p className={styles.errorMsg}>{errors.phone}</p>
                                    </div>

                                    <button type='submit' className="whiteBtn px-4 w-sm-100">Request a Call Back</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <p className={styles.footNote}>We promise we won’t spam you. Just real conversations with real people, whenever you need help! </p>
                </div>
            </Container>
        </div>
    );
};

export default RequestCallback;
