import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import Styles from './ProductLanding.module.css'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import { Container } from 'reactstrap';
import PlpBanner from '@/components/PLP/PlpBanner/PlpBanner';
import ComparePlan from '@/components/PLP/ComparePlan/ComparePlan';
import CoverageOption from '@/components/PLP/CoverageOption/CoverageOption';
import OurCustomer from '@/components/PLP/OurCustomer/OurCustomer';
import Faqs from '@/components/Common/Faqs/Faqs';
import Whyinsurancematter from '@/components/PLP/Whyinsurancematter/Whyinsurancematter';
import TypesOfPolicies from '@/components/PLP/TypesOfPolicies/TypesOfPolicies';
import PlpCallback from '@/components/PLP/PlpCallback/PlpCallback';
import ChooseGoal from '@/components/PLP/ChooseGoal/ChooseGoal';
import IrdaSection from '@/components/ContactUs/IrdaSection/IrdaSection';
import { apiClient } from '../../utils/apiClient';  // Ensure correct path

const index = (props) => {

    // Create the breadcrumbs array
    const breadcrumbs = [
        { name: "Life Insurance", url: props?.aboutUsData?.PageUrl, active: true },
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
    ];

    // Array for coverage option Benefits

    const CoverageBenefits = [
        {
            "id": "",
            "Description": "Future Generali offers different kinds of simple-to-understand life insurance policies. These plans will help meet your various needs such as protection, savings, investments, child’s education, health etc.",
            "Category": "Child",
            "BenefitsList": [
                {
                    "id": "",
                    "Description": "Funds are received at key life stages.",
                    "Image": {
                        "id": "",
                        "documentId": "xaos8pjs8pppcmxj23hb6aei",
                        "url": "/images/product-landing/benefit1.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "3d-icons-81-b 1.png"
                    }
                },
                {
                    "id": "",
                    "Description": "Plan remains active if insured parent is absent.",
                    "Image": {
                        "id": "",
                        "documentId": "rfbkc13gybbojm724x33rwd1",
                        "url": "/images/product-landing/benefit2.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "money-back-icon-3d-rendering-b.png"
                    }
                },
                {
                    "id": "",
                    "Description": "Add riders for extra security and benefits.",
                    "Image": {
                        "id": "",
                        "documentId": "rfbkc13gybbojm724x33rwd1",
                        "url": "/images/product-landing/benefit3.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "money-back-icon-3d-rendering-b.png"
                    }
                },
                {
                    "id": "",
                    "Description": "Eligible under Section 80C (subject to change).",
                    "Image": {
                        "id": "",
                        "documentId": "rfbkc13gybbojm724x33rwd1",
                        "url": "/images/product-landing/benefit4.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "money-back-icon-3d-rendering-b.png"
                    }
                },
                {
                    "id": "",
                    "Description": "Benefits under Section10(10D) (subject to change).",
                    "Image": {
                        "id": "",
                        "documentId": "rfbkc13gybbojm724x33rwd1",
                        "url": "/images/product-landing/benefit5.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "money-back-icon-3d-rendering-b.png"
                    }
                }
            ]
        },
        {
            "id": 10,
            "Description": "Terms Future Generali offers different kinds of simple-to-understand life insurance policies. These plans will help meet your various needs such as protection, savings, investments, child’s education, health etc.",
            "Category": "Term",
            "BenefitsList": [
                {
                    "id": 23,
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Image": {
                        "id": 129,
                        "documentId": "q2fvoh6p3f8kot08lv6wysar",
                        "url": "/uploads/insurance_concep_7d6145a7ae.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "insurance-concep.png"
                    }
                },
                {
                    "id": 24,
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Image": {
                        "id": 131,
                        "documentId": "u92b7f6cfs8gshe2z5onzqux",
                        "url": "/uploads/growing_money_b99a826895.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "growing-money.png"
                    }
                },
                {
                    "id": 25,
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Image": {
                        "id": 133,
                        "documentId": "zmy33iooi9r0bbq77leqmdfs",
                        "url": "/uploads/rb_32393_1_3091fa97b3.png",
                        "alternativeText": null,
                        "caption": null,
                        "name": "rb_32393 1.png"
                    }
                }
            ]
        }
    ];

    // Array for Choose Goal Options 
    const ChoosegoalData = {
        "ChooseGoal": {
            "id": 11,
            "Title": "Choose your goal and calculate your path",
            "Description": "Tell us your goals, and we’ll guide you to the perfect life insurance solution",
            "CardList": [
                {
                    "id": 165,
                    "Text": "Plan my dream vacation",
                    "Description": "LoreLorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Url": "/",
                    "Image": {
                        "id": 67,
                        "documentId": "g1c58v71mfxtw93u5zbkdykp",
                        "url": "/uploads/image_1_6bd845ea64.svg",
                        "alternativeText": null,
                        "caption": null,
                        "name": "image (1).svg"
                    }
                },
                {
                    "id": 166,
                    "Text": "Buy a home",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Url": "/",
                    "Image": {
                        "id": 68,
                        "documentId": "asp4tivgwy7o0mrq5cm00zqm",
                        "url": "/uploads/Frame_1984078174_5_5b9bbf2935.svg",
                        "alternativeText": null,
                        "caption": null,
                        "name": "Frame 1984078174 (5).svg"
                    }
                },

            ]
        }
    };

    // Array for Data structure containing information about the term plan benefits
    const TermplanCardData = [
        {
            id: 1,
            Title: "Why Life Insurance Matters",
            Subtitle:
                "Life insurance provides financial security for your loved ones, helps you plan for future goals, and ensures peace of mind during uncertain times. It’s a vital step in protecting your family and building a secure financial foundation.",
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
    ];

    // Array for FAQ data

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
    };


    const policyList = [
        {
            Title: "Term Plans",
            Coverage: "Pure risk cover (only death benefit)",
            Image: {
                url: "/uploads/rb_34597_1_5f1c04687f.png",
            }
        },
        {
            Title: "Traditional Endowment Plans",
            Coverage: "Insurance Cover + Savings (death benefit + maturity benefit)",
            Image: {
                url: "/uploads/growing_money_b99a826895.png",
            }
        },
        {
            Title: "Money Back Plans",
            Coverage: "Insurance cover with periodic returns",
            Image: {
                url: "/uploads/money_back_icon_3d_rendering_b_9ee05a9371.png",
            }
        },
        {
            Title: "Whole Life Insurance Plans",
            Coverage: "Coverage for a lifetime",
            Image: {
                url: "/uploads/3d_icons_81_b_1_ec930f148c.png",
            }
        },
        {
            Title: "Child Plans",
            Coverage: "To create a corpus for child's education + waiver of premium \n(in case of death of parents)",
            Image: {
                url: "/uploads/rb_32393_1_3091fa97b3.png",
            }
        },
        {
            Title: "Retirement Plans",
            Coverage: "Life Cover + Regular Income for an independent and worry-free retirement",
            Image: {
                url: "/uploads/pension_fund_3d_illustration_icon_1_bea10fe935.png",
            }
        },
        {
            Title: "ULIPs",
            Coverage: "Insurance + Wealth Creation (market linked returns)",
            Image: {
                url: "/uploads/insurance_concep_7d6145a7ae.png",
            }
        }
    ]

    // Array for IRDA Section
    const irdadata = {
        "IrdaSection": {
            "id": 9,
            "LeftText": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "IRDAI Registration No: ",
                            "type": "text"
                        },
                        {
                            "bold": true,
                            "text": "133",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "(Validity 31st March 2025)",
                            "type": "text"
                        }
                    ]
                }
            ],
            "RightText": [
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "License Category: ",
                            "type": "text"
                        },
                        {
                            "bold": true,
                            "text": "Life",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "CIN:- ",
                            "type": "text"
                        },
                        {
                            "bold": true,
                            "text": "U66010MH2006PLC165288",
                            "type": "text"
                        }
                    ]
                }
            ],
            "Image": {
                "id": 91,
                "documentId": "lx2iyo746m93924dyxz0spu5",
                "url": "/uploads/Mask_group_c3f04650b2.png",
                "alternativeText": null,
                "caption": null,
                "name": "Mask group.png"
            }
        }
    }

    console.log(props?.productLisData)

    return (
        <LandingLayout>
            <div>
                <Container>
                    <Breadcrumbs values={breadcrumbs} />
                </Container>

                {/* FAQ section with static title and subtitle */}
                <PlpBanner bannerData={props?.productLisData} />

                {/* Whyinsurancematter section with static title and subtitle */}
                <Whyinsurancematter whyInsMatterData={props?.productLisData} />

                {/* ChooseGoal section */}
                <ChooseGoal choosegoalData={props?.productLisData} />

                {/* CoverageOption section with static title and subtitle*/}
                <CoverageOption coveragetabs={coveragetabs} CoverageBenefits={CoverageBenefits} coverageplansData={coverageplansData} />

                {/* PlpCallback section with static title and subtitle */}
                <PlpCallback />

                {/* TypesOfPolicies section with static title and subtitle */}
                <TypesOfPolicies policyList={policyList} />

                {/* ComparePlan section with static title and subtitle */}
                <ComparePlan />

                {/* OurCustomer section with static title and subtitle */}
                <OurCustomer teamMemberstabs={teamMemberstabs} teamMemberData={teamMemberData} />


                {/* FAQ section with static title and subtitle */}
                <Faqs faqData={faqItems?.Faq_Section}
                // title={"Got Questions? We’ve Got Answers!"}
                // subtitle={"Answers to some of the most common questions we get."}
                />\

                {/* PlpCallback section with static title and subtitle */}
                <PlpCallback />

                {/* IRDA Section */}
                <IrdaSection irdaSectionData={irdadata} />

            </div>
        </LandingLayout>
    )
}


// ✅ Fetch data from API using getServerSideProps to ensure fresh data on each request
export async function getServerSideProps(context) {
    try {
        // 🔹 Fetch About Us page data from the API
        const response = await apiClient('/api/product-listings?filters[PageUrl][$eq]=/life-insurance');
        return {
            props: {
                productLisData: response?.data?.[0] || {}, // ✅ Ensure aboutUsData is not undefined
            },
        };
    } catch (error) {
        console.error("Error fetching About Us page data:", error);

        // ✅ Return an empty object to prevent the page from crashing in case of an error
        return {
            props: {
                productLisData: {}, // Safely return empty data
            },
        };
    }
}

export default index