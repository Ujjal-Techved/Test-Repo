import React from 'react'
import styles from './Aboutus.module.css'
import LandingLayout from '@/components/Layouts/LandingLayout'
import { Container } from 'reactstrap'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'
import LegacyTrust from '@/components/AboutUs/LegacyTrust/LegacyTrust'
import OurJourney from '@/components/AboutUs/OurJourney/OurJourney'
import PartnerFuturegroup from '@/components/AboutUs/PartnerFuturegroup/PartnerFuturegroup'
import MediaCenter from '@/components/AboutUs/MediaCenter/MediaCenter'
import ReportsDiscloser from '@/components/AboutUs/ReportsDisclousures/ReportsDiscloser'
import Awards from '@/components/AboutUs/Awards/Awards'
import SocialResponsibility from '@/components/AboutUs/SocialResponsibility/SocialResponsibility'
import Leaders from '@/components/AboutUs/Leaders/Leaders'
import GuidePrinciple from '@/components/AboutUs/GuidePrinciple/GuidePrinciple'
import Milestone from '@/components/AboutUs/Milestone/Milestone'
import { apiClient } from '../../utils/apiClient';  // Ensure correct path
import HelpingPeople from '@/components/AboutUs/HelpingPeople/HelpingPeople'

const Aboutus = (props) => {
  // Breadcrumbs for navigation within the "About Us" page
  const breadcrumbs = [
    { name: "About Us", url: props?.aboutUsData?.PageUrl, active: true },
  ]

  return (
    <LandingLayout>
      <div className={styles.contactWrapper}>
        <Container>
          {/* Breadcrumb navigation */}
          <Breadcrumbs values={breadcrumbs} />
        </Container>

        {/* Different sections of the About Us page, receiving data as props */}
        <LegacyTrust legacyTrustrData={props?.aboutUsData} />

        {/* PartnerFuturegroup Section */}
        <PartnerFuturegroup partnerFuturegroupData={props?.aboutUsData} />

        {/* Our journey Section */}
        <OurJourney insuranceData={props?.aboutUsData} />

        {/* GuidePrinciple Section */}
        <GuidePrinciple guidePrincipleData={props?.aboutUsData} />

        {/* Leaders Section */}
        <Leaders leadersListData={props?.aboutUsData} />

        {/* Our journey Section */}
        <ReportsDiscloser reportsData={props?.aboutUsData} />

        {/* Helping People Section */}
        <HelpingPeople />

        {/* Awards Section */}
        <Awards awardData={props?.aboutUsData} />

        {/* Milestone Section */}
        <Milestone milestoneList={props?.aboutUsData} />

        {/* MediaCenter Section */}
        <MediaCenter mediacenterData={props?.aboutUsData} />

        {/* SocialResponsibility Section */}
        <SocialResponsibility socialResponsibility={props?.aboutUsData} />

      </div>
    </LandingLayout>
  )
}

// ✅ Fetch data from API using getServerSideProps to ensure fresh data on each request
export async function getServerSideProps(context) {
  try {
    // 🔹 Fetch About Us page data from the API
    const response = await apiClient('/api/about-uses?filters[PageUrl][$eq]=/about-us');

    return {
      props: {
        aboutUsData: response?.data?.[0] || {}, // ✅ Ensure aboutUsData is not undefined
      },
    };
  } catch (error) {
    console.error("Error fetching About Us page data:", error);

    // ✅ Return an empty object to prevent the page from crashing in case of an error
    return {
      props: {
        aboutUsData: {}, // Safely return empty data
      },
    };
  }
}

export default Aboutus;
