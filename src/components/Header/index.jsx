import React from 'react'
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

export default function Header() {
  return (
    <header className={styles.Header}>
        <Logo />
        About
        Services
        Projects
        Contact
    </header>
  )
}
