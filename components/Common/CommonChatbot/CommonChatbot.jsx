import React, { useState, useEffect } from "react";
import styles from "./CommonChatbot.module.css";
import { Container } from "reactstrap";

const CommonChatbot = () => {
 

    return (
        <Container className={styles.chatbot_cotainer}>
            <div className={styles.main_chatbot}>
                <div className={styles.Home_banner_chatbot}>
                    <div className={styles.Home_banner_innerbot}>
                        <img src="images/home/chatbot.gif" alt="chatbot" />
                        <div className={styles.chabot_title}>
                            <p>Have questions?</p>
                            <a href="/">
                                Let’s Chat <img src="images/home/chatarrow.png" alt="arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CommonChatbot;
