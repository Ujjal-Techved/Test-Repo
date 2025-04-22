import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Col, Row } from "reactstrap";

const Footer = () => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState(null);

  // Toggle the active section
  const handleToggle = (sectionKey) => {
    setActiveSection((prevSection) => (prevSection === sectionKey ? null : sectionKey));
  };

  // Footer data array
  const footerData = [
    {
      column: 1,
      sections: [
        {
          title: "Company",
          img: "/images/footer/company.svg",
          links: [
            { name: "About Us (New Category)", href: "/about-us" },
            { name: "Careers", href: "/careers" },
            { name: "Alumni", href: "https://alumni.fglife.in/?_gl=1*1dp790g*_gcl_au*NTc4MzczNDIxLjE3NDUyMzMyODQ." },
            { name: "Public Disclosures", href: "/about-us/public-disclosures" },
            { name: "Stewardship Policy", href: "/about-us/stewardship-policy" }
          ],
        },
        {
          title: "Explore Tools",
          img: "/images/footer/explore-tools.svg",
          links: [
            { name: "Education Ready", href: "/tools-and-calculators/child-education-calculator" },
            { name: "Future Ready", href: "/tools-and-calculators/financial-planning-calculator" },
            { name: "Retirement Ready", href: "/tools-and-calculators/retirement-planning-calculator" },
            { name: "Fund Performance", href: "/fund-performance" }
          ],
        },
      ],
    },
    {
      column: 2,
      sections: [
        {
          title: "Support and Assistance",
          img: "/images/footer/support-and-assistance.svg",
          links: [
            { name: "Customer Service", href: "/customer-service" },
            { name: "Claims", href: "/claims" },
            { name: "Group Claims", href: "/group-claims" },
            { name: "Track Application", href: "https://customer.life.futuregenerali.in/ApplicationTracker/?_ga=2.72848464.2114184424.1586144890-319957071.1584596450&_gl=1*uft9fp*_gcl_au*NTc4MzczNDIxLjE3NDUyMzMyODQ." },
            { name: "Cancel Autopay", href: "/autopay-mandate" },
            { name: "Nomination and Remuneration Policy", href: "/media/gzzjzued/nomination-remuneration-policy.pdf" },
            { name: "Glossary", href: "/glossary" },
            { name: "Epolicy", href: "https://customer.life.futuregenerali.in/WebAppln/Pages/Common/Login.aspx?_gl=1*8z8x2a*_gcl_au*NTc4MzczNDIxLjE3NDUyMzMyODQ." },
            { name: "Claims settlement process - MH, GJ cyclone Taukate and WB, OR cyclone Yaas", href: "/claims/claims-settlement-process-maharashtra-gujarat-cyclone-taukate-and-west-bengal-odisha-cyclone-yaas" },
            { name: "Simplified Claims Settlement Process for Train Tragedy Victims in the state of Odisha", href: "/claims/simplified-claims-settlement-process-for-train-tragedy-victims-in-the-state-of-odisha/" },
            { name: "FAQ (New Category)", href: "/" }
          ],
        },
      ],
    },
    {
      column: 3,
      sections: [
        {
          title: "Agents",
          img: "/images/footer/agents.svg",
          links: [
            { name: "Corporate Agents", href: "/media/xepj1upu/corporate-list.pdf" },
            { name: "Individual Agents", href: "/media/n1ccm3r2/list-of-individual-agents-as-on-31-03-25.pdf" },
            { name: "Terminated Agents", href: "/media/5pnj51uk/terminated-agents-as-on-31-10-23.pdf" },
            { name: "Order of Suspension or Cancellation Taukate of Appointment", href: "/about-us/order-of-suspension-or-cancellation-of-appointment" },
            { name: "Goods & Services Tax (GST)", href: "/disclaimers/gst" }
          ],
        },
        {
          title: "Regulatory and Legal",
          img: "/images/footer/regulatory-and-legal.svg",
          links: [
            { name: "IRDAI", href: "https://www.irdai.gov.in/" },
            { name: "Life Insurance Council", href: "https://www.policyholder.gov.in/" },
            { name: "Insurance Ombudsman", href: "https://www.policyholder.gov.in/Ombudsman.aspx" },
            { name: "Consumer Education- IRDAI", href: "https://www.policyholder.gov.in/" },
            { name: "Bima Bharosa", href: "https://bimabharosa.irdai.gov.in/" },
            { name: "Spurious Calls", href: "/media/1332/spurious-calls.pdf" },
          ],
        },
      ],
    },
    {
      column: 4,
      sections: [
        {
          title: "Policies",
          img: "/images/footer/policies.svg",
          links: [
            { name: "Nomination and Remuneration Policy", href: "/media/gzzjzued/nomination-remuneration-policy.pdf" },
            { name: "Insurance Awareness and Consumer Education Policy", href: "/media/miuphwp3/insurance-awareness-consumer-education-policy.pdf" },
            { name: "Privacy Policy", href: "/disclaimers/privacypolicy" },
            { name: "Disclaimer", href: "/disclaimers" },
            { name: "FG Life Code of Conduct", href: "/media/mswjfqkk/code-of-conduct-eng-version-india-life.pdf" }
          ],
        },
        {
          title: "Group Company",
          img: "/images/footer/company.svg",
          links: [
            { name: "Future Group", href: "https://www.futuregroup.in/" },
            { name: "Generali Group", href: "https://www.generali.com/" }
          ],
        },
      ],
    },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.footer_wrapper} container`}>

          {/* Main footer div */}
          <div className={styles.footer_main}>
            <div className="container">
              <Row>
                {footerData.map((columnData, colIndex) => (
                  <Col key={colIndex} xs="12" lg="3">
                    {columnData.sections.map((section, sectionIndex) => {
                      const sectionKey = `${colIndex}-${sectionIndex}`;
                      return (
                        <div
                          key={sectionIndex}
                          className={`${styles.footer_links_container} ${activeSection === sectionKey ? styles.show : ""
                            }`}
                          onClick={() => handleToggle(sectionKey)}
                        >
                          <div className={styles.footer_links_title} role="button">
                            <img src={section.img} alt="icon" />
                            {section.title}
                          </div>
                          <ul className={styles.footer_links_list}>
                            {section.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a
                                  href={link.href}
                                  target="_self"
                                  className={styles.footer_link}
                                >
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div className="divider"></div>
          {/* Correspond address div */}
          <div className="container">
            <Row className={styles.footer_address_main}>
              <Col xs="12" lg="3">
                <div className={styles.footer_address_wrapper}>
                  <div className={styles.footer_links_title} role="button">
                    <img src="/images/footer/address.svg" alt="icon" />
                    Correspondence Address
                  </div>
                  <ul className={styles.footer_links_list}>
                    <li>
                      <p className={styles.footer_link}>
                        Future Generali India Life Insurance Co Ltd., <br />
                        Unit 801 and 802, 8th floor, Tower C, <br />
                        Embassy 247 Park, L.B.S. Marg, Vikhroli <br />
                        (W), Mumbai- 400 083
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="12" lg="3">
                <div className={styles.footer_address_wrapper}>
                  <div className={`${styles.footer_links_title} ${styles.mobSpace}`} role="button">
                    <img src="/images/footer/regulatory-and-legal.svg" alt="icon" />
                    IRDAI Registration
                  </div>
                  <ul className={styles.footer_links_list}>
                    <li>
                      <p className={styles.footer_link}>
                        IRDAI Registration No: 133 (Validity 31st <br />
                        March 2025) License Category: Life <br />
                        CIN:- U66010MH2006PLC165288 <br />
                        Underwriting Philosophy
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="12" lg="3">
                <div className={`${styles.footer_links_container} ${styles.reverse}`}>
                  <div>
                    <div className={`${styles.footer_links_title} ${styles.mobSpace}`} role="button">
                      <img src="/images/footer/download.svg" alt="icon" className="d-none d-lg-block"/>
                      Download our app now
                    </div>
                    <div className={styles.storeLink}>
                      <a href="https://play.google.com/store/apps/details?id=com.fgli&hl=en_IN&gl=US"><img src="/images/footer/playstorefooter.svg" alt="playstore" /></a>
                      <a href="https://apps.apple.com/in/app/fg-life/id1524802982"><img src="/images/footer/appstorefooter.svg" alt="appstore" /></a>
                    </div>
                  </div>
                  <div>
                    <div className={`${styles.footer_links_title} ${styles.mobSpace}`} role="button">
                      Follow us on
                    </div>
                    <div className={styles.social_icon_list}>
                      <a href="https://www.linkedin.com/company/future-generali-india-life-insurance">
                        <img src="/images/footer/linkedin.svg" alt="LinkedIn" />
                      </a>
                      <a href="https://www.youtube.com/c/FutureGeneraliIndiaLife?sub_confirmation=1">
                        <img src="/images/footer/youtube.svg" alt="YouTube" />
                      </a>
                      <a href="https://twitter.com/fglifeind">
                        <img src="/images/footer/twitter.svg" alt="Twitter" />
                      </a>
                      <a href="https://www.facebook.com/futuregeneralilife">
                        <img src="/images/footer/facebook.svg" alt="Facebook" />
                      </a>
                      <a href="https://www.instagram.com/fglifeind/">
                        <img src="/images/footer/instagram.svg" alt="Instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="12" lg="3">
                <div className={`${styles.footer_links_container} ${styles.contact}`}>
                  <div className={styles.footer_links_title} role="button">
                    Connect with us
                  </div>
                  <ul className={styles.footer_links_list}>
                    <li>
                      <a
                        href="tel:18001022355"
                        target="_self"
                        className={styles.footer_link}
                      >
                        <img src="/images/footer/phone.svg" alt="phone" />
                        1800 102 2355
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://life.futuregenerali.in"
                        target="_self"
                        className={styles.footer_link}
                      >
                        <img src="/images/footer/global.svg" alt="global" />
                        life.futuregenerali.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:care@futuregenerali.in"
                        target="_self"
                        className={styles.footer_link}
                      >
                        <img src="/images/footer/mail.svg" alt="mail" />
                        care@futuregenerali.in
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      {/* Bottom navbar */}
      <div className={styles.footer_bottom_bar}>
        <p>Future Group's and Generali Group's liability is restricted to the extent of their shareholding in Future Generali India Life Insurance Company Limited. Future Generali India Life Insurance Company Limited (IRDAI Regn. No.: 133) (CIN:U66010MH2006PLC165288). Regd. Office & Corporate Office address: Unit 801 and 802, 8th floor, Tower C, Embassy 247 Park, L.B.S. Marg, Vikhroli (W), Mumbai - 400083 | <a href="https://life.futuregenerali.in"
          target="_self" >Email: care@futuregenerali.in</a> | Call us at <a href="tel:18001022355"
            target="_self">1800 102 2355</a> | Website: <a href="https://life.futuregenerali.in"
              target="_self">life.futuregenerali.in</a></p>
      </div>
    </>
  );
};

export default Footer;
