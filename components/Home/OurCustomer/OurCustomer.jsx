import React from 'react'
import styles from './OurCustomer.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const OurCustomer = () => {
    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"What Our Customers Are Saying"}
                    subtitle={"Discover how Future Generali has secured peace of mind for families across the nation"}
                />
            </Container>
        </div>
    )
}

export default OurCustomer