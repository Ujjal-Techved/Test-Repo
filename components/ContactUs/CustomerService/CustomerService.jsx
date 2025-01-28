import React from 'react';
import styles from './CustomerService.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Col, Row } from 'reactstrap';

const serviceData = [
    {
        title: "Premium Payment",
        icon: "/images/contact-us/payment.svg",
        links: [
            { text: "Pay Your Premium Online", href: "/pay-online" },
            { text: "Pay by Phone", href: "/pay-phone" },
            { text: "Pay at Branch/ Authorised Centers", href: "/pay-branch" },
            { text: "Pay Using Auto Debit", href: "/pay-auto-debit" },
            { text: "Good Health Declaration", href: "/good-health-declaration" }
        ]
    },
    {
        title: "Self Service Transactions",
        icon: "/images/contact-us/transactions.svg",
        links: [
            { text: "Track Your Claim", href: "/track-claim" },
            { text: "Track Your Application", href: "/track-application" },
            { text: "Renewal Receipt", href: "/renewal-receipt" },
            { text: "Unit Statement", href: "/unit-statement" },
            { text: "Premium Paid Certificate", href: "/premium-certificate" },
            { text: "Revival Quotation", href: "/revival-quotation" },
            { text: "Unclaimed Amount", href: "/unclaimed-amount" },
            { text: "Update PAN Number", href: "/update-pan" },
            { text: "Download FG Life App", href: "/download-fg-life-app" },
            { text: "Get Policy", href: "/get-policy" }
        ]
    },
    {
        title: "Service Tools",
        icon: "/images/contact-us/tools.svg",
        links: [
            { text: "Download Forms", href: "/download-forms" },
            { text: "Enquiry Form", href: "/enquiry-form" },
            { text: "New Business Underwriting Forms", href: "/new-business-forms" },
            { text: "Group Business Form", href: "/group-business-form" }
        ]
    },
    {
        title: "Service Guarantee & Complaints",
        icon: "/images/contact-us/complaints.svg",
        links: [
            { text: "Service Guarantee/Turn Around Time (TAT)", href: "/service-guarantee" },
            { text: "Complaints/Grievance Redressal Procedure", href: "/complaints-procedure" }
        ]
    }
];

const CustomerService = () => {
    return (
        <div>
            <TitleSubtitle
                title={"Customer Service"}
                subtitle={"Find what you need with our easy-to-access resources and support"}
            />
            {serviceData.map((service, index) => (
                <div key={index} className={styles.service_cards_main}>
                    <div className={styles.service_cards_title}>
                        <img src={service.icon} alt={service.title} />
                        <h4>{service.title}</h4>
                    </div>
                    <Row className={styles.service_card_list}>
                        {service.links.map((link, idx) => (
                            <Col key={idx} lg='4' xs='12'>
                                <a href={link.href}>{link.text} <img src='/images/reach-us/arrow-right.svg' alt='arrow'/></a>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </div>
    );
}

export default CustomerService;
