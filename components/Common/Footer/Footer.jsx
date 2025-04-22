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
            { name: "About Us (New Category)", href: "/" },
            { name: "Careers", href: "/" },
            { name: "Alumni", href: "/" },
            { name: "Public Disclosures", href: "/" },
            { name: "Stewardship Policy", href: "/" }
          ],
        },
        {
          title: "Explore Tools",
          img: "/images/footer/explore-tools.svg",
          links: [
            { name: "Education Ready", href: "/" },
            { name: "Future Ready", href: "/" },
            { name: "Retirement Ready", href: "/" },
            { name: "Fund Performance", href: "/" }
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
            { name: "Customer Service", href: "/" },
            { name: "Claims", href: "/" },
            { name: "Group Claims", href: "/" },
            { name: "Track Application", href: "/" },
            { name: "Cancel Autopay", href: "/" },
            { name: "Nomination and Remuneration Policy", href: "/" },
            { name: "Glossary", href: "/" },
            { name: "Epolicy", href: "/" },
            { name: "Claims settlement process - MH, GJ cyclone Taukate and WB, OR cyclone Yaas", href: "/" },
            { name: "Simplified Claims Settlement Process for Train Tragedy Victims in the state of Odisha", href: "/" },
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
            { name: "Corporate Agents", href: "/" },
            { name: "Individual Agents", href: "/" },
            { name: "Terminated Agents", href: "/" },
            { name: "Order of Suspension or Cancellation Taukate of Appointment", href: "/" },
            { name: "Goods & Services Tax (GST)", href: "/" }
          ],
        },
        {
          title: "Regulatory and Legal",
          img: "/images/footer/regulatory-and-legal.svg",
          links: [
            { name: "IRDAI", href: "/" },
            { name: "Life Insurance Council Insurance Ombudsman", href: "/" },
            { name: "Consumer Education- IRDAI", href: "/" },
            { name: "Bima Bharosa Spurious Calls", href: "/" }
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
            { name: "Nomination and Remuneration Policy", href: "/" },
            { name: "Insurance Awareness and Consumer Education Policy", href: "/" },
            { name: "Privacy Policy", href: "/" },
            { name: "Disclaimer", href: "/" },
            { name: "FG Life Code of Conduct", href: "/" }
          ],
        },
        {
          title: "Group Company",
          img: "/images/footer/company.svg",
          links: [
            { name: "Future Group", href: "/" },
            { name: "Generali Group", href: "/" }
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
                      <a href="/"><img src="/images/footer/playstorefooter.svg" alt="playstore" /></a>
                      <a href="/"><img src="/images/footer/appstorefooter.svg" alt="appstore" /></a>
                    </div>
                  </div>
                  <div>
                    <div className={`${styles.footer_links_title} ${styles.mobSpace}`} role="button">
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
