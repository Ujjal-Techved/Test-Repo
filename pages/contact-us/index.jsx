import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import styles from './Contact.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import ReachUsDigitalContact from '@/components/BranchLocator/ReachUsDigital/ReachUsDigitalContact';
import CustomerService from '@/components/ContactUs/CustomerService/CustomerService';
import Faqs from '@/components/Common/Faqs/Faqs';
import InvestPlan from '@/components/ContactUs/InvestPlan/InvestPlan';
import VisitUs from '@/components/ContactUs/VisitUs/VisitUs';
import IrdaSection from '@/components/ContactUs/IrdaSection/IrdaSection';
import { apiClient } from '../../utils/apiClient';  // Ensure correct path

const ContactUs = (props) => {

  // Create the breadcrumbs array based on state and city
  const breadcrumbs = [
    { name: "Contact Us", url: "/contact-us", active: true },
  ]


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
            title={props?.pageData?.PageTitle}
            subtitle={props?.pageData?.PageDesc}
            extraClass="desc-max-60 pageTitle"
          />
        </Container>
        <ReachUsDigitalContact reachUsCard={props?.pageData?.Contact_Details_Cards} AIcontactUs />
        <VisitUs visitUsCard={props?.pageData?.VisitUs} />
        <CustomerService csData={props?.pageData?.CustomerService} />
        <InvestPlan appLink={props?.pageData?.AppLink} />
        <Faqs faqData={props?.pageData?.Faqs} />
        <IrdaSection />
      </div>
    </LandingLayout>
  )
}


export async function getServerSideProps(context) {

  try {
    // Fetch the list of branches (cities and states)
    const contactUsData = await apiClient('/api/contact-uses?filters[PageUrl][$eq]=/contact-us');
    return {
      props: {
        pageData: contactUsData?.data[0],
      }
    };
  } catch (error) {
    console.error("Error fetching contact us data:", error);
  }
}

export default ContactUs