import React from 'react'
import styles from './Benefits.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const Benefits = () => {
    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Benefits Built Around You"}
                    subtitle={"A set of guiding principles and fundamental beliefs that help FGILI to function together as a team and work toward a common business goal"}
                    
                />
                
            </Container>
        </div>
    )
}

export default Benefits