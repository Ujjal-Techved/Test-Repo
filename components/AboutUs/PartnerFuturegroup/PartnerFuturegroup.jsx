import React from 'react'
import styles from './PartnerFuturegroup.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const PartnerFuturegroup = () => {
    return (
        <div className={styles.partner_wrapper + ' pd-t pd-b'}>
            <Container>
                <TitleSubtitle
                    title={"Partners in Securing Your Future"}
                    subtitle={"Powered by Future Group’s legacy and Generali’s global expertise"}
                />
                <div className={styles.futuregroup_wrapper}>
                    <div className={`${styles.futuregroup_card} ${styles.start}`}>
                        <div>
                            <img src='images/about-us/futuregroup-logo.png' alt='futuregroup-logo'></img>
                            <p>Future Group operates some of India’s most popular retail chains like Central, Big Bazaar, Food Bazaar, Home Town and eZone.</p>
                        </div>
                        <a href='/'>Read more +</a>
                        <div className={styles.fgli_middle_content}>
                            <img src='/images/header/fgli-logo.svg' alt='FGLI'></img>
                        </div>
                    </div>
                    <div className={`${styles.futuregroup_card} ${styles.end}`}>
                        <div>
                            <img src='images/about-us/generrali.png' alt='generrali'></img>
                            <p>Generali is an independent, Italian Group, with a strong international presence. Established in 1831, it is among the world’s leading insurers and it is present in over 60 countries with total premium income exceeding €70 billion in 2016.</p>
                        </div>
                        <a href='/'>Read more +</a>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default PartnerFuturegroup