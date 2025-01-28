import React, { useState } from 'react';
import TitleSubtitle from '../TitleSubtitle/TitleSubtitle';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from 'reactstrap';
import styles from './Faqs.module.css'

const Faqs = ({faqItems}) => {

    const [openIndex, setOpenIndex] = useState("");

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? "" : index);
    };

    return (
        <section className={styles.faqContainer}>
            <Container>
                <TitleSubtitle
                    title={"Frequently Asked Questions"}
                    subtitle={"See some of the most common questions below. If you have a question we haven’t included then please <a href='/'>Get in touch.</a>"}
                    titleTag='h3'
                />
                <Accordion open={openIndex} toggle={toggleFaq} className={styles.faqListContainer}>
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} className={styles.faqItem}>
                            <AccordionHeader tag={"div"} 
                            className={styles.faqHead}
                            targetId={index.toString()} 
                            onClick={() => toggleFaq(index.toString())}>
                                {item.question}
                            </AccordionHeader>
                            <AccordionBody className={styles.faqBody} accordionId={index.toString()}>{item.answer}</AccordionBody>
                        </AccordionItem>
                    ))}                                                                     
                </Accordion>
            </Container>
        </section>
    )
}

export default Faqs