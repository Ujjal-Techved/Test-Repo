import React, { useState } from 'react';
import styles from './InvestPlan.module.css';
import { Container } from 'reactstrap';

const InvestPlan = () => {
    const [mobileNumber, setMobileNumber] = useState('');

    return (
        <Container>
            <div className={styles.invest_phone_bg}>
                <div className={styles.investPlan_bg}>
                    <div className={styles.investPlan_main}>
                        <h3>Invest in your future, right from your phone</h3>
                        <div className={styles.form_applink}>
                            <label>Get the link to download the app</label>
                            <div className={styles.applink_main}>
                                <input
                                    type="tel"
                                    readOnly={false}
                                    placeholder="Enter your mobile number"
                                    className={styles.form_control}
                                    name="product"
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
                                <button className="whiteBtn">Send App Link</button>
                            </div>
                        </div>
                        <div className={styles.scanner_links}>
                            <div><img src='/images/contact-us/scanner.svg'></img></div>
                            <div className={styles.links_wrapper}>
                                <a href="/" className={styles.links_btn} ><img src='/images/contact-us/google-store.svg' /></a>
                                <a href="/" className={styles.links_btn} ><img src='/images/contact-us/apple-store.svg' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default InvestPlan;
