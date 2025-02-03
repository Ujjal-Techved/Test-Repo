import React from 'react'
import styles from './LifeInsurance.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const LifeInsurance = () => {
    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Future Generali India Life Insurance"}
                    subtitle={"offers easy-to-understand plans tailored for protection, savings, investments, and health, ensuring your financial peace of mind."}

                />
            </Container>
        </div>
    )
}

export default LifeInsurance