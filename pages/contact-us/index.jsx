// Importing required components and modules
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
import ReachOutcenter from '@/components/ContactUs/ReachOutcenter/ReachOutcenter';

const ContactUs = (props) => {

  // Define breadcrumbs for navigation
  const breadcrumbs = [
    { name: "Contact Us", url: "/contact-us", active: true },
  ];

  // Reach Out Tabs array data for dynamically displaying tabs
  const reachOuttabs = [
    { id: "1", tabtitle: "Careers" },
    { id: "2", tabtitle: "Claims" },
    { id: "3", tabtitle: "Media" },
  ];

  // Reach Out cards Data array

    const MediaCard = [
      {
        id: 7,
        Title: "Press Releases",
        Description: "For Our Latest Press Releases",
        LinkUrl: "/about-us/press-releases",
        Category: "Careers",
        Image: {
          id: 123,
          documentId: "cvmh4q9ijwjb3inmwy5cvf5f",
          url: "/uploads/Group_1410117290_1aaa960178.png",
          alternativeText: null,
          caption: null,
          name: "Group 1410117290.png"
        }
      },
      {
        id: 8,
        Title: "Press Coverage",
        Description: "For Our Latest Press Coverage",
        LinkUrl: "/about-us/press-coverage",
        Category: "Careers",
        Image: {
          id: 124,
          documentId: "fj18g647u1ftluf47159447s",
          url: "/uploads/Group_1410117291_3f8b335b11.png",
          alternativeText: null,
          caption: null,
          name: "Group 1410117291.png"
        }
      },
      {
        id: 9,
        Title: "Press Coverage",
        Description: "For Our Latest Press Coverage",
        LinkUrl: "/about-us/press-coverage",
        Category: "Claims",
        Image: {
          id: 124,
          documentId: "fj18g647u1ftluf47159447s",
          url: "/uploads/Group_1410117291_3f8b335b11.png",
          alternativeText: null,
          caption: null,
          name: "Group 1410117291.png"
        }
      },
      {
        id: 9,
        Title: "Press Coverage Media",
        Description: "For Our Latest Press Coverage",
        LinkUrl: "/about-us/press-coverage",
        Category: "Media",
        Image: {
          id: 124,
          documentId: "fj18g647u1ftluf47159447s",
          url: "/uploads/Group_1410117291_3f8b335b11.png",
          alternativeText: null,
          caption: null,
          name: "Group 1410117291.png"
        }
      }
    ]
  
  

  return (
    <LandingLayout>
      <div className={styles.contactWrapper}>
        <Container>
          {/* Breadcrumb Navigation */}
          <Breadcrumbs values={breadcrumbs} />

          {/* Page Title and Description */}
          {/* <TitleSubtitle
            title={props?.pageData?.PageTitle}
            subtitle={props?.pageData?.PageDesc}
            extraClass="desc-max-60 pageTitle"
          /> */}
        </Container>

        {/* Customer Service Section */}
        <CustomerService csData={props?.pageData?.CustomerService} />

        {/* Digital Contact Section */}
        <ReachUsDigitalContact reachUsCard={props?.pageData?.Contact_Details_Cards} AIcontactUs />

        {/* Reach Out Section */}
        <ReachOutcenter  reachOuttabs={reachOuttabs} MediaCard={MediaCard}/>

        {/* Visit Us Section */}
        <VisitUs visitUsCard={props?.pageData?.VisitUs} />

        {/* Investment Plan Section */}
        <InvestPlan appLink={props?.pageData?.AppLink} />

        {/* Frequently Asked Questions (FAQs) Section */}
        <Faqs faqData={props?.pageData?.Faqs} />

        {/* IRDA (Insurance Regulatory and Development Authority) Section */}
        <IrdaSection />
      </div>
    </LandingLayout>
  );
};

// Fetching data from API on the server side
export async function getServerSideProps(context) {
  try {
    // Fetch Contact Us page data from API based on Page URL filter
    const contactUsData = await apiClient('/api/contact-uses?filters[PageUrl][$eq]=/contact-us');

    return {
      props: {
        pageData: contactUsData?.data[0], // Passing API data to props
      },
    };
  } catch (error) {
    console.error("Error fetching contact us data:", error);

    // Return empty props in case of an error to prevent page crash
    return {
      props: {
        pageData: {},
      },
    };
  }
}

export default ContactUs;
