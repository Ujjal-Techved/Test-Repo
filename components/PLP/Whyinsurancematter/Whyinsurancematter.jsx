import React, { useState, useEffect } from 'react';
import { Col, Container, Row, TabContent, TabPane, Button } from 'reactstrap';
import styles from './Whyinsurancematter.module.css';

const Whyinsurancematter = ({TermplanCardData}) => {
  // State to toggle 'Show More' feature
  const [showMore, setShowMore] = useState(false);

  // State to check if the viewport is mobile-sized
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // If width is less than 992px, set isMobile to true
    };

    handleResize(); // Initial check when component mounts
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

 
  return (
    <div className={styles.guide_wrapper + ' pd-t pd-b'}>
      <Container>
        <TabContent activeTab={"1"} className='pb-0'>
          <TabPane tabId="1"></TabPane>
          
          {/* Loop through the term plan data to render UI */}
          {TermplanCardData.map((termplan, index) => (
            <div className={styles.insure_wrapper} key={index}>
              <Row className={styles.insure_main}>
                {/* Left side - Description section */}
                <Col lg="5" className={styles.insure_description}>
                  <div className={styles.guide_title_main}>
                    <h2>{termplan.Title}</h2>
                    <p>{termplan.Subtitle}</p>
                  </div>
                </Col>

                {/* Right side - Cards section */}
                <Col lg="7">
                  <div className={styles.insure_card}>
                    <Row className={styles.guide_card_row}>
                      {/* Mapping through the TermplanList to render each benefit card */}
                      {termplan.TermplanList.map((item, i) => (
                        <Col
                          lg="4"
                          md="6"
                          xs="6"
                          key={item.id}
                          className={`
                            ${styles.guide_card_col} 
                            ${isMobile && !showMore && i >= 4 ? styles.hide : ''} 
                            ${showMore ? styles.height475 : styles.height175}
                          `}
                        >
                          <div className={styles.guide_card}>
                            <img src={item.Image.url} alt={item.Title} className={styles.termplan_image} />
                            <h4>{item.Title}</h4>
                            <p>{item.Description}</p>
                          </div>
                        </Col>
                      ))}
                    </Row>

                    {/* Show More / See Less button for mobile view */}
                    {isMobile && termplan.TermplanList.length > 4 && (
                      <div className={styles.show_more_btn}>
                        <a color="primary" onClick={() => setShowMore(!showMore)}>
                          {showMore ? "See Less -" : "Show More +"}
                        </a>
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </TabContent>
      </Container>
    </div>
  );
};

export default Whyinsurancematter;
