import React from 'react';
import styles from './NavMenu.module.scss';
import { ReactComponent as HamburgerIcon } from 'assets/images/icon-hamburger.svg';

export default function NavMenu() {
    return (
        <nav className={styles.NavMenu}>
            <div className={styles.NavMenu_button}>
                <HamburgerIcon />
            </div>
            <ul className={styles.NavMenu_list}>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}
