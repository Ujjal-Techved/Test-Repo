import React, { useState, useEffect } from "react";
import styles from "./CommonChatbot.module.css";
import { Container } from "reactstrap";

const CommonChatbot = ({ targetId }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById(targetId);

        if (!targetElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        observer.observe(targetElement);

        return () => {
            observer.disconnect();
        };
    }, [targetId]);

    return (
        <Container className={`${styles.chatboat_cotainer} ${isVisible ? styles.visible : ""}`}>
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
