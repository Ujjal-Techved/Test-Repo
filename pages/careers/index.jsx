import React from 'react';
import styles from './careers.module.css';
import LandingLayout from '@/components/Layouts/LandingLayout';
import { Container } from 'reactstrap';
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Benefits from '@/components/Careers/Benefits/Benefits';
import CareerBanner from '@/components/Careers/CareerBanner/CareerBanner';
import Promises from '@/components/Careers/Promises/Promises';
import SendApplication from '@/components/Careers/SendApplication/SendApplication';
import Joinculture from '@/components/Careers/Joinculture/Joinculture';
import Ourteam from '@/components/Careers/Ourteam/Ourteam';
import { apiClient } from '../../utils/apiClient'; // ✅ Ensure correct import path

const Career = (props) => {
  
  // ✅ Generate dynamic breadcrumbs from API response
  const breadcrumbs = [
    { 
      name: props?.pageData?.PageTitle || "Careers", // Default to "Careers" if title is missing
      url: props?.pageData?.PageUrl || "/careers",   // Default to "/careers" if URL is missing
      active: true 
    },
  ];

  return (
    <LandingLayout>
      <Container>
        {/* ✅ Breadcrumb Navigation */}
        <Breadcrumbs values={breadcrumbs} />
      </Container>

      {/* ✅ Pass API data as props to different components */}
      <CareerBanner bannerData={props?.pageData} />
      <Joinculture joinCultureData={props?.pageData} />
      <Promises promisesData={props?.pageData} />
      <SendApplication sendApplicationData={props?.pageData} />
      <Benefits benefitsData={props?.pageData} />
      <Ourteam teamMembers={props?.pageData} />
    </LandingLayout>
  );
};

// ✅ Fetch data from API using getServerSideProps
export async function getServerSideProps(context) {
  try {
    // 🔹 Fetch career page data based on the Page URL filter
    const response = await apiClient('/api/careers?filters[PageUrl][$eq]=/careers');

    return {
      props: {
        pageData: response?.data?.[0] || {}, // ✅ Ensure pageData is not undefined
      },
    };
  } catch (error) {
    console.error("Error fetching careers data:", error);
    
    // ✅ Return an empty object to prevent page crash in case of an error
    return {
      props: {
        pageData: {},
      },
    };
  }
}

export default Career;
