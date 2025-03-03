import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import Styles from './ProductLanding.module.css'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import { Container } from 'reactstrap';
import ComparePlan from '@/components/PLP/ComparePlan/ComparePlan';
import CoverageOption from '@/components/PLP/CoverageOption/CoverageOption';
import OurCustomer from '@/components/PLP/OurCustomer/OurCustomer';
import Faqs from '@/components/Common/Faqs/Faqs';
const index = () => {

    // Create the breadcrumbs array
    const breadcrumbs = [
        { name: "Product Landing", url: "/product-landing", active: true },
    ]

    // Array of coverage tabs data, used to dynamically create tab navigation
    const coveragetabs = [
        { id: "1", tabtitle: "Child" },
        { id: "2", tabtitle: "Term" },
        { id: "3", tabtitle: "Saving" },
        { id: "4", tabtitle: "ULIP" },
        { id: "5", tabtitle: "Group" },
        { id: "6", tabtitle: "Retirement" },
    ];

    // Array of coverage plan data, used to dynamically create data display
    const coverageplansData = [
        {
            "id": "",
            "Brand": "Future Generali",
            "Title": "Long Term Income Plan",
            "Description": "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            "Pointers": [
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Guaranteed Additions",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Tax Benefits under section 80C and 10(10D)",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            ],
            "KnowMoreLink": "/insurance-plans/guaranteed-plans/future-generali-long-term-income-plan",
            "TalkToAdvisorLink": "/customer-service/send-an-advisor",
            "MostPopular": null,
            "Category": "Child",
            "BadgeText": null,
            "ProductUIN": null
        },
        {
            "id": "",
            "Brand": "Future Generali",
            "Title": "Money Back Super Plan",
            "Description": "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            "Pointers": [
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Guaranteed Additions",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Tax Benefits under section 80C and 10(10D)",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            ],
            "KnowMoreLink": "/insurance-plans/guaranteed-plans/money-back-super-plan-non-pos-variant",
            "TalkToAdvisorLink": "/customer-service/send-an-advisor",
            "MostPopular": true,
            "Category": "Child",
            "BadgeText": null,
            "ProductUIN": null
        },
        {
            "id": "",
            "Brand": "Future Generali",
            "Title": "New Assured Wealth Plan",
            "Description": "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            "Pointers": [
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Guaranteed Additions",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Tax Benefits under section 80C and 10(10D)",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            ],
            "KnowMoreLink": "/insurance-plans/guaranteed-plans/new-assured-wealth-plan-non-pos-variant",
            "TalkToAdvisorLink": "/customer-service/send-an-advisor",
            "MostPopular": null,
            "Category": "Child",
            "BadgeText": null,
            "ProductUIN": null
        },
        {
            "id": "",
            "Brand": "Future Generali",
            "Title": "New Assured Wealth Plan",
            "Description": "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            "Pointers": [
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Guaranteed Additions",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Tax Benefits under section 80C and 10(10D)",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            ],
            "KnowMoreLink": "/insurance-plans/guaranteed-plans/new-assured-wealth-plan-non-pos-variant",
            "TalkToAdvisorLink": "/customer-service/send-an-advisor",
            "MostPopular": null,
            "Category": "Term",
            "BadgeText": null,
            "ProductUIN": null
        },
        {
            "id": "",
            "Brand": "Future Generali",
            "Title": "New Assured Wealth Plan",
            "Description": "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            "Pointers": [
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Guaranteed Additions",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Tax Benefits under section 80C and 10(10D)",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            ],
            "KnowMoreLink": "/insurance-plans/guaranteed-plans/new-assured-wealth-plan-non-pos-variant",
            "TalkToAdvisorLink": "/customer-service/send-an-advisor",
            "MostPopular": null,
            "Category": "Saving",
            "BadgeText": null,
            "ProductUIN": null
        },
        {
            "id": "",
            "Brand": "Future Generali",
            "Title": "New Assured Wealth Plan",
            "Description": "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            "Pointers": [
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Guaranteed Additions",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Tax Benefits under section 80C and 10(10D)",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            ],
            "KnowMoreLink": "/insurance-plans/guaranteed-plans/new-assured-wealth-plan-non-pos-variant",
            "TalkToAdvisorLink": "/customer-service/send-an-advisor",
            "MostPopular": null,
            "Category": "ULIP",
            "BadgeText": null,
            "ProductUIN": null
        },
        {
            "id": "",
            "Brand": "Future Generali",
            "Title": "New Assured Wealth Plan",
            "Description": "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            "Pointers": [
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Guaranteed Additions",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Tax Benefits under section 80C and 10(10D)",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            ],
            "KnowMoreLink": "/insurance-plans/guaranteed-plans/new-assured-wealth-plan-non-pos-variant",
            "TalkToAdvisorLink": "/customer-service/send-an-advisor",
            "MostPopular": null,
            "Category": "Group",
            "BadgeText": null,
            "ProductUIN": null
        },
        {
            "id": "",
            "Brand": "Future Generali",
            "Title": "New Assured Wealth Plan",
            "Description": "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            "Pointers": [
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Guaranteed Additions",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Regular payouts with Guaranteed Money Back",
                                    "type": "text"
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "text": "Tax Benefits under section 80C and 10(10D)",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                }
            ],
            "KnowMoreLink": "/insurance-plans/guaranteed-plans/new-assured-wealth-plan-non-pos-variant",
            "TalkToAdvisorLink": "/customer-service/send-an-advisor",
            "MostPopular": null,
            "Category": "Retirement",
            "BadgeText": null,
            "ProductUIN": null
        }
    ]


    // Our Teammember Tabs array data for dynamically displaying tabs
    const teamMemberstabs = [
        { id: "1", tabtitle: "General" },
        { id: "2", tabtitle: "Investment" },
        { id: "3", tabtitle: "Claims" },
        { id: "4", tabtitle: "Returns" },
    ];

    // Our Teammember detail array data for dynamically displaying.
    const teamMemberData = [
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
        }
    ]

    const faqItems = 
        {
            "Faq_Section": {
                "id": 17,
                "Title": "Got Questions? We’ve Got Answers!",
                "Description": "Answers to some of the most common questions we get.",
                "FaqList": [
                    {
                        "id": 59,
                        "Question": "What is life insurance, and why do I need it?",
                        "Answer": "Life insurance is a financial safety net that provides a payout to your loved ones if something happens to you. A life insurance company ensures they can cover daily expenses, repay loans, and achieve future goals. It offers peace of mind, knowing your family’s financial future is secure, even when you’re not around. "
                    },
                    {
                        "id": 60,
                        "Question": "How do I choose the right life insurance plan?",
                        "Answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        "id": 61,
                        "Question": "How much life insurance coverage do I need?",
                        "Answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                        "id": 62,
                        "Question": "Can I buy life insurance online?",
                        "Answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                ]
            }
        }
    

    return (
        <LandingLayout>
            <div>
                <Container>
                    <Breadcrumbs values={breadcrumbs} />
                </Container>
                <CoverageOption coveragetabs={coveragetabs} coverageplansData={coverageplansData} />
                <ComparePlan />
                <OurCustomer teamMemberstabs={teamMemberstabs} teamMemberData={teamMemberData} />
                {/* FAQ section with static title and subtitle */}
                <Faqs
                    faqItems={faqItems}
                    // title={"Got Questions? We’ve Got Answers!"}
                    // subtitle={"Answers to some of the most common questions we get."}
                />
            </div>
        </LandingLayout>
    )
}

export default index