import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './PlpBanner.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { leadFormAPICall } from '../../../utils/apiClient';  // Ensure correct path


const PlpBanner = ({bannerData}) => {

      // Return nothing if data is missing to avoid runtime errors
      if (!bannerData) {
        return null;
    }

    // Destructure response data for clarity
    const {
        PageTitle,
        PageDesc,
        Image,
    } = bannerData;



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
                                title={PageTitle}
                                subtitle={PageDesc}
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
                                    onSubmit={async(values) => {
                                        console.log("Form submitted:", values);
                                        const payload = {
                                            firstname: values.name || "",
                                            lastname: values.name || "", // You may split this if required
                                            mobilephone: values.phone || "",
                                            age__c: " ", // You may add a field in form for this
                                            email: "", // Also add in form if required
                                            postalcode: "", // Also from form or default
                                            product_pitched__c: "" // Can be dynamic
                                        };
                                        //Lead Form API function
                                        await leadFormAPICall( payload);
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
                                            Request A Call Back
                                            </button>
                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </Col>
                        {/* Right side: Image */}
                        <Col lg="5" className={styles.insure_imgsrc}>
                            <img className='img-fluid'
                                src={process.env.NEXT_PUBLIC_APP_API + Image?.url}
                                alt={Image?.alternativeText }
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default PlpBanner;
