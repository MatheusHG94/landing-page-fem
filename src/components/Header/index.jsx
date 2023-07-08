import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/icon-arrow-down.svg';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_bar}>
        <Logo />
        <NavMenu />
      </div>
      <h1>We are creatives</h1>
      <div className={styles.Header_arrowIcon}>
        <ArrowIcon />
      </div>
    </header>
  )
}
