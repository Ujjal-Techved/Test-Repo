import React from 'react'
import styles from './PartnerFuturegroup.module.css'
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const PartnerFuturegroup = () => {
    return (
        <div className={styles.partner_wrapper + ' pd-t pd-b'}>
            <Container>
                {/* Section Title and Description */}
                <TitleSubtitle
                    title="Partners in Securing Your Future"
                    subtitle="A powerhouse of Indian market expertise and global insurance excellence"
                />
    
                {/* Wrapper for Partner Cards */}
                <div className={styles.futuregroup_wrapper}>
                    
                    {/* First Partner Card (Future Group) */}
                    <div className={`${styles.futuregroup_card} ${styles.start}`}>
                        <div>
                            {/* Partner Logo */}
                            <img src="images/about-us/futuregroup-logo.png" alt="Future Group Logo" />
                            
                            {/* Partner Description */}
                            <p>Lorem ipsum dolor sit amet consectetur. Tellus eleifend consectetur arcu ornare lacinia nisi lobortis. Enim ut amet donec quis nunc sit. Faucibus gravida in porta malesuada egestas est. Id vitae nunc maecenas dui morbi tristique.</p>
                        </div>
    
                        {/* Read More Link */}
                        <a href="https://www.futuregroup.in/">Read more +</a>
    
                        {/* Middle Logo for Branding */}
                        <div className={styles.fgli_middle_content}>
                            <img src="/images/header/fgli-logo.svg" alt="FGLI Logo" />
                        </div>
                    </div>
    
                    {/* Second Partner Card (Generali) */}
                    <div className={`${styles.futuregroup_card} ${styles.end}`}>
                        <div>
                            {/* Partner Logo */}
                            <img src="images/about-us/generrali.png" alt="Generali Logo" />
                            
                            {/* Partner Description */}
                            <p>A global insurance powerhouse with 190+ years of expertise, protecting 68 million customers across 50+ countries. With a legacy of trust and innovation, Generali brings world-class financial solutions, cutting-edge protection, and a future-ready approach to securing what matters most.  </p>
                        </div>
    
                        {/* Read More Link */}
                        <a href="https://www.generali.com/">Read more +</a>
                    </div>
                </div>
            </Container>
        </div>
    );
    
    
}

export default PartnerFuturegroup