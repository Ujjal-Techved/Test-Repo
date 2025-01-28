import React from 'react'
import styles from './InvestPlan.module.css';

const InvestPlan = () => {
  return (
    <div className={styles.investPlan_bg}>
        <div className={styles.investPlan_main}>
            <h3>Invest in your future, right from your phone</h3>
            <div className={styles.form_applink}>
                <label>Get the link to download the app</label>
                <div className={styles.applink_main}>
                    <input/>
                    <button className="whiteBtn">Send App Link</button>
                </div>
            </div>
        </div>
        {/* <div className={styles.investPlan_phone_bg}>
            <img src='/images/contact-us/phone-bg.svg'></img>
        </div> */}
    </div>
  )
}

export default InvestPlan