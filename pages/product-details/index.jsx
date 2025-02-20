import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'
import LandingLayout from '@/components/Layouts/LandingLayout'
import React from 'react'
import { Container } from 'reactstrap'
import styles from './ProductDetails.module.css'
import Whylongtermplan from '@/components/PDP/WhylifeInsurance/Whylongtermplan'
import StepbystepGuide from '@/components/PDP/StepbystepGuide/StepbystepGuide'
import RequestCallback from '@/components/Home/RequestCallback/RequestCallback'
import TailoredPlan from '@/components/PDP/TailoredPlan/TailoredPlan'
import LifeInsurance from '@/components/Home/LifeInsurance/LifeInsurance'
import OurCustomer from '@/components/Home/OurCustomer/OurCustomer'
import Faqs from '@/components/Common/Faqs/Faqs'

const index = () => {

    // Create the breadcrumbs array based on state and city
    const breadcrumbs = [
        { name: "Long Term Income Plan", url: "/product-details", active: true },
    ]


    // Array for Data structure containing information about the term plan benefits
    const TermplanCardData = [
        {
            id: 1,
            Title: "Why go for Future Generali Long Term Income Plan?",
            Subtitle:
                "A Life Insurance Savings Plan that provides you long-term financial support through guaranteed long-term income, that too increasing with time along with much-needed life protection for you and your family, so that you enjoy all your life milestones without any worry.",
            TermplanList: [
                {
                    id: 1,
                    Title: "Guaranteed Benefits",
                    Description: "on death, survival, and maturity",
                    Image: { url: "images/product-detail/plan1.png" }
                },
                {
                    id: 2,
                    Title: "Long Term Income",
                    Description: "for up to 50 years",
                    Image: { url: "images/product-detail/plan2.png" }
                },
                {
                    id: 3,
                    Title: "Flexible Life Cover",
                    Description: "with Death Benefit Multiples",
                    Image: { url: "images/product-detail/plan3.png" }
                },
                {
                    id: 4,
                    Title: "Family Income Security",
                    Description: "in your absence",
                    Image: { url: "images/product-detail/plan4.png" }
                },
                {
                    id: 5,
                    Title: "Extended Life Cover",
                    Description: "Awesome perks are just around the corner!",
                    Image: { url: "images/product-detail/plan3.png" }
                },
                {
                    id: 6,
                    Title: "Extended Life Cover",
                    Description: "Awesome perks are just around the corner!",
                    Image: { url: "images/product-detail/plan3.png" }
                },
                {
                    id: 7,
                    Title: "Extended Life Cover",
                    Description: "Awesome perks are just around the corner!",
                    Image: { url: "images/product-detail/plan3.png" }
                },
                {
                    id: 8,
                    Title: "Tax Savings",
                    Description: "Awesome perks are just around the corner!",
                    Image: { url: "images/product-detail/plan5.png" }
                },
                {
                    id: 9,
                    Title: "Loyalty Additions",
                    Description: "from the 11th policy year onward",
                    Image: { url: "images/product-detail/plan4.png" }
                }
            ]
        }
    ];

    // RequestCallback Data
    const requestCallbackData = {
        CallBack: {
            Title: "Get a Call Back Instantly!",
            Description: "Hassle-free advice, personalized plans, and answers to all your questions! 24*7 Available"
        }
    }

    //  Lifeinsurance Data
    const lifeInsurData = {
        LifeInsurance: {
            "id": "",
            "Title": "Future Generali India Life Insurance ",
            "Description": "offers easy-to-understand plans tailored for protection, savings, investments, and health, ensuring your financial peace of mind.",
            "FeatureList": [
                {
                    "id": "",
                    "Title": "1366",
                    "Description": "Self & Partner Branches",
                    "Image": {
                        "id": "",
                        "documentId": "g3dq9x54sca3y7gngp7r6t09",
                        "url": "/uploads/Group_1410117251_c22771f4af.svg",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Group 1410117251.svg"
                    }
                },
                {
                    "id": "",
                    "Title": "1.6 Mn+",
                    "Description": "Lives Covered Since Inception",
                    "Image": {
                        "id": "",
                        "documentId": "yy6hlflc2p3txb8zhdu4jxpf",
                        "url": "/uploads/Group_1410117251_2_7dce5c6892.svg",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Group 1410117251 (2).svg"
                    }
                },
                {
                    "id": "",
                    "Title": "₹79.58 Bn",
                    "Description": "Worth of Asset Under Management",
                    "Image": {
                        "id": "",
                        "documentId": "w70hczzl55i4r7k5f439e3re",
                        "url": "/uploads/Group_1410117251_1_a99aabbaf7.svg",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Group 1410117251 (1).svg"
                    }
                },
                {
                    "id": "",
                    "Title": "96.08%",
                    "Description": "Claims settlement Ratio",
                    "Image": {
                        "id": "",
                        "documentId": "omplyv341f5befxz3n90xyoz",
                        "url": "/uploads/image_e8d037f151.svg",
                        "alternativeText": null,
                        "caption": null,
                        "name": "image.svg"
                    }
                }
            ]
        },
    }


    // Our Teammember Tabs array data for dynamically displaying tabs
    const teamMemberstabs = [
        { id: "1", tabtitle: "General" },
        { id: "2", tabtitle: "Investment" },
        { id: "3", tabtitle: "Claims" },
        { id: "4", tabtitle: "Returns" },
    ];

    const teamMemberData = {
        ReviewSection: {
            "id": 22,
            "Title": "What Our Customers Are Saying ",
            "Description": "Discover how Future Generali has secured peace of mind for families across the nation",
            "ReviewCards": [
                {
                    "id": "",
                    "Name": "Harshvardhan Upadhaya",
                    "Review": "The team at FGILI  took the time to carefully explain the options available to me and helped me make informed decisions.",
                    "Rating": 5,
                    "Category": "General",
                    "Image": {
                        "id": "",
                        "documentId": "h0xg1hm9av0wbyk3ab4f43h7",
                        "url": "/uploads/Rectangle_39629_3e2fa68d90.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Rectangle 39629.png"
                    }
                },
                {
                    "id": "",
                    "Name": "Harshvardhan Upadhaya",
                    "Review": "The team at FGILI  took the time to carefully explain the options available to me and helped me make informed decisions.",
                    "Rating": 3,
                    "Category": "General",
                    "Image": {
                        "id": "",
                        "documentId": "h0xg1hm9av0wbyk3ab4f43h7",
                        "url": "/uploads/Rectangle_39629_3e2fa68d90.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Rectangle 39629.png"
                    }
                },
                {
                    "id": "",
                    "Name": "Harshvardhan Upadhaya",
                    "Review": "The team at FGILI  took the time to carefully explain the options available to me and helped me make informed decisions.",
                    "Rating": 4,
                    "Category": "General",
                    "Image": {
                        "id": "",
                        "documentId": "h0xg1hm9av0wbyk3ab4f43h7",
                        "url": "/uploads/Rectangle_39629_3e2fa68d90.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Rectangle 39629.png"
                    }
                },
                {
                    "id": "",
                    "Name": "Harshvardhan Upadhaya",
                    "Review": "The team at FGILI  took the time to carefully explain the options available to me and helped me make informed decisions.",
                    "Rating": 2,
                    "Category": "General",
                    "Image": {
                        "id": "",
                        "documentId": "h0xg1hm9av0wbyk3ab4f43h7",
                        "url": "/uploads/Rectangle_39629_3e2fa68d90.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Rectangle 39629.png"
                    }
                },
                {
                    "id": "",
                    "Name": "Harshvardhan Upadhaya",
                    "Review": "The team at FGILI took the time to carefully explain the options available to me and helped me make informed decisions.",
                    "Rating": 4,
                    "Category": "Investment",
                    "Image": {
                        "id": "",
                        "documentId": "h0xg1hm9av0wbyk3ab4f43h7",
                        "url": "/uploads/Rectangle_39629_3e2fa68d90.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Rectangle 39629.png"
                    }
                },
                {
                    "id": "",
                    "Name": "Harshvardhan Upadhaya",
                    "Review": "The team at FGILI took the time to carefully explain the options available to me and helped me make informed decisions.",
                    "Rating": 3,
                    "Category": "Claims",
                    "Image": {
                        "id": "",
                        "documentId": "h0xg1hm9av0wbyk3ab4f43h7",
                        "url": "/uploads/Rectangle_39629_3e2fa68d90.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Rectangle 39629.png"
                    }
                },
                {
                    "id": "",
                    "Name": "Harshvardhan Upadhaya",
                    "Review": "The team at FGILI took the time to carefully explain the options available to me and helped me make informed decisions.",
                    "Rating": 5,
                    "Category": "Returns",
                    "Image": {
                        "id": "",
                        "documentId": "h0xg1hm9av0wbyk3ab4f43h7",
                        "url": "/uploads/Rectangle_39629_3e2fa68d90.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Rectangle 39629.png"
                    }
                }
            ]
        }
    }

    // FAQ section Data

    const faqData = {
        Faq_Section: {
                "id": "",
                "Title": "Frequently asked questions",
                "Description": "See some of the most common questions below.",
                "FaqList": [
                    {
                        "id": "",
                        "Question": "What is Life Insurance?",
                        "Answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        "id": "",
                        "Question": "What are riders in life insurance plans?",
                        "Answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        "id": "",
                        "Question": "How Much Life Insurance Cover Do You Need?",
                        "Answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        "id": "",
                        "Question": "What do you mean by the term “ MLC Copy”?",
                        "Answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                ]
            },
    }

    return (
        <LandingLayout>
            <div>
                <Container>
                    <Breadcrumbs values={breadcrumbs} />
                </Container>
                {/* Why long term plan section */}
                <Whylongtermplan TermplanCardData={TermplanCardData} />

                {/* Step by step Guide section */}
                <StepbystepGuide />

                {/* Request Call back section */}
                <RequestCallback requestCallbackData={requestCallbackData} />

                {/* Tailored Plan section */}
                <TailoredPlan />

                {/* Life Insurance section */}
                <LifeInsurance lifeInsurData={lifeInsurData} />

                {/* Our Customer section */}
                <OurCustomer teamMemberstabs={teamMemberstabs} teamMemberData={teamMemberData} />

                {/* FAQ section with static title and subtitle */}
                <Faqs
                    faqItems={faqData}
                    title={"Frequently Asked Questions"}
                    subtitle={"See some of the most common questions below."}
                />

            </div>
        </LandingLayout>
    )
}

export default index