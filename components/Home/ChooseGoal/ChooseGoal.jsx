import React from 'react'
import styles from './ChooseGoal.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const ChooseGoal = () => {
    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Choose your goal and calculate your path"}
                    subtitle={"Choose your goal and calculate your path"}
                />
            </Container>
        </div>
    )
}

export default ChooseGoal