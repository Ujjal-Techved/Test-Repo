import React, { useState } from 'react';
import styles from './InvestPlan.module.css';
import { Container } from 'reactstrap';

const InvestPlan = ({appLink}) => {
    const [mobileNumber, setMobileNumber] = useState('');

    return (
        <Container>
            <div className={styles.invest_phone_bg}>
                <div className={styles.investPlan_bg}>
                    <div className={styles.investPlan_main}>
                        <h3>{appLink?.Title}</h3>
                        <div className={styles.form_applink}>
                            <label>{appLink?.Description}</label>
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
                            <div><img src={process.env.NEXT_PUBLIC_APP_API + appLink?.QR_Code_Image.url}></img></div>
                            <div className={styles.links_wrapper}>
                                <a href={appLink?.PlayStore_Link} className={styles.links_btn} ><img src={process.env.NEXT_PUBLIC_APP_API + appLink?.PlayStore_Image.url} /></a>
                                <a href={appLink?.AppStore_Link} className={styles.links_btn} ><img src={process.env.NEXT_PUBLIC_APP_API + appLink?.AppStore_Image.url} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default InvestPlan;
