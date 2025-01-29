import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import styles from './Contact.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import ReachUsDigital from '@/components/BranchLocator/ReachUsDigital/ReachUsDigital';
import CustomerService from '@/components/ContactUs/CustomerService/CustomerService';
import Faqs from '@/components/Common/Faqs/Faqs';
import InvestPlan from '@/components/ContactUs/InvestPlan/InvestPlan';
import VisitUs from '@/components/ContactUs/VisitUs/VisitUs';
import IrdaSection from '@/components/ContactUs/IrdaSection/IrdaSection';

const ContactUs = (props) => {

  // Create the breadcrumbs array based on state and city
  const breadcrumbs = [
    { name: "Contact Us", url: "/contact-us", active: true },
  ]

  // Reach us or contact us card data
  const reachUsCard = [
    {
      title: 'WhatsApp Support',
      desc: 'Message us anytime at your convenience.',
      contact: '',
      linktext: 'Chat with Us',
      link: '/',
      arrow: '/images/reach-us/arrow-right.svg',
      img: '/images/reach-us/whatsapp.svg',
    },
    {
      title: 'Customer Support',
      desc: 'Available 24*7 at',
      contact: ' 1800 102 2355',
      linktext: 'Call Us',
      link: '/',
      arrow: '/images/reach-us/arrow-right.svg',
      img: '/images/reach-us/headphone.svg',
    },
    {
      title: 'Drop Us an Email',
      desc: 'Send your queries to: ',
      contact: 'care@futuregenerali.in',
      linktext: 'Email Us',
      link: 'care@futuregenerali.in',
      arrow: '/images/reach-us/arrow-right.svg',
      img: '/images/reach-us/email.svg',
    },
    // {
    //     title: 'Visit Us',
    //     desc: 'Monday to Friday 9:30 am to 5:30 pm',
    //     contact: '',
    //     linktext:'Locate Us',
    //     link: '/',
    //     arrow: '/images/reach-us/arrow-right.svg',

    // },

  ];

  const faqData = [
    {
      question: 'What is Life Insurance?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'What are riders in life insurance plans?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'How Much Life Insurance Cover Do You Need?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      question: 'What do you mean by the term “MLC Copy”?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];


  return (
    <LandingLayout>
      <div className={styles.contactWrapper}>
        <Container>
          <Breadcrumbs values={breadcrumbs} />
          <TitleSubtitle
            title={"Need Assistance?"}
            subtitle={"Reach out through the channel that suits you best—we’re just a chat, call, or email away!"}
            extraClass="desc-max-60 pageTitle"
          />
        </Container>
        <ReachUsDigital reachUsCard={reachUsCard} AIcontactUs />
        <VisitUs />
        <CustomerService />
        <InvestPlan />

        <Faqs faqItems={faqData} />
        <IrdaSection />
      </div>
    </LandingLayout>
  )
}

export default ContactUs