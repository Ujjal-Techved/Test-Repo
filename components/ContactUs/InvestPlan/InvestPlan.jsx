import React, { useState } from 'react';
import styles from './InvestPlan.module.css';
import { Form } from 'reactstrap';

const InvestPlan = () => {
    const [mobileNumber, setMobileNumber] = useState('');

    return (
        <div className={styles.invest_phone_bg}>
            <div className={styles.investPlan_bg}>
                <div className={styles.investPlan_main}>
                    <h3>Invest in your future, right from your phone</h3>
                    <Form>
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
                    </Form>
                    <div className={styles.scanner_links}>
                        <div><img src='/images/contact-us/scanner.svg'></img></div>
                        <div className={styles.links_wrapper}>
                            <button className={styles.links_btn} type='button'><img src='/images/contact-us/google-store.svg' /></button>
                            <button className={styles.links_btn} type='button'><img src='/images/contact-us/apple-store.svg' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvestPlan;
