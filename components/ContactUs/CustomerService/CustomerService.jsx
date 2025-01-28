import React from 'react'
import styles from './CustomerService.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Col, Row } from 'reactstrap';

const CustomerService = () => {
    return (
        <div>
            <TitleSubtitle
                title={"Customer Service"}
                subtitle={"Find what you need with our easy-to-access resources and support"}
                
            />
            <div className={styles.service_cards_main}>
                <div className={styles.service_cards_title}>
                    <img src='/images/contact-us/payment.svg' alt='payment'/>
                    <h4>Premium Payment</h4>
                </div>
                <div className={styles.service_card_list}>
                    <a>Pay Your Premium Online <img src='/images/reach-us/arrow-right.svg'></img></a>
                </div>
            </div>
        </div>
    )
}

export default CustomerService