import React from 'react'
import styles from './SendApplication.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const SendApplication = () => {
  return (
    <div>
        <Container>
            <div className={styles.application_wrapper}>
            <TitleSubtitle
                    title={"Get on Board with Future Generali India Life Insurance!"}
                    subtitle={"Let us work together today to build you a career you’ll be proud of tomorrow."}
                    extraClass="whiteColor"
                />
                <button className="whiteBtn w-sm-100">Send Your Application</button>
            </div>
        </Container>
    </div>
  )
}

export default SendApplication