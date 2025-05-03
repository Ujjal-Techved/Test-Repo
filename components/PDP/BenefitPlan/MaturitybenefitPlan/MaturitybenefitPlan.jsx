import React from 'react'
import styles from './MaturitybenefitPlan.module.css'


const MaturitybenefitPlan = () => {


  // Policy Table Array inner Data

  const policyData = [
    {
      planOption: "Option 1",
      incomeOption: "Immediate Income",
      totalPremiumsPaid: "Rs. 10,00,000",
      survivalBenefitPeriod: "End of year 1 to End of year 50",
      totalBenefitsPayable: "Total Benefit of Rs. 46,57,925 (Total Survival Benefit of Rs. 26,57,925 Plus Total Maturity Benefit of Rs. 20,00,000)",
      whatYouGet: "4.66 Times"
    },
    {
      planOption: "Option 1",
      incomeOption: "Deferred Income",
      totalPremiumsPaid: "Rs. 10,00,000",
      survivalBenefitPeriod: "End of year 6 to End of year 50",
      totalBenefitsPayable: "Total Benefit of Rs. 53,33,925 (Total Survival Benefit of Rs. 33,33,925 Plus Total Maturity Benefit of Rs. 20,00,000)",
      whatYouGet: "5.33 Times"
    },
    {
      planOption: "Option 2",
      incomeOption: "Immediate Income",
      totalPremiumsPaid: "Rs. 10,00,000",
      survivalBenefitPeriod: "End of year 1 to End of year 50",
      totalBenefitsPayable: "Total Benefit of Rs. 40,85,925 (Total Survival Benefit of Rs. 20,85,925 Plus Total Maturity Benefit of Rs. 20,00,000)",
      whatYouGet: "4.08 Times"
    },
    {
      planOption: "Option 2",
      incomeOption: "Deferred Income",
      totalPremiumsPaid: "Rs. 10,00,000",
      survivalBenefitPeriod: "End of year 6 to End of year 50",
      totalBenefitsPayable: "Total Benefit of Rs. 45,45,925 (Total Survival Benefit of Rs. 25,45,925 Plus Total Maturity Benefit of Rs. 20,00,000)",
      whatYouGet: "4.54 Times"
    }
  ];




  return (
    <div>
      <div className={styles.benefit_title}>
        <p>Upon surviving till the end of the policy term and paying all due premiums, you will receive: Total Maturity Benefit</p>
      </div>
      {/* Total Maturity Benefit card */}
      <div className={styles.benefit_wrapper}>
        <div className={`${styles.income_option} ${styles.income_option_flex} row`}>
          <div className={`${styles.main_option} col-12`}>

            <div className={`${styles.main_option_detail}`}>
              <p className={`${styles.option_smalltext_red} pb-1`}>Total Maturity Benefit = Sum Assured on Maturity + Maturity Loyalty Addition</p>
              <div className={`${styles.income_option_list}`}>
                <ul>
                  <li>Sum Assured on Maturity  (A multiple of the Annualized Premium (excluding taxes, rider premiums, and underwriting loadings).)</li>
                  <li>Maturity Loyalty Addition (Additional benefit equal to the Sum Assured.)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Policy year Table */}
      <div className='policy-table maturity-policy-table mt-3'>


        <div class="policy-table-header rounded-0">
          <div class="policy-table-title rounded-0">Plan Option</div>
          <div class="policy-table-title rounded-0">Income Option</div>
          <div class="policy-table-title rounded-0">Total Premiums to be Paid (a)</div>
          <div class="policy-table-title rounded-0">Survival Benefit Period</div>
          <div class="policy-table-title rounded-0">Total Benefits Payable (b)</div>
          <div class="policy-table-title rounded-0">What You Get/ What You Pay(b)/(a)</div>

        </div>

        <div className='policy-table-data'>
          {policyData.map((row, index) => (
            <div className="policy-table-details" key={index}>
              <div className="policy-table-cell">{row.planOption}</div>
              <div className="policy-table-cell">{row.incomeOption}</div>
              <div className="policy-table-cell">{row.totalPremiumsPaid}</div>
              <div className="policy-table-cell">{row.survivalBenefitPeriod}</div>
              <div className="policy-table-cell">{row.totalBenefitsPayable}</div>
              <div className="policy-table-cell">{row.whatYouGet}</div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default MaturitybenefitPlan