import React from 'react'
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as Arrow } from 'assets/images/icon-arrow-down.svg';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__navbar}>
        <Logo />
        <nav>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div className={styles.Header__banner}>
        <h1>We are creatives</h1>
        <Arrow />
      </div>
    </header>
  )
}
