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
import Head from 'next/head';

const ContactUs = (props) => {

  // Define breadcrumbs for navigation
  const breadcrumbs = [
    { name: "Contact Us", url: props?.pageData?.PageUrl, active: true },
  ];


  return (
    <>
      <Head>
        <title>{props?.pageData?.SeoSection?.TitleTag}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="keywords" content={props?.pageData?.SeoSection?.MetaKeyword} />
        <meta name="description" content={props?.pageData?.SeoSection?.MetaDescription} />
        <link rel="canonical" href={props?.pageData?.SeoSection?.CanonicalTag} key="canonical" />
        {props?.pageData?.SeoSection?.SchemaTag?.map(
          (schemas) => {
            return (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: schemas.Text,
                }}
              />
            );
          }
        )}
      </Head>
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
          <CustomerService csData={props?.pageData} />

          {/* Digital Contact Section */}
          <ReachUsDigitalContact title={props?.pageData?.ConnectUs?.Title}
            subtitle={props?.pageData?.ConnectUs?.Description}
            reachUsCard={props?.pageData?.ConnectUs?.ConnectUsCards} AIcontactUs />

          {/* Reach Out Section */}
          <ReachOutcenter reactOutData={props?.pageData?.ReachOutSection} />

          {/* Investment Plan Section */}
          <InvestPlan investPlanData={props?.pageData?.AppLink} />

          {/* Frequently Asked Questions (FAQs) Section */}
          <Faqs faqData={props?.pageData?.Faqs} />

          {/* IRDA (Insurance Regulatory and Development Authority) Section */}
          <IrdaSection />

        </div>
      </LandingLayout>
    </>
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
