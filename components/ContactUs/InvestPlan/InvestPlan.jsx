import React, { useState } from 'react';
import styles from './InvestPlan.module.css';
import { Container } from 'reactstrap';

const InvestPlan = ({ appLink }) => {
    // State to store the user's mobile number input
    const [mobileNumber, setMobileNumber] = useState('');

    return (
        <Container>
            {/* Background wrapper for the investment plan section */}
            <div className={styles.invest_phone_bg}>
                <div className={styles.investPlan_bg}>
                    <div className={styles.investPlan_main}>
                        {/* Title of the investment plan */}
                        <h3>{appLink?.Title}</h3>

                        {/* Form section for entering a mobile number */}
                        <div className={styles.form_applink}>
                            <label>{appLink?.Description}</label>
                            <div className={styles.applink_main}>
                                <input
                                    type="tel"
                                    readOnly={false} // Allows user to enter mobile number
                                    placeholder="Enter your mobile number"
                                    className={styles.form_control}
                                    name="product"
                                    value={mobileNumber}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        // Allow only numeric values and limit to 10 characters
                                        if (/^\d{0,10}$/.test(value)) {
                                            setMobileNumber(value);
                                        }
                                    }}
                                    maxLength="10" // Limits input length to 10 characters
                                    pattern="\d{10}" // Ensures input matches a 10-digit number format
                                />
                                <button className="whiteBtn">Send App Link</button>
                            </div>
                        </div>

                        {/* Section for displaying QR code and download links */}
                        <div className={styles.scanner_links}>
                            {/* QR Code Image */}
                            <div>
                                <img src={process.env.NEXT_PUBLIC_APP_API + appLink?.QR_Code_Image.url} alt="QR Code" />
                            </div>
                            
                            {/* Download links for Play Store and App Store */}
                            <div className={styles.links_wrapper}>
                                <a href={appLink?.PlayStore_Link} className={styles.links_btn}>
                                    <img src={process.env.NEXT_PUBLIC_APP_API + appLink?.PlayStore_Image.url} alt="Download on Play Store" />
                                </a>
                                <a href={appLink?.AppStore_Link} className={styles.links_btn}>
                                    <img src={process.env.NEXT_PUBLIC_APP_API + appLink?.AppStore_Image.url} alt="Download on App Store" />
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
