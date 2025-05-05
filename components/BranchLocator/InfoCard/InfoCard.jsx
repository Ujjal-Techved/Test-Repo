import React from 'react';
import styles from './InfoCard.module.css';
import { Col, Row } from 'reactstrap';
import { richTextToHtml } from '@/utils/richTextToHtml';

const InfoCard = ({ infoCardDetails }) => {

    return (
        // <Row className={styles.info_cards_row}>
        //     {infoCardDetails?.map((item, index) => (
        //         <Col className={styles.info_cards_section} xs="12" lg="4" key={index}>
        //             <div className={styles.info_cards}>
        //                 <h3 className={styles.info_cards_title}>{item?.Title}</h3>
        //                 <div className={styles.info_cards_subtitle + " cms-data"}>{richTextToHtml(item?.Description)}</div>
        //             </div>
        //         </Col>
        //     ))}
        // </Row>
        <Row className={styles.info_cards_row}>
            <Col className={styles.info_cards_section} xs="12" lg="6">
                <div className={styles.info_cards}>
                    <h3 className={styles.info_cards_title}>What You’ll Need for Your Visit</h3>
                    <div className={styles.info_cards_subtitle + " cms-data"}>
                        <p>Make sure you have these documents handy for a seamless experience with your life insurance company: </p>
                        <div className={styles.income_option_list}>
                            <ul>
                                <li>
                                    <p className='mb-0'>Your Original Policy Document</p>
                                    <div className={styles.hover_content}>
                                        <img src='/images/branch-locator/i-info.png' alt='info' />
                                        <div className={styles.hover_wrapper}>
                                            <p>This is your proof of life insurance and will be needed for any major transactions.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p className='mb-0'>A Valid ID & Address Proof</p>
                                    <div className={styles.hover_content}>
                                        <img src='/images/branch-locator/i-info.png' alt='info' />
                                        <div className={styles.hover_wrapper}>
                                            <p>This is your proof of life insurance and will be needed for any major transactions.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p className='mb-0'>Your Bank Details for Payouts</p>
                                    <div className={styles.hover_content}>
                                        <img src='/images/branch-locator/i-info.png' alt='info' />
                                        <div className={styles.hover_wrapper}>
                                            <p>This is your proof of life insurance and will be needed for any major transactions.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className={styles.info_cards_section} xs="12" lg="6">
                <div className={styles.info_cards}>
                    <h3 className={styles.info_cards_title}>Payment Centers</h3>
                    <div className={styles.info_cards_subtitle + " cms-data"}>
                        <p>Nearest Premium Payment Centers:</p>
                        <div className={styles.income_option_list}>
                            <ul>
                                <li>
                                    <p className='mb-0'>Axis Bank Branches – <a href='https://branch.axisbank.com/?type=branches'>Click here</a></p>
                                   
                                </li>
                           
                            </ul>
                        </div>
                    </div>
                </div>
            </Col>

        </Row>

    );
};

export default InfoCard;
