import React from "react";
import LogoImg from "../../Assets/img/mini.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoImg} alt="logo" />
    </div>
  );
};

export default Logo;
