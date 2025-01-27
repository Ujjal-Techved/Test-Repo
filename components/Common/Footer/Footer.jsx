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
          title: "Tools and Calculators",
          links: [
            { name: "Education Ready", href: "/" },
            { name: "Future Ready", href: "/" },
            { name: "Retirement Ready", href: "/" },
          ],
        },
        {
          title: "Agents",
          links: [
            { name: "Corporate Agents", href: "/" },
            { name: "Individual Agents", href: "/" },
            { name: "Terminated Agents", href: "/" },
            { name: "Order Of Suspension Or Cancellation Of Appointment", href: "/" },
            { name: "Goods & Services Tax (GST)", href: "/" },
          ],
        },
      ],
    },
    {
      column: 2,
      sections: [
        {
          title: "Quick Links",
          links: [
            { name: "Customer Service", href: "/" },
            { name: "Claims", href: "/" },
            { name: "Group Claims", href: "/" },
            { name: "Fund Performance", href: "/" },
            { name: "Epolicy", href: "/" },
            { name: "Careers", href: "/" },
            { name: "Alumni", href: "/" },
            { name: "Unclaimed Amount", href: "/" },
            { name: "Public Disclosures", href: "/" },
            { name: "Stewardship Policy", href: "/" },
            { name: "Track Application", href: "/" },
            { name: "Claims Settlement Process - MH, GJ Cyclone Taukate And WB, OR Cyclone Yaas", href: "/" },
            { name: "Simplified Claims Settlement Process For Train Tragedy Victims In The State Of Odisha", href: "/" },
            { name: "Cancel Autopay", href: "/" },
          ],
        },
      ],
    },
    {
      column: 3,
      sections: [
        {
          title: "Assistance",
          links: [
            { name: "Nomination And Remuneration Policy", href: "/" },
            { name: "Insurance Awareness And Consumer Education Policy", href: "/" },
            { name: "FG Life Code Of Conduct", href: "/" },
            { name: "Glossary", href: "/" },
            { name: "Withdrawn Products", href: "/" },
          ],
        },
      ],
    },
    {
      column: 4,
      sections: [
        {
          title: "Disclaimer",
          links: [
            { name: "Privacy Policy", href: "/" },
            { name: "Disclaimer", href: "/" },
          ],
        },
        {
          title: "Group Company",
          links: [
            { name: "Future Group", href: "/" },
            { name: "Generali Group", href: "/" },
          ],
        },
        {
          title: "Regulatory",
          links: [
            { name: "IRDAI", href: "/" },
            { name: "Life Insurance Council Insurance Ombudsman", href: "/" },
            { name: "Consumer Education- IRDAI", href: "/" },
            { name: "Bima Bharosa Spurious Calls", href: "/" },
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
                    Correspondence Address
                  </div>
                  <ul className={styles.footer_links_list}>
                    <li>
                      <p className={styles.footer_link}>
                        Future Generali India Life Insurance Co Ltd., Unit 801 and
                        802, 8th floor, Tower C, Embassy 247 Park, L.B.S. Marg,
                        Vikhroli (W), Mumbai- 400 083
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="12" lg="3">
                <div className={styles.footer_address_wrapper}>
                  <ul className={styles.footer_links_list}>
                    <li>
                      <p className={styles.footer_link}>
                        IRDAI Registration No: 133 (Validity 31st March 2025)
                        License Category: Life CIN:- U66010MH2006PLC165288
                        Underwriting Philosophy
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="12" lg="3">
                <div className={styles.footer_links_container}>
                  <div className={styles.footer_links_title} role="button">
                    Follow us on
                  </div>
                  <div className={styles.social_icon_list}>
                    <a href="/">
                      <img src="/images/footer/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a href="/">
                      <img src="/images/footer/youtube.svg" alt="YouTube" />
                    </a>
                    <a href="/">
                      <img src="/images/footer/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="/">
                      <img src="/images/footer/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="/">
                      <img src="/images/footer/instagram.svg" alt="Instagram" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs="12" lg="3">
                <div className={styles.footer_links_container}>
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
