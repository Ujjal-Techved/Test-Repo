import CommonChatbot from "@/components/Common/CommonChatbot/CommonChatbot";
import Faqs from "@/components/Common/Faqs/Faqs";
import InvestPlan from "@/components/ContactUs/InvestPlan/InvestPlan";
import IrdaSection from "@/components/ContactUs/IrdaSection/IrdaSection";
import BeststageOption from "@/components/Home/BeststageOption/BeststageOption";
import ChooseGoal from "@/components/Home/ChooseGoal/ChooseGoal";
import CoverageOption from "@/components/Home/CoverageOption/CoverageOption";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import LifeInsurance from "@/components/Home/LifeInsurance/LifeInsurance";
import OurCustomer from "@/components/Home/OurCustomer/OurCustomer";
import ProtectPlan from "@/components/Home/ProtectPlan/ProtectPlan";
import RequestCallback from "@/components/Home/RequestCallback/RequestCallback";
import TypesofInsurance from "@/components/Home/TypesofInsurance/TypesofInsurance";
import WhatisGenrali from "@/components/Home/WhatisGenrali/WhatisGenrali";
import WhylifeInsurance from "@/components/Home/WhylifeInsurance/WhylifeInsurance";
import LandingLayout from "@/components/Layouts/LandingLayout";
import { apiClient } from '../utils/apiClient'; // ✅ Ensure correct import path

export default function Home(props) {

    // Array of coverage tabs data, used to dynamically create tab navigation
    const coveragetabs = [
        { id: "1", tabtitle: "Featured" },
        { id: "2", tabtitle: "Term" },
        { id: "3", tabtitle: "Saving" },
        { id: "4", tabtitle: "ULIP" },
        { id: "5", tabtitle: "Group" },
        { id: "6", tabtitle: "Retirement" },
    ];

    // Our Teammember Tabs array data for dynamically displaying tabs
    const teamMemberstabs = [
        { id: "1", tabtitle: "General" },
        { id: "2", tabtitle: "Investment" },
        { id: "3", tabtitle: "Claims" },
        { id: "4", tabtitle: "Returns" },
    ];

    return (
        <LandingLayout>
            {/* Common Chatbot component */}
            <CommonChatbot />

            {/* Home Banner section with data passed from props */}
            <HomeBanner homeBannerData={props?.homePageData} />
            
            {/* Beststage Option section */}
            <BeststageOption bestStageData={props?.homePageData} />

            {/* Life Insurance section */}
            <LifeInsurance lifeInsurData={props?.homePageData} />
            
            {/* What is Generali section */}
            <WhatisGenrali whatIsData={props?.homePageData} />
            
            {/* Why Life Insurance section */}
            <WhylifeInsurance whylifeInsurData={props?.homePageData} />
            
            {/* Choose Goal section */}
            <ChooseGoal choosegoalData={props?.homePageData} />
            
            {/* Types of Insurance section */}
            <TypesofInsurance insurancetypesData={props?.homePageData} />
            
            {/* Request Callback section */}
            <RequestCallback requestCallbackData={props?.homePageData} />
            
            {/* Coverage Option section */}
            <CoverageOption coveragetabs={coveragetabs} coverageplansData={props?.homePageData} />
            
            {/* Protect Plan section */}
            <ProtectPlan protectplanData={props?.homePageData} />
            
            {/* Our Customer section */}
            <OurCustomer teamMemberstabs={teamMemberstabs} teamMemberData={props?.homePageData} />
            
            {/* Invest Plan section */}
            <InvestPlan investPlanData={props?.homePageData} />
            
            {/* FAQ section with static title and subtitle */}
            <Faqs 
                faqItems={props?.homePageData}
                title={"Frequently Asked Questions"}
                subtitle={"See some of the most common questions below."} 
            />

            {/* IRDA Section */}
            <IrdaSection irdaSectionData={props?.homePageData} />
        </LandingLayout>
    );
};

// ✅ Fetch data from API using getServerSideProps
export async function getServerSideProps(context) {
  try {
    // 🔹 Fetch home page data using API client
    const response = await apiClient('/api/home-pages?filters[PageUrl][$eq]=/');

    return {
      props: {
        homePageData: response?.data?.[0] || {}, // ✅ Ensure homePageData is not undefined
      },
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    
    // ✅ Return an empty object to prevent page crash in case of an error
    return {
      props: {
        homePageData: {}, // Safely return empty data
      },
    };
  }
}
