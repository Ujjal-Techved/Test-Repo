import React, { useState } from 'react';
import TitleSubtitle from '../TitleSubtitle/TitleSubtitle';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from 'reactstrap';
import styles from './Faqs.module.css'

const Faqs = ({faqData}) => {

    const [openIndex, setOpenIndex] = useState("");

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? "" : index);
    };

    return (
        <section className={styles.faqContainer}>
            <Container>
                <TitleSubtitle
                    title={faqData.Title}
                    subtitle={faqData.Description}
                    titleTag='h3'
                />
                <Accordion open={openIndex} toggle={toggleFaq} className={styles.faqListContainer}>
                    {faqData?.FaqList?.map((item, index) => (
                        <AccordionItem key={index} className={styles.faqItem}>
                            <AccordionHeader tag={"div"} 
                            className={styles.faqHead}
                            targetId={index.toString()} 
                            onClick={() => toggleFaq(index.toString())}>
                                {item?.Question}
                            </AccordionHeader>
                            <AccordionBody className={styles.faqBody} accordionId={index.toString()}>{item?.Answer}</AccordionBody>
                        </AccordionItem>
                    ))}                                                                     
                </Accordion>
            </Container>
        </section>
    )
}

export default Faqs