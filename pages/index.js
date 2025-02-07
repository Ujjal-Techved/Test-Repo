import Faqs from "@/components/Common/Faqs/Faqs";
import IrdaSection from "@/components/ContactUs/IrdaSection/IrdaSection";
import BeststageOption from "@/components/Home/BeststageOption/BeststageOption";
import CoverageOption from "@/components/Home/CoverageOption/CoverageOption";
import LifeInsurance from "@/components/Home/LifeInsurance/LifeInsurance";
import ProtectPlan from "@/components/Home/ProtectPlan/ProtectPlan";
import RequestCallback from "@/components/Home/RequestCallback/RequestCallback";
import TypesofInsurance from "@/components/Home/TypesofInsurance/TypesofInsurance";
import WhatisGenrali from "@/components/Home/WhatisGenrali/WhatisGenrali";
import WhylifeInsurance from "@/components/Home/WhylifeInsurance/WhylifeInsurance";
import LandingLayout from "@/components/Layouts/LandingLayout";

export default function Home() {

    // Array for FAQ Data


    // Array for FAQ Data
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
            {/* <BeststageOption/> */}
            <LifeInsurance />
            <WhatisGenrali/>
            <WhylifeInsurance/>
            <TypesofInsurance/>
            <RequestCallback/>
            <CoverageOption />
            <ProtectPlan />
            <Faqs faqItems={faqData}
                title={"Frequently Asked Questions"}
                subtitle={"See some of the most common questions below."} />
           
            <IrdaSection />
        </LandingLayout>
    );
}