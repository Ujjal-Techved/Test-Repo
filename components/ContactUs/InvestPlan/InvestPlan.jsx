import React, { useState } from 'react';
import styles from './InvestPlan.module.css';
import { Container } from 'reactstrap';
import { useRouter } from "next/navigation";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const InvestPlan = ({ investPlanData }) => {
    const router = useRouter();

    // State to store the user's mobile number input
    const [mobileNumber, setMobileNumber] = useState('');

    // Prevent rendering if `investPlanData` is missing
    if (!investPlanData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const {
        Title,
        Description,
        PlayStore_Link,
        AppStore_Link,
        QR_Code_Image,
        PlayStore_Image,
        AppStore_Image
    } = investPlanData;

    const validationSchema = Yup.object().shape({
        phone: Yup.string()
            .min(10, "Enter a valid 10-digit mobile no.")
            .max(10, "Enter a valid 10-digit mobile no.")
            .required("Phone number is required"),
    });

    return (
        <Container>
            {/* Background wrapper for the investment plan section */}
            <div className={styles.invest_phone_bg}>
                <div className={styles.investPlan_bg}>
                    <div className={styles.investPlan_main}>
                        {/* Title of the investment plan */}
                        <h3>{Title}</h3>

                        {/* Form section for entering a mobile number */}
                        <div className={styles.form_applink}>
                            <label>{Description}</label>
                            {/* <div className={styles.applink_main}>
                                <input
                                    type="tel"
                                    readOnly={false} // Allows user input
                                    placeholder="Enter your mobile number"
                                    className={styles.form_control}
                                    name="mobileNumber"
                                    value={mobileNumber}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        // Allow only numeric values and limit to 10 digits
                                        if (/^\d{0,10}$/.test(value)) {
                                            setMobileNumber(value);
                                        }
                                    }}
                                    maxLength="10" // Restricts input to 10 characters
                                    pattern="\d{10}" // Enforces a 10-digit format
                                />
         
                                <button
                                    onClick={() => router.push(PlayStore_Link)}
                                    className="whiteBtn"
                                >
                                    Send App Link
                                </button>
                            </div> */}

                            <Formik
                                initialValues={{
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

                                        <button type='submit' className="whiteBtn px-4">Send App link</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>



                        {/* Section for displaying QR code and download links */}
                        <div className={styles.scanner_links}>
                            {/* QR Code Image for scanning */}
                            <div className={styles.scanner_links_main}>
                                
                                <img
                                    src={process.env.NEXT_PUBLIC_APP_API + QR_Code_Image?.url}
                                    alt={QR_Code_Image?.alternativeText}
                                />
                                <p>Scan QR Code</p>
                            </div>

                            {/* Download buttons for Play Store and App Store */}
                            <div className={styles.links_wrapper}>
                                {/* Play Store link */}
                                <a href={PlayStore_Link} className={styles.links_btn}>
                                    <img
                                        src={process.env.NEXT_PUBLIC_APP_API + PlayStore_Image?.url}
                                        alt={PlayStore_Image?.alternativeText}
                                    />
                                </a>
                                {/* App Store link */}
                                <a href={AppStore_Link} className={styles.links_btn}>
                                    <img
                                        src={process.env.NEXT_PUBLIC_APP_API + AppStore_Image?.url}
                                        alt={AppStore_Image?.alternativeText}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default InvestPlan;
