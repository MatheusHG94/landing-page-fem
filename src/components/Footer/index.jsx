import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo-cyan.svg';
import { ReactComponent as Facebook } from 'assets/images/icon-facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/icon-instagram.svg';
import { ReactComponent as Twitter } from 'assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from 'assets/images/icon-pinterest.svg';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
        <div className={styles.Footer_logo}>
            <a href="/">
                <Logo />
            </a>
        </div>
        <nav>
            <a href='/'>About</a>
            <a href='/'>Services</a>
            <a href='/'>Projects</a>
        </nav>
        <div className={styles.Footer_socialMedia}>
            <a href='/'>
                <Facebook />
            </a>
            <a href='/'>
                <Instagram />
            </a>
            <a href='/'>
                <Twitter />
            </a>
            <a href='/'>
                <Pinterest />
            </a>
        </div>
    </footer>
  )
}
