import React from "react";
import styles from "./Footer.module.css";
import { Col, Row } from "reactstrap";

const Footer = () => {
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
    <footer className={styles.footer}>
      <div className={`${styles.footer_wrapper} container`}>
        <div className={styles.footer_main}>
          <Row>
            {footerData.map((columnData, colIndex) => (
              <Col key={colIndex} xs="12" lg="3">
                {columnData.sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className={styles.footer_links_container}
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
                ))}
              </Col>
            ))}
          </Row>
        </div>
        <div className="footer_address container">
          Your Address or Additional Info Here
        </div>
      </div>
      <div className="footer_bottom_bar container"></div>
    </footer>
  );
};

export default Footer;
