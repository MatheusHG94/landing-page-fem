import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/icon-arrow-down.svg';
import NavMenu from './NavMenu';

export default function Header({
  deviceType
}) {
  return (
    <header
      className={styles.Header}
      style={{ backgroundImage: `url('/assets/images/${deviceType}/image-header.jpg')` }}
    >
      <div className={styles.Header_bar}>
        <a href="/">
          <Logo />
        </a>
        <NavMenu 
          deviceType={deviceType}
        />
      </div>
      <h1>We are creatives</h1>
      <div className={styles.Header_arrowIcon}>
        <ArrowIcon />
      </div>
    </header>
  )
}
