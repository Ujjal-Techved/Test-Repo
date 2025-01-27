import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Container } from 'reactstrap';
import NavDropList from '../NavDropList/NavDropList';

const Navbar = () => {
  const menuItems = [
    {
      title: { name: 'Term Insurance', href: '/term-insurance' },
      subItems: [
        { name: 'Term Insurance Plan 1', href: '/term-insurance/plan-1' },
        { name: 'Term Insurance Plan 2', href: '/term-insurance/plan-2' },
        { name: 'Term Insurance Plan 3', href: '/term-insurance/plan-3' },
      ],
    },
    {
      title: { name: 'Investment Plans', href: '/investment-plans' },
      subItems: [
        { name: 'Investment Plan 1', href: '/investment-plans/plan-1' },
        { name: 'Investment Plan 2', href: '/investment-plans/plan-2' },
        { name: 'Investment Plan 3', href: '/investment-plans/plan-3' },
      ],
    },
    {
      title: { name: 'Learn', href: '/learn' },
      subItems: [],
    },
    {
      title: { name: 'Support', href: '/support' },
      subItems: [],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div>
      <Container className={styles.Container}>
        <div className={styles.main_header}>
          <button
            className={`${styles.user_btn} ${styles.hamburgbtn}`}
            onClick={toggleSidebar}
          >
            <img src='/images/header/toggler.svg' alt='Menu' />
          </button>

          <a href='/' className={styles.fgli_logo}>
            <img src='/images/header/fgli-logo.svg' alt='FGLI' />
          </a>

          <div className={styles.header_menu}>
            {menuItems.map((menuItem, index) => (
              <div
                key={index}
                className={styles.dropdown_container}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a href={menuItem.title.href} className={styles.nav_link}>
                  {menuItem.title.name}
                </a>
                {hoveredIndex === index && menuItem.subItems.length > 0 && (
                  <div className={styles.dropdown_menu}>
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={styles.dropdown_item}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.header_userdetail}>
            <a href='/' className={styles.commonlink_btn}>
              Pay Premium
            </a>
            <button className={styles.user_btn}>
              <img src='/images/header/user-icon.svg' alt='User' />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Sidebar */}
      <aside
        className={`${styles.left_Navsidebar} ${isSidebarVisible ? styles.show : ''}`}
      >
        <div className={styles.left_sidebar}>
          <div className={styles.sidebar_menu}>
            <a href='/' className={styles.fgli_logo}>
              <img src='/images/header/fgli-logo.svg' alt='FGLI' />
            </a>
            {menuItems.map((menuItem, index) => (
              <NavDropList
                key={index}
                title={menuItem.title}
                subItems={menuItem.subItems}
                isOpen={activeIndex === index}
                onToggle={() => toggleCollapse(index)}
              />
            ))}
          </div>
          <div className={styles.sidebar_menu_btn + ' pt-4'}>
            <a className={styles.commonlink_btn + ' text-center w-100'}>Pay Premium</a>
          </div>
        </div>
      </aside>

      <div
        className={`${styles.backdrop} ${isSidebarVisible ? styles.show : ''}`}
        onClick={closeSidebar}
      ></div>
    </div>
  );
};

export default Navbar;
