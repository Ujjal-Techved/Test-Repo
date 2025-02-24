import React from 'react'
import styles from './InfoResources.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const InfoResources = () => {
    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Important Information & Resources"}
                    subtitle={"Discover how Future Generali has secured peace of mind for families across the nation"}
                />
                <div className={styles.information_wrapper}>
                    <div className={styles.information_card}>
                        <div className='cms-data'>
                        This Product is not available for online sale.Life Coverage is included in this Product. For detailed information on this plan including risk factors, exclusions, terms and conditions etc., please refer to the product brochure and consult your advisor, or, visit our website before concluding a sale. Tax benefits are as per the Income Tax Act 1961 and are subject to any amendment made thereto from time to time. If you have any request, grievance, complaint or feedback, you may reach out to us at care@futuregenerali.in For further details please access the link:<a><b> https://life.futuregenerali.in/customer-service/grievance-redressal-procedure</b></a>. Future Group’s and Generali Group’s liability is restricted to the extent of their shareholding in Future Generali India Life Insurance Company Limited. Future Generali India Life Insurance Co. Ltd. (IRDAI Regn. No. 133), CIN: U66010MH2006PLC165288, Regd. and Corporate Office address: Unit 801 and 802, 8th floor, Tower C, Embassy 247 Park, L.B.S. Marg, Vikhroli (W), Mumbai – 400 083 | Email: care@futuregenerali.in | Call us at 1800-102-2355 | Website: life.futuregenerali.in | Fax: 022-40976600 | UIN: 133N090V04
                        </div>
                    </div>
                </div>

                <div className={styles.policy_table}>
                    <div className={styles.policy_table_header}>
                        <div className={styles.policy_table_year}>Policy Year</div>
                        <div className={styles.policy_table_range_year}>1-10</div>
                        <div className={styles.policy_table_total_benefit}>Total Benefit (a) + (b)</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default InfoResources