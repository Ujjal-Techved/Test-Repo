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
        <ReachUsDigital reachUsCard={props?.contactData} AIcontactUs />
        <VisitUs visitUsCard={props?.visitUsData}/>
        <CustomerService />
        <InvestPlan />

        <Faqs faqItems={faqData} />
        <IrdaSection />
      </div>
    </LandingLayout>
  )
}


export async function getServerSideProps(context) {


    // // Generate breadcrumbs dynamically based on state and city
    // const breadcrumbs = [
    //     { name: "Branch Locator", url: "/branch-locator", active: true },
    //     state ? { name: normalizedState, url: `/branch-locator/${state}/${city}`, active: true } : null,
    //     city ? { name: normalizedCity, url: `/branch-locator/${state}/${city}`, active: true } : null,
    // ].filter(Boolean); // Remove null values


    try {
        // Fetch the list of branches (cities and states)
        const contactUsData = await apiClient('/api/contact-uses?filters[PageUrl][$eq]=/contact-us');

       console.log(contactUsData?.data[0]?.Contact_Details_Cards)
        return {
            props: {
                contactData: contactUsData?.data[0]?.Contact_Details_Cards,
                visitUsData: contactUsData?.data[0]?.VisitUs,
                pageData: contactUsData?.data[0],
                // emailData: contactUsData?.data[0]?.Contact_Details_Cards[2], // Keep original state for URL
                // cityUrl: city,   // Keep original city for URL 
                // breadcrumbs: breadcrumbs,
                // branchList: filterBranchList?.data ?? [], // Default value if no branches found
                // cityList, stateList,
                // pageData: pageData?.data[0],
            }
        };
    } catch (error) {
        console.error("Error fetching branch data:", error);
        return {
            props: {
                // state: normalizedState,
                // city: normalizedCity,
                // stateUrl: state, // Keep original state for URL
                // cityUrl: city,   // Keep original city for URL 
                // breadcrumbs: breadcrumbs,
                // branchList: [],
                // pageData: {}
            }
        };
    }
}

export default ContactUs