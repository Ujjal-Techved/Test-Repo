import React from 'react'
import styles from './BeststageOption.module.css'
import { Container } from 'reactstrap'

const BeststageOption = () => {
    return (
        <div>
            <Container>
                <div className={styles.stage_option_wrapper}>
                    <div className={styles.stage_option_card}>
                        <div className={styles.stage_option_member}>
                            <img src='images/home/character1.png'></img>
                        </div>
                        <div className={styles.stage_option_detail}>
                            <a href="/" class={styles.protect_plan_linktext}>
                                Young Professional
                                <img src="/images/reach-us/arrow-right.svg"></img>
                            </a>
                            <p>Just starting their career and exploring financial independence</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BeststageOption