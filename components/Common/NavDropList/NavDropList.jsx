import React from 'react';
import styles from './NavDropList.module.css';
import { Collapse } from 'reactstrap';

const NavDropList = ({ title, subItems, isOpen, onToggle }) => {
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <div className={`${styles.sidebar_menu_list} ${isOpen ? styles.active : ''}`}>
      <div className={styles.combo_btn}>
        <a href={title.href} className={styles.menu_list_title}>
          {title.name}
        </a>
        {/* Only show the arrow if there are subItems */}
        {hasSubItems && (
          <div
            className={`${styles.arrow_icon} ${isOpen ? styles.active : ''}`}
            role='button'
            onClick={onToggle}
          ></div>
        )}
      </div>
      {/* Only render Collapse if there are subItems */}
      {hasSubItems && (
        <Collapse isOpen={isOpen}>
          <ul className={styles.menu_list_subtitle}>
            {subItems.map((subItem, index) => (
              <li key={index}>
                <a href={subItem.href}>{subItem.name}</a>
              </li>
            ))}
          </ul>
        </Collapse>
      )}
    </div>
  );
};

export default NavDropList;
