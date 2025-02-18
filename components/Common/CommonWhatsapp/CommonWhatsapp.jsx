import React, { useState, useEffect } from "react";
import styles from "./CommonWhatsapp.module.css";
import { Container } from "reactstrap";

const CommonWhatsapp = () => {
    return (
        <Container className={styles.whatsapp_cotainer}>
            <a href="/">            
                <div className={styles.main_whatsapp}>
                <div className={styles.Home_banner_whatsapp}>
                    <img src="images/home/whatsapp.png" alt="whatsapp" />
                </div>
            </div>
            </a>
        </Container>
    )
}

export default CommonWhatsapp