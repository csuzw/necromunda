import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';

import logo from '../assets/logo.svg';



export default function NavBar(props) {
    const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    const toggleHamburgerMenuOpen = () => setHamburgerMenuOpen(!isHamburgerMenuOpen);

    return (
        <div className={styles.navBar}>
            <img className={styles.navBarLogo} src={logo} alt="logo" />
            <nav className={styles.navBarMenu}>
                <ul className={styles.navBarMenuList}>
                    <li className={styles.navBarMenuListItem}>
                        <Link className={styles.navBarLink} to="/">{process.env.REACT_APP_GANG_NAME}</Link>
                    </li>
                    <li className={styles.navBarMenuListItem}>
                        <Link className={styles.navBarLink} to="/gang">Gang</Link>
                    </li>
                    <li className={styles.navBarMenuListItem}>
                        <Link className={styles.navBarLink} to="/fighters">Fighters</Link>
                    </li>
                </ul>
            </nav>
            <div className={`${styles.navBarHamburgerMenu} ${isHamburgerMenuOpen ? styles.navBarHamburgerMenuOpen : ""}`} onClick={toggleHamburgerMenuOpen}>
                <div className={styles.navBarHamburgerBar1}></div>
                <div className={styles.navBarHamburgerBar2}></div>
                <div className={styles.navBarHamburgerBar3}></div>
                <ul className={styles.navBarHamburgerMenuList}>
                    <li className={styles.navBarMenuListItem}>
                        <Link className={styles.navBarLink} to="/">{process.env.REACT_APP_GANG_NAME}</Link>
                    </li>
                    <li className={styles.navBarMenuListItem}>
                        <Link className={styles.navBarLink} to="/gang">Gang</Link>
                    </li>
                    <li className={styles.navBarMenuListItem}>
                        <Link className={styles.navBarLink} to="/fighters">Fighters</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}