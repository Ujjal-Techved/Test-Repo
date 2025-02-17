import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './Leaders.module.css'

const Leaders = () => {

    // Array of Leadership data


        const LeadersListData = [
            {
                "id": 1,
                "Title": "Palamadai Sundararajan Jayakumar",
                "Description": "Independent Director & Chairman",
                "Category": "Board of Directors",
                "Image": {
                    "id": 1,
                    "documentId": "",
                    "url": "/uploads/image_dbe1951018.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image.png"
                }
            },
            {
                "id": 29,
                "Title": "Shailesh Haribhakti",
                "Description": "Independent Director",
                "Category": "Board of Directors",
                "Image": {
                    "id": 109,
                    "documentId": "w5slhz50lau8uwh8nisk1103",
                    "url": "/uploads/image_1_3e4330d929.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image (1).png"
                }
            },
            {
                "id": 30,
                "Title": "Dr. Devi Singh",
                "Description": "Independent Director",
                "Category": "Board of Directors",
                "Image": {
                    "id": 108,
                    "documentId": "ehdcch08nbjithyw8e8l9v9n",
                    "url": "/uploads/image_2_46fc477794.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image (2).png"
                }
            },
            {
                "id": 31,
                "Title": "Roberto Leonardi",
                "Description": "Non- Executive Director",
                "Category": "Board of Directors",
                "Image": {
                    "id": 104,
                    "documentId": "t1e5xvynndnov6a7qcfu07fj",
                    "url": "/uploads/image_3_387640aa26.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image (3).png"
                }
            },
            {
                "id": 32,
                "Title": "Lima Alexandrova",
                "Description": "Non-Executive Director (Additional)",
                "Category": "Board of Directors",
                "Image": {
                    "id": 102,
                    "documentId": "zcmqn4ovmw700azxq5z4cn0y",
                    "url": "/uploads/image_4_c0a9ba9bb4.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image (4).png"
                }
            },
            {
                "id": 33,
                "Title": "Valentina Sarrocco",
                "Description": "Non- Executive Director",
                "Category": "Board of Directors",
                "Image": {
                    "id": 105,
                    "documentId": "e0qtsf6ofg6lfyod25qsq0uk",
                    "url": "/uploads/image_5_1154691564.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image (5).png"
                }
            },
            {
                "id": 34,
                "Title": "Anup Rau Velamuri",
                "Description": "Non-Executive Director",
                "Category": "Board of Directors",
                "Image": {
                    "id": 103,
                    "documentId": "gv914ggyluyx19noi0yomwi8",
                    "url": "/uploads/image_6_74f7aa37cb.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image (6).png"
                }
            },
            {
                "id": 35,
                "Title": "K B Vijay Srinivas",
                "Description": "Non- Executive Director",
                "Category": "Board of Directors",
                "Image": {
                    "id": 106,
                    "documentId": "o4t12242bdrnjuvgdx1gw48v",
                    "url": "/uploads/image_7_7efae2eb12.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image (7).png"
                }
            },
            {
                "id": 36,
                "Title": "Alok Rungta",
                "Description": "Managing Director & CEO",
                "Category": "Board of Directors",
                "Image": {
                    "id": 107,
                    "documentId": "v46agrrncb0lg251vyog49cp",
                    "url": "/uploads/image_8_7c5988f4ee.png",
                    "alternativeText": null,
                    "caption": null,
                    "name": "image (8).png"
                }
            }
        ]


    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Meet the Leaders Behind Our Success"}
                    subtitle={"Our dedicated team drives innovation and delivers on our promise of protection and trust."}
                />

                {/* Only single card of Leader */}
                <Row className={styles.leader_card_row}>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/PalamadaiSundararajanJayakumar.png' alt='leaders'></img>
                                    <div>
                                        <label>Palamadai Sundararajan Jayakumar</label>
                                        <h5>Independent Director & Chairman</h5>
                                    </div>
                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/ShaileshHaribhakti.png' alt='leaders'></img>
                                    <div>                                    <label>Shailesh Haribhakti</label>
                                        <h5>Independent Director</h5></div>

                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/Dr.DeviSingh.png' alt='leaders'></img>
                                    <div>                                    <label>Dr. Devi Singh</label>
                                        <h5>Independent Director</h5></div>
                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/RobertoLeonardi.png' alt='leaders'></img>
                                    <div>                                    <label>Roberto Leonardi</label>
                                        <h5>Non- Executive Director</h5></div>
                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/LimaAlexandrova.png' alt='leaders'></img>
                                    <div>                                    <label>Lima Alexandrova</label>
                                        <h5>Non-Executive Director (Additional)</h5></div>
                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/ValentinaSarrocco.png' alt='leaders'></img>
                                    <div>                                    <label>Valentina Sarrocco</label>
                                        <h5>Non- Executive Director</h5></div>
                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/AnupRauVelamuri.png' alt='leaders'></img>
                                    <div>                                    <label>Anup Rau Velamuri</label>
                                        <h5>Non-Executive Director</h5></div>
                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/KBVijaySrinivas.png' alt='leaders'></img>
                                    <div>                                    <label>K B Vijay Srinivas</label>
                                        <h5>Non- Executive Director</h5></div>
                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className={styles.leader_card}>
                            <div class={styles.leader_card_inner}>
                                <div class={styles.leader_card_front}>
                                    <img src='/images/about-us/AlokRungta.png' alt='leaders'></img>
                                    <div>
                                        <label>Alok Rungta</label>
                                        <h5>Managing Director & CEO</h5>
                                        </div>
                                </div>
                                <div class={styles.leader_card_back}>
                                    <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Leaders