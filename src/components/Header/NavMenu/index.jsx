import React, { useState } from 'react';
import styles from './NavMenu.module.scss';
import { ReactComponent as HamburgerIcon } from 'assets/images/icon-hamburger.svg';

export default function NavMenu() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu(e) {
        if (!menuOpen){
            setMenuOpen(true);
            return;
        }
        setMenuOpen(false);
        return;
    }

    return (
        <nav className={styles.NavMenu}>
            <div 
                className={`
                    ${styles.NavMenu_button}
                    ${menuOpen ? styles.NavMenu_button___dim : ''}
                `}
                onClick={e => toggleMenu(e)}
            >
                <HamburgerIcon />
            </div>
            <ul className={
                menuOpen ?
                styles.NavMenu_list :
                styles.NavMenu_list___hidden
            }>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}
