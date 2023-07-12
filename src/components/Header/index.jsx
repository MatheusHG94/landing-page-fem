import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/icon-arrow-down.svg';
import NavMenu from './NavMenu';
import banner from 'assets/images/mobile/image-header.jpg';

export default function Header() {
  return (
    <header
      className={styles.Header}
      style={{
        background: `url(${banner}) no-repeat center`,
        backgroundSize: 'cover'
      }}
    >
      <div className={styles.Header_bar}>
        <a href="/">
          <Logo />
        </a>
        <NavMenu />
      </div>
      <h1>We are creatives</h1>
      <div className={styles.Header_arrowIcon}>
        <ArrowIcon />
      </div>
    </header>
  )
}
