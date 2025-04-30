import React from 'react';
import styles from './PartnerFuturegroup.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const PartnerFuturegroup = ({ partnerFuturegroupData }) => {

    // Exit early if the expected data is missing
    if (!partnerFuturegroupData?.Partners) {
        return null;
    }

    // Destructure necessary data for cleaner JSX
    const { Title, Description, CenterImage, PartnerCards } = partnerFuturegroupData?.Partners;

    return (
        <div className={`${styles.partner_wrapper} pd-t pd-b`}>
            <Container>
                {/* Section heading and description */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Partner cards layout */}
                <div className={styles.futuregroup_wrapper}>

                    {/* First Partner Card (e.g., Future Group) */}
                    <div className={`${styles.futuregroup_card} ${styles.start}`}>
                        <div>
                            {/* Partner logo image */}
                            <img
                                src={process.env.NEXT_PUBLIC_APP_API + PartnerCards[0]?.Image?.url}
                                alt={PartnerCards[0]?.Image?.alternativeText || 'Partner logo'}
                            />

                            {/* Partner description text */}
                            <p>{PartnerCards[0]?.Description}</p>
                        </div>

                        {/* Optional read more link */}
                        {PartnerCards[0]?.LinkUrl && (
                            <a href={PartnerCards[0].LinkUrl}>
                                <span>Know More</span>
                                <img src='/images/reach-us/arrow-right.svg' alt='arrow' />
                            </a>
                        )}

                        {/* Central branding image */}
                        <div className={styles.fgli_middle_content}>
                            <img
                                src={process.env.NEXT_PUBLIC_APP_API + CenterImage?.url}
                                alt={CenterImage?.alternativeText || 'Center branding logo'}
                            />
                        </div>
                    </div>

                    {/* Second Partner Card (e.g., Generali) */}
                    <div className={`${styles.futuregroup_card} ${styles.end}`}>
                        <div>
                            {/* Partner logo reused (center image) */}
                            <img
                                src={process.env.NEXT_PUBLIC_APP_API + PartnerCards[1]?.Image?.url}
                                alt={PartnerCards[1]?.Image?.alternativeText || 'Partner logo'}
                            />

                            {/* Partner description text */}
                            <p>{PartnerCards[1]?.Description}</p>
                        </div>

                        {/* Optional read more link */}
                        {PartnerCards[1]?.LinkUrl && (
                            <a href={PartnerCards[1].LinkUrl}>
                                <span>Know More</span>
                                <img src='/images/reach-us/arrow-right.svg' alt='arrow' />
                            </a>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PartnerFuturegroup;
