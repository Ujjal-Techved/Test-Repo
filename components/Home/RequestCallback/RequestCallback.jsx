import React, { useState } from 'react';
import styles from './RequestCallback.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const RequestCallback = ({ requestCallbackData }) => {
    // State hooks to manage form inputs
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    // Prevent rendering if `requestCallbackData` is missing
    if (!requestCallbackData?.CallBack) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description } = requestCallbackData?.CallBack;

    return (
        <div className='pd-b'>
            <Container>
                <div className={styles.application_wrapper}>
                    {/* Title and subtitle rendered using the TitleSubtitle component */}
                    <TitleSubtitle
                        title={Title}
                        subtitle={Description}
                        extraClass="whiteColor" // Custom class for styling
                    />
                    <div className={styles.form_callback}>
                        {/* Input for Full Name */}
                        <input
                            type="text"
                            readOnly={false}
                            placeholder="Enter Full Name"
                            className="fgi-common-input"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Allow only alphabets and spaces in full name
                                if (/^[a-zA-Z ]*$/.test(value)) {
                                    setFullName(value);
                                }
                            }}
                        />
                        {/* Input for Mobile Number */}
                        <input
                            type="tel"
                            readOnly={false}
                            placeholder="Enter Mobile Number"
                            className="fgi-common-input"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={(e) => {
                                const value = e.target.value;
                                // Allow only digits and limit to 10 characters for mobile number
                                if (/^\d{0,10}$/.test(value)) {
                                    setMobileNumber(value);
                                }
                            }}
                            maxLength="10" // Restrict mobile number length to 10
                            pattern="\d{10}" // Ensures exactly 10 digits for validation
                        />
                        {/* Button to submit the callback request */}
                        <button className="whiteBtn w-sm-100">Request a Call Back</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RequestCallback;
