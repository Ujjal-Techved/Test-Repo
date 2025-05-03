import React from 'react'
import styles from './SurvivalbenefitPlan.module.css'

const SurvivalbenefitPlan = () => {

    // Array of Income Option Data

    const incomeOptionsData = [
        {
            id: 1,
            option: "Option 1",
            title: "Immediate Income",
            icon: "/images/product-detail/benefits/ImmediateIncome.png",
            details: [
                "Payouts start immediately after policy inception",
                "Frequency: Yearly, Half-Yearly, Quarterly, or Monthly."
            ],
            exampleTitle: "Example:",
            examples: [
                "Monthly payout begins at the end of the first policy month.",
                "Yearly payout begins at the end of the first policy year."
            ]
        },
        {
            id: 2,
            option: "Option 2",
            title: "Deferred Income",
            icon: "/images/product-detail/benefits/DeferredIncome.png",
            details: [
                "Payouts start after a deferred period",
                "Frequency: Yearly, Half-Yearly, Quarterly, or Monthly."
            ],
            exampleTitle: "Example:",
            examples: [
                "Monthly payout starts at the end of the 61st policy month.",
                "Yearly payout begins at the end of the 6th policy year."
            ]
        }
    ];

    // Guaranteed income array Data

    const guaranteedIncomeOptions = [
        {
            id: 1,
            title: "Guaranteed Income",
            description: "The Guaranteed Income varies based on Annualized Premium (excluding applicable taxes, rider premiums, loadings for modal premium and underwriting extra premiums, if any), Plan Option, Income Option, Entry age of Life Assured, Policy Term, Premium Payment Term, and Death Benefit Multiple Option."
        },
        {
            id: 2,
            title: "Income Loyalty Addition",
            description: "The Income Loyalty Addition shall enhance the Survival Benefit payable starting from the 11th policy year till the end of the Policy Term, subject to payment of all due premiums. The Income Loyalty Addition is defined as a percentage of Guaranteed Income as mentioned below in Table 1."
        }
    ];

    // Policy Table Array inner Data

    const policyData = [
        { yearRange: "1-10", "30": "0%", "40": "0%", "50": "0%" },
        { yearRange: "11-15", "30": "50%", "40": "50%", "50": "50%" },
        { yearRange: "16-20", "30": "100%", "40": "100%", "50": "100%" },
        { yearRange: "21-25", "30": "150%", "40": "150%", "50": "150%" },
        { yearRange: "26-30", "30": "200%", "40": "200%", "50": "200%" },
        { yearRange: "31-35", "30": "", "40": "250%", "50": "250%" },
        { yearRange: "36-40", "30": "", "40": "300%", "50": "300%" },
        { yearRange: "41-45", "30": "", "40": "", "50": "350%" },
        { yearRange: "46-50", "30": "", "40": "", "50": "400%" },
    ];



    return (
        <div>
            <div className={styles.benefit_title}>
                <p>You will receive Survival Benefit till the end of the Policy Term as per the Income Option and Survival Benefit
                    <br />Payout frequency you have chosen.The plan offers two Income Options to choose from:</p>
            </div>

            <div className={styles.benefit_wrapper}>
                <p className={styles.option_text + ' text-center text-md-start'}>Income Options to Choose From</p>

                {/* Income Options to Choose From */}
                {incomeOptionsData.map((option) => (
                    <div key={option.id} className={`${styles.income_option} ${styles.income_option_flex} row`}>
                        <div className={styles.main_option + ' col-md-6 col-12'}>
                            <img src={option.icon} alt={option.title} />
                            <div className={styles.main_option_detail}>
                                <p className={styles.option_smalltext_red + ' pb-1'}>{option.option}</p>
                                <p className={styles.option_text + ' pb-1'}>{option.title}</p>
                                <div className={styles.income_option_list}>
                                    <ul>
                                        {option.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.example_option + ' col-md-6 col-12'}>
                            <p className={styles.option_smalltext_red + ' pb-1'}>{option.exampleTitle}</p>
                            <div className={styles.income_option_list}>
                                <ul>
                                    {option.examples.map((example, index) => (
                                        <li key={index}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Guaranteed Income */}
                <div className={styles.guranted_main}>
                    {guaranteedIncomeOptions.map((option) => (
                        <div key={option.id} className={styles.guranted_income + ' pt-md'}>
                            <p className={styles.option_text}>{option.title}</p>
                            <p className={styles.option_list_greytext + ' pt-2'}>
                                {option.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Policy year Table */}
                <div className='policy-table'>

                    <div className='policy-income-loyalty-wrapper'>
                        <div className='policy-income-blank'></div>
                        <div className='policy-income-loyalty-main'>
                            <p>Income Loyalty Addition as a percentage of Guaranteed Income</p>
                        </div>
                    </div>

                    <div class="policy-table-header rounded-0">
                        <div class="policy-table-title rounded-0 align-items-start">Policy Year</div>
                        <div class="policy-table-title">
                            <div className='policy-table-subtitle'>
                                <span>Policy Term</span>
                                <p>30 years</p>
                            </div>
                        </div>
                        <div class="policy-table-title">
                            <div className='policy-table-subtitle'>
                                <span>Policy Term</span>
                                <p>40 years</p>
                            </div>
                        </div>
                        <div class="policy-table-title rounded-0">
                            <div className='policy-table-subtitle'>
                                <span>Policy Term</span>
                                <p>50 years</p>
                            </div>
                        </div>
                    </div>

                    <div className='policy-table-data'>
                        {policyData.map((row, index) => (
                            <div className="policy-table-details" key={index}>
                                <div className="policy-table-cell">{row.yearRange}</div>
                                <div className="policy-table-cell">{row["30"]}</div>
                                <div className="policy-table-cell">{row["40"]}</div>
                                <div className="policy-table-cell">{row["50"]}</div>
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </div>
    )
}

export default SurvivalbenefitPlan