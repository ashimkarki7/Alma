import React from "react";
import styles from "./header.module.css";

import Button from "@/components/button/button";

const Header: React.FC = () => {
  return (
    <header className={styles.publicHeader}>
      <div className={styles.content}>
        <div className={styles.logoImage}>
          <img src="/images/greenicon.png" alt="Green Disc" />
        </div>
        <div className={styles.text}>
          <span className={styles.logo}>almà</span>
          <h1 className={styles.title}>
            Get An Assessment <br />
            Of Your Immigration Case
          </h1>
        </div>
        <div className={styles.button}>
          <Button title="Login" />
        </div>
      </div>
    </header>
  );
};

export default Header;
