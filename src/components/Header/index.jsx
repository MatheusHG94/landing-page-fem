import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as ArrowIcon } from 'assets/images/icon-arrow-down.svg';
import NavMenu from './NavMenu';
import bannerMobile from 'assets/images/mobile/image-header.jpg';
import bannerDesktop from 'assets/images/desktop/image-header.jpg';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <header
      className={styles.Header}
      style={
        windowWidth >= 1440 ?
          { backgroundImage: `url(${bannerDesktop})` } :
          { backgroundImage: `url(${bannerMobile})` }
      }
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
