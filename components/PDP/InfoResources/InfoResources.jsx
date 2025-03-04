import React from 'react'
import styles from './InfoResources.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const InfoResources = () => {

    const policyData = [
        { label: 'Policy Year' },
        {
            ranges: [
                { yearRange: '0-5' },
                { yearRange: '6-10' },
                { yearRange: '11-15' },
                { yearRange: '16-20' },
                { yearRange: '21-25' },
                { yearRange: '26-30' },
                { yearRange: '31-35' },
                { yearRange: '36-40' },
                { yearRange: '41-45' },
                { yearRange: '45-50' },
                { yearRange: 'Total Survival Benefit (a)' },
                { yearRange: 'Maturity Benefit (b)' }
            ]
        },
        { label: 'Total Benefit (a) + (b)' }
    ];



    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Important Information & Resources"}
                    subtitle={"Discover how Future Generali has secured peace of mind for families across the nation"}
                />


<div className={styles.policy_table}>
                    <div className={styles.policy_table_header}>
                        {policyData.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.label && (
                                    <div
                                        className={
                                            item.label.includes('Total Benefit')
                                                ? styles.policy_table_total_benefit
                                                : styles.policy_table_year
                                        }
                                    >
                                        {item.label}
                                    </div>
                                )}
                                {item.ranges &&
                                    item.ranges.map((range, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className={`${styles.policy_table_range_year} ${range.yearRange.includes('Benefit') ? styles.bg_pink : ''}`}
                                        >
                                            {range.yearRange}
                                        </div>
                                    ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default InfoResources