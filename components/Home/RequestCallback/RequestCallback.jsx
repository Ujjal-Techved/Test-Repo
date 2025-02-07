import React, { useState } from 'react';
import styles from './RequestCallback.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const RequestCallback = () => {
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    return (
        <div>
            <Container>
                <div className={styles.application_wrapper}>
                    <TitleSubtitle
                        title={"Get a Call Back Instantly!"}
                        subtitle={"Hassle-free advice, personalized plans, and answers to all your questions! <br> 24*7 Available"}
                        extraClass="whiteColor"
                    />
                    <div className={styles.form_callback}>
                        <input
                            type="text"
                            readOnly={false}
                            placeholder="Enter Full Name"
                            className="fgi-common-input"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Allow only alphabets and spaces
                                if (/^[a-zA-Z ]*$/.test(value)) {
                                    setFullName(value);
                                }
                            }}
                        />
                        <input
                            type="tel"
                            readOnly={false}
                            placeholder="Enter Mobile Number"
                            className="fgi-common-input"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Allow only digits and limit to 10 characters
                                if (/^\d{0,10}$/.test(value)) {
                                    setMobileNumber(value);
                                }
                            }}
                            maxLength="10"
                            pattern="\d{10}" // Enforces exactly 10 digits
                        />
                        <button className="whiteBtn w-sm-100">Request a Call Back</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RequestCallback;
