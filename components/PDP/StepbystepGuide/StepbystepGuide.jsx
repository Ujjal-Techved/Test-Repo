import React from 'react'
import { Container } from 'reactstrap'
import styles from './StepbystepGuide.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const StepbystepGuide = () => {
    return (
        <div className='pd-t'>
            <Container>
                <TitleSubtitle
                    title={"Step-by-step guide to secure your future"}
                    subtitle={"See how our plan works for you"}
                />
            </Container>
        </div>
    )
}

export default StepbystepGuide