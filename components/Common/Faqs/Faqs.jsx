import React, { useState } from 'react';
import TitleSubtitle from '../TitleSubtitle/TitleSubtitle';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from 'reactstrap';
import styles from './Faqs.module.css';

const Faqs = ({ faqData }) => {

    // State to track which FAQ item is open
    const [openIndex, setOpenIndex] = useState("");

    // Prevent rendering if `faqItems` is missing to avoid errors
    if (!faqData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, FaqList } = faqData;

    // Function to toggle open/close state of a FAQ item
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? "" : index);
    };

    return (
        <section className={styles.faqContainer}>
            <Container>
                {/* Section title and description */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                    titleTag='h3'
                />

                {/* FAQ Accordion */}
                <Accordion 
                    open={openIndex} 
                    toggle={toggleFaq} 
                    className={styles.faqListContainer}
                >
                    {/* Loop through FAQ list and create an accordion item for each */}
                    {FaqList?.map((item, index) => (
                        <AccordionItem key={index} className={styles.faqItem}>
                            
                            {/* Accordion Header (Click to expand/collapse) */}
                            <AccordionHeader 
                                tag="div" 
                                className={styles.faqHead}
                                targetId={index.toString()} 
                                onClick={() => toggleFaq(index.toString())}
                            >
                                {item?.Question}
                            </AccordionHeader>

                            {/* Accordion Body (Contains Answer) */}
                            <AccordionBody 
                                className={styles.faqBody} 
                                accordionId={index.toString()}
                            >
                                {item?.Answer}
                            </AccordionBody>
                        </AccordionItem>
                    ))}                                                                     
                </Accordion>
            </Container>
        </section>
    );
}

export default Faqs;
