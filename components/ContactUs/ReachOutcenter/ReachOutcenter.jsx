import React, { useEffect, useState } from 'react';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';
import styles from './ReachOutcenter.module.css';

const ReachOutcenter = ({ reactOutData }) => {
  // Guard clause: don't render if data is missing
  if (!reactOutData) return null;

  const { Title, SubTitle, TabList } = reactOutData;

  const [reachactiveTab, setReachActiveTab] = useState('Careers');
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='pd-t pd-b'>
      <Container>
        {/* Section Title */}
        <TitleSubtitle title={Title} subtitle={SubTitle} />

        <div className={styles.CoverageOption_section}>
          <div className='common-tabs-wrapper'>
            {/* Navigation Tabs */}
            <Nav tabs>
              {TabList?.map(({ id, OptionName }) => (
                <NavItem
                  key={id}
                  className={reachactiveTab === OptionName ? 'active' : ''}
                  onClick={() => setReachActiveTab(OptionName)}
                >
                  <NavLink>{OptionName}</NavLink>
                </NavItem>
              ))}
            </Nav>

            {/* Content Area */}
            <TabContent activeTab={reachactiveTab} className='py-0'>
              {/* Careers Tab */}
              <TabPane tabId='Careers'>
                <Row className={styles.protect_plan_row}>
                  {[0, 1].map((i) => (
                    <Col lg='5' md='12' key={i} className={styles.protect_plan_col}>
                      <div className={`${styles.protect_plan_Card} ${styles.career_plan_Card}`}>
                        <div className={styles.career_content_section}>
                          <span>{TabList[0]?.ReachUsCards[i]?.Title}</span>
                          <p>{TabList[0]?.ReachUsCards[i]?.Description1Grey}</p>
                          <button className='redBtn'>{TabList[0]?.ReachUsCards[i]?.LinkText}</button>
                        </div>
                        <div className={styles.capmus_section}>
                          <img
                            src={process.env.NEXT_PUBLIC_APP_API + TabList[0]?.ReachUsCards[i]?.Image?.url}
                            alt={TabList[0]?.ReachUsCards[i]?.Image?.alternativeText}
                          />
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </TabPane>

              {/* Claims Tab */}
              <TabPane tabId='Claims'>
                <Row className={styles.protect_plan_row}>
                  {[0, 1, 2].map((i) => (
                    <Col className='d-flex' xs='12' lg='4' key={i}>
                      <div className={styles.reach_cards}>
                        <div className={styles.reach_us_text}>
                          <h3 className={styles.reach_us_title}>
                            {TabList[1]?.ReachUsCards[i]?.Title}
                            <img
                              className={styles.reach_us_img}
                              src={process.env.NEXT_PUBLIC_APP_API + TabList[1]?.ReachUsCards[i]?.Image?.url}
                              alt={TabList[1]?.ReachUsCards[i]?.Image?.alternativeText}
                            />
                          </h3>
                          <p className={styles.reach_us_desc}>
                            {TabList[1]?.ReachUsCards[i]?.Description1Grey}
                            <span className={styles.reach_us_contact}>{TabList[1]?.ReachUsCards[i]?.Description2Red}</span>
                          </p>
                        </div>
                        <div className={styles.reach_us_link}>
                          <a href='#' className={styles.reach_us_linktext}>
                            <span>{TabList[1]?.ReachUsCards[i]?.LinkText}</span>
                          </a>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </TabPane>

              {/* Media Tab */}
              <TabPane tabId='Media'>
                <Row className={styles.protect_plan_row}>
                  {[0, 1].map((i) => (
                    <Col lg='4' md='12' key={i} className={styles.protect_plan_col}>
                      <div className={styles.protect_plan_Card}>
                        <span>{TabList[2]?.ReachUsCards[i]?.Title}</span>
                        <p>{TabList[2]?.ReachUsCards[i]?.Description1Grey}</p>
                        <img
                          className={styles.plan_img}
                          src={process.env.NEXT_PUBLIC_APP_API + TabList[2]?.ReachUsCards[i]?.Image?.url}
                          alt={TabList[2]?.ReachUsCards[i]?.Image?.alternativeText}
                        />
                        <a
                          href=''
                          className={styles.protect_plan_linktext}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {TabList[2]?.ReachUsCards[i]?.LinkText}
                          <img src='/images/reach-us/arrow-right.svg' alt='arrow' className={styles.protect_plan_arrow} />
                        </a>
                      </div>
                    </Col>
                  ))}
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReachOutcenter;
