import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './Download.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const Download = ({downloadData}) => {
    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Reports and Disclosures"}
                    subtitle={"This section lists Future Generali Life’s performance information including annual reports, bonus declaration, and public disclosures"}
                />
                <div className={styles.download_section_row}>
                    {downloadData.map((item, index) => (
                            <div key={index} className={styles.download_section_card}>
                                <div className={styles.download_section_title}>
                                    <img src={item.image} alt={item.title} />
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Download