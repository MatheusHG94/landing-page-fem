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
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                <Facebook />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                <Instagram />
            </a>
            <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                <Twitter />
            </a>
            <a href='https://www.pinterest.com/' target='_blank' rel='noreferrer'>
                <Pinterest />
            </a>
        </div>
    </footer>
  )
}
