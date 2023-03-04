import React from "react";
import Logo from "../../img/LogoHenry.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";



function Nav({ onSearch }) {
  return (
    <nav className={styles.containerNav}>

      <Link to="/" className={styles.linkLogo}>
        <div className={styles.containerLogo}>
          <img className={styles.Logo}
            id="logoHenry"
            src={Logo}
            alt="logo"
          />
          <span className={styles.spanLogo}>
            Henry - Weather App
          </span>
        </div>
      </Link>

      <SearchBar onSearch={onSearch} />

      <Link className={styles.linkAbout} to="/about"> 
        <span className={styles.spanclass}>About</span>
      </Link>
    </nav>
  );
}

export default Nav;