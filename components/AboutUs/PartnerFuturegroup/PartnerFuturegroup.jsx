import React from 'react';
import styles from './PartnerFuturegroup.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const PartnerFuturegroup = ({ partnerFuturegroupData }) => {

    // Prevent rendering if `partnerFuturegroupData` is missing
    if (!partnerFuturegroupData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, PartnerCard1, PartnersCard2 } = partnerFuturegroupData?.Partners;

    return (
        <div className={styles.partner_wrapper + ' pd-t pd-b'}>
            <Container>
                {/* Section Title and Description */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Wrapper for Partner Cards */}
                <div className={styles.futuregroup_wrapper}>
                    
                    {/* First Partner Card (Future Group) */}
                    <div className={`${styles.futuregroup_card} ${styles.start}`}>
                        <div>
                            {/* Partner Logo */}
                            <img src='images/about-us/futuregroup-logo.png' alt='Future Group Logo' />
                            
                            {/* Partner Description */}
                            <p>{PartnerCard1?.Description}</p>
                        </div>

                        {/* Read More Link */}
                        {PartnerCard1?.LinkUrl && (
                            <a href={PartnerCard1.LinkUrl}>Read more +</a>
                        )}

                        {/* Middle Logo for Branding */}
                        <div className={styles.fgli_middle_content}>
                            <img src='/images/header/fgli-logo.svg' alt='FGLI Logo' />
                        </div>
                    </div>

                    {/* Second Partner Card (Generali) */}
                    <div className={`${styles.futuregroup_card} ${styles.end}`}>
                        <div>
                            {/* Partner Logo */}
                            <img src='images/about-us/generrali.png' alt='Generali Logo' />
                            
                            {/* Partner Description */}
                            <p>{PartnersCard2?.Description}</p>
                        </div>

                        {/* Read More Link */}
                        {PartnersCard2?.LinkUrl && (
                            <a href={PartnersCard2.LinkUrl}>Read more +</a>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PartnerFuturegroup;
