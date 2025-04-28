import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import styles from './ComparePlan.module.css'
import Slider from 'react-slick';

const ComparePlan = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 992);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Array of plan list 

    const PlanListData = [
        {
            "id": "",
            "Title": "Term Policies",
            "Description": "Pure protection simplest and chipset form",
            "DeathBenefits": true,
            "MaturityBenefits": false,
            "TaxBenefits": true,
            "RiderLocations": true,
            "IdealFor": "To protect financial support to the family if one dies",
            "Image": {
                "id": "",
                "documentId": "xwab8sifgaz9qylrne0orf66",
                "url": "/images/product-landing/TermPolicies.png",
                "alternativeText": null,
                "caption": null,
                "name": "rb_34597 1.png"
            }
        },
        {
            "id": "",
            "Title": "Whole Life Insurance Policies",
            "Description": "Whole life with saving components",
            "DeathBenefits": true,
            "MaturityBenefits": true,
            "TaxBenefits": true,
            "RiderLocations": true,
            "IdealFor": "To leave a legacy",
            "Image": {
                "id": "",
                "documentId": "xaos8pjs8pppcmxj23hb6aei",
                "url": "/images/product-landing/WholeLifeInsurancePolicies.png",
                "alternativeText": null,
                "caption": null,
                "name": "3d-icons-81-b 1.png"
            }
        },
        {
            "id": "",
            "Title": "Endowment Plans",
            "Description": "Protection + saving with minimum guaranteed benefits",
            "DeathBenefits": true,
            "MaturityBenefits": true,
            "TaxBenefits": true,
            "RiderLocations": true,
            "IdealFor": "Life coverage & returns with minimum risk",
            "Image": {
                "id": "",
                "documentId": "s09b0woci6f1httpodehgrf5",
                "url": "/images/product-landing/EndowmentPlans.png",
                "alternativeText": null,
                "caption": null,
                "name": "question-list-support 1.png"
            }
        },
        {
            "id": "",
            "Title": "Unit Linked Insurance Plan",
            "Description": "Protection + Investment + Speculative Returns",
            "DeathBenefits": true,
            "MaturityBenefits": true,
            "TaxBenefits": true,
            "RiderLocations": true,
            "IdealFor": "Looking for insurance along with willingness to take risk on invisible premium",
            "Image": {
                "id": "",
                "documentId": "lgcll3lrnqjxamummofyimnx",
                "url": "/images/product-landing/UnitLinkedInsurancePlan.png",
                "alternativeText": null,
                "caption": null,
                "name": "3d-icon 1.png"
            }
        },
        {
            "id": "",
            "Title": "Money Back Plans",
            "Description": "Protection + saving + Periodic Survival Benefits + Maturity Benefits ",
            "DeathBenefits": true,
            "MaturityBenefits": true,
            "TaxBenefits": true,
            "RiderLocations": true,
            "IdealFor": "Insurance + regular income",
            "Image": {
                "id": "",
                "documentId": "lgcll3lrnqjxamummofyimnx",
                "url": "/images/product-landing/MoneyBackPlans.png",
                "alternativeText": null,
                "caption": null,
                "name": "3d-icon 1.png"
            }
        },
        {
            "id": "",
            "Title": "Pension / Annuity Plan",
            "Description": "Offers Annuity / Income Till the person Survives\n",
            "DeathBenefits": true,
            "MaturityBenefits": false,
            "TaxBenefits": true,
            "RiderLocations": true,
            "IdealFor": "To secure regular income for pos retirement years",
            "Image": {
                "id": "",
                "documentId": "bw6h3scf4b257s42cfsn9nrz",
                "url": "/images/product-landing/PensionAnnuityPlan.png",
                "alternativeText": null,
                "caption": null,
                "name": "pension-fund-3d-illustration-icon 1.png"
            }
        }
    ]
    const getBenefitImage = (benefit) => {
        return benefit ? '/images/product-landing/true.png' : '/images/product-landing/false.png';
    };


    // Main Slider Settings
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1.1: PlanListData.length,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Compare Life Insurance Plans"}
                    subtitle={"Here’s a comparison between different types of life insurance plans in India."}
                />
                <div className={styles.compareplan_wrapper}>
                    <div className={styles.compareplan_benefit_leftsection}>
                        <div className={styles.plan_benefits}>
                            <p>Death Benefits</p>
                            <p>Maturity Benefits</p>
                            <p>Tax Benefits</p>
                            <p>Rider Benefits</p>
                            <p>Ideal for People who want</p>
                        </div>
                    </div>
                    <div className={styles.compareplan_rightsection}>
                        <Slider {...sliderSettings}>
                            {PlanListData.map((plan, index) => (
                                <div key={index} className={styles.plan_card_wrapper}>
                                    <div className={styles.plan_card}>
                                        <div className={styles.plan_card_title}>
                                            <div className={styles.plan_card_desc}>
                                                <img src={plan.Image.url} alt="plans"></img>
                                                <h5>{plan.Title}</h5>
                                            </div>
                                            <p>{plan.Description}</p>
                                        </div>
                                        <div className={styles.plan_card_value_section}>
                                            {Object.entries(plan).map(([key, value]) => {
                                                if (typeof value === 'boolean') {
                                                    return (
                                                        <p key={key} className={styles.plan_card_value}>
                                                            <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                                            <img src={getBenefitImage(value)} alt={value ? 'true' : 'false'}></img>
                                                        </p>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                        <div className={styles.plan_card_ideal}>
                                            <span>Ideal for People who want</span>
                                            <p>{plan.IdealFor}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default ComparePlan