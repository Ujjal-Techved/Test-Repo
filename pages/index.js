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

export default function Home() {

    // Array for Stageoption data
    const stageOptionsData = [

        {
            id: 1,
            name: 'Young Professional',
            imgSrc: 'images/home/youngprofessional.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 2,
            name: 'Expert Professional',
            imgSrc: 'images/home/expertprofessional.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 3,
            name: 'Young Parent',
            imgSrc: 'images/home/youngparent.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 4,
            name: 'Teen Parent',
            imgSrc: 'images/home/teenparent.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 5,
            name: 'Retirement',
            imgSrc: 'images/home/retirementold.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 6,
            name: 'Help Me Choose',
            imgSrc: 'images/home/helpmechoose.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        }
    ];

     // Array for FGLI life Insurance
     const insuranceData = [
        {
            imgSrc: 'images/home/branches.png',
            value: '1366',
            text: 'Self & Partner Branches',
        },
        {
            imgSrc: 'images/home/livecovered.png',
            value: '1.6 Mn+',
            text: 'Lives Covered Since Inception',
        },
        {
            imgSrc: 'images/home/asset.png',
            value: '₹79.58 Bn',
            text: 'Worth of Asset Under Management',
        },
        {
            imgSrc: 'images/home/claims.png',
            value: '96.08%',
            text: 'Claims Settlement Ratio',
        }
    ];

    // Array for choosegoal data
    const choosegoalData = [

        {
            id: 1,
            name: 'Young Professional',
            imgSrc: 'images/home/youngprofessional.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 2,
            name: 'Expert Professional',
            imgSrc: 'images/home/expertprofessional.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 3,
            name: 'Young Parent',
            imgSrc: 'images/home/youngparent.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 4,
            name: 'Teen Parent',
            imgSrc: 'images/home/teenparent.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        },
        {
            id: 5,
            name: 'Retirement',
            imgSrc: 'images/home/retirementold.png',
            description: 'Just starting their career and exploring financial independence',
            linkhref: '/'
        }
    ];

    // Array of coverage tabs data
    const coveragetabs = [
        { id: "1", tabtitle: "Featured" },
        { id: "2", tabtitle: "Term" },
        { id: "3", tabtitle: "Saving" },
        { id: "4", tabtitle: "ULIP" },
        { id: "5", tabtitle: "Group" },
        { id: "6", tabtitle: "Retirement" },
    ];


    // Array of coverage Plan data 
    const coverageplansData = [
        {
            id: 1,
            title: "Long Term Income Plan",
            subtitle: "Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "Featured"
        },
        {
            id: 2,
            title: "Money Back Super Plan",
            subtitle: "Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "Featured"
        },
        {
            id: 3,
            title: "New Assured Wealth Plan",
            subtitle: "Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "Featured"
        },
        {
            id: 4,
            title: "Long Term Income Plan",
            subtitle: "Term Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "Term"
        },
        {
            id: 5,
            title: "Money Back Super Plan",
            subtitle: "Term Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "Term"
        },
        {
            id: 6,
            title: "New Assured Wealth Plan",
            subtitle: "Term Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "Term"
        },
        {
            id: 7,
            title: "Long Term Income Plan",
            subtitle: "Saving Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "Saving"
        },
        {
            id: 8,
            title: "Money Back Super Plan",
            subtitle: "Saving Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "Saving"
        },
        {
            id: 9,
            title: "New Assured Wealth Plan",
            subtitle: "Saving Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "Saving"
        },
        {
            id: 10,
            title: "Long Term Income Plan",
            subtitle: "ULIP Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "ULIP"
        },
        {
            id: 11,
            title: "Money Back Super Plan",
            subtitle: "ULIP Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "ULIP"
        },
        {
            id: 12,
            title: "New Assured Wealth Plan",
            subtitle: "ULIP Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "ULIP"
        },
        {
            id: 13,
            title: "Long Term Income Plan",
            subtitle: "Group Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "Group"
        },
        {
            id: 14,
            title: "Money Back Super Plan",
            subtitle: "Group Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "Group"
        },
        {
            id: 15,
            title: "New Assured Wealth Plan",
            subtitle: "Group Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "Group"
        },
        {
            id: 16,
            title: "Long Term Income Plan",
            subtitle: "Retirement Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "Retirement"
        },
        {
            id: 17,
            title: "Money Back Super Plan",
            subtitle: "Retirement Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "Retirement"
        },
        {
            id: 18,
            title: "New Assured Wealth Plan",
            subtitle: "Retirement Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "Retirement"
        },
    ];


      // Array of protecting life data
      const protectplanData = [
        {
            title: 'Explore Plans',
            subtitle: 'Browse our wide range of insurance options.',
            imgSrc: 'images/home/exploreplans.png',
            LinkText: 'Explore Plans',
            Link: '/',

        },
        {
            title: 'Consult an Advisor',
            subtitle: 'Speak to our expert advisors for guidance.',
            imgSrc: 'images/home/ConsultanAdvisor.png',
            LinkText: 'Talk to an Advisor',
            Link: '/',

        },
        {
            title: 'Secure your policy',
            subtitle: 'Complete your application and relax with peace of mind.',
            imgSrc: 'images/home/secureyourpolicy.png',
            LinkText: 'Calculate Premium',
            Link: '/',

        }

    ];

    // Our Teammember Tabs array data

    const teamMemberstabs = [
        { id: "1", tabtitle: "General" },
        { id: "2", tabtitle: "Investment" },
        { id: "3", tabtitle: "Claims" },
        { id: "4", tabtitle: "Returns" },
    ];

    // Our Teammember array data

    const teamMemberData = [
        {
            id: 1,
            name: "Harshvardhan Upadhaya",
            image: "/images/careers/person.png",
            feedback: "General The team at FGILI took the time to carefully explain the options available to me and helped me make informed decisions.",
            rating: 2.5,
            category: "General"
        },
        {
            id: 2,
            name: "Ananya Sharma",
            image: "/images/careers/person.png",
            feedback: "General Working at FGILI has been a great experience. The support and opportunities for growth are fantastic!",
            rating: 4.5,
            category: "General"
        },
        {
            id: 3,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "General Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "General"
        },
        {
            id: 4,
            name: "Harshvardhan Upadhaya",
            image: "/images/careers/person.png",
            feedback: "General The team at FGILI took the time to carefully explain the options available to me and helped me make informed decisions.",
            rating: 2.5,
            category: "General"
        },
        {
            id: 5,
            name: "Ananya Sharma",
            image: "/images/careers/person.png",
            feedback: "General Working at FGILI has been a great experience. The support and opportunities for growth are fantastic!",
            rating: 4.5,
            category: "General"
        },
        {
            id: 6,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Investment Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Investment"
        },
        {
            id: 7,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Investment Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Investment"
        },
        {
            id: 8,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Investment Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Investment"
        },
        {
            id: 9,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Claims Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Claims"
        },
        {
            id: 10,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Claims Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Claims"
        },
        {
            id: 11,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Claims Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Claims"
        },
        {
            id: 12,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Claims Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Claims"
        },
        {
            id: 13,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Claims Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Claims"
        },
        {
            id: 14,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Returns Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Returns"
        },
        {
            id: 15,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Returns Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Returns"
        },
        {
            id: 16,
            name: "Rohan Mehta",
            image: "/images/careers/person.png",
            feedback: "Returns Future Generali provides an amazing work culture that fosters innovation and collaboration.",
            rating: 5,
            category: "Returns"
        }
    ];


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
            <CommonChatbot />
            <HomeBanner />
            <BeststageOption stageOptionsData={stageOptionsData} />
            <LifeInsurance insuranceData={insuranceData} />
            <WhatisGenrali />
            <WhylifeInsurance />
            <ChooseGoal choosegoalData={choosegoalData} />
            <TypesofInsurance />
            <RequestCallback />
            <CoverageOption coveragetabs={coveragetabs} coverageplansData={coverageplansData} />
            <ProtectPlan protectplanData={protectplanData} />
            <OurCustomer teamMemberstabs={teamMemberstabs} teamMemberData={teamMemberData} />
            <InvestPlan />
            <Faqs faqItems={faqData}
                title={"Frequently Asked Questions"}
                subtitle={"See some of the most common questions below."} />

            <IrdaSection />
        </LandingLayout>
    );
}