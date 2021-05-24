import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaBell, FaRegEnvelope, FaRegCalendarAlt } from "react-icons/fa";
import Avatar from "../../Assets/img/avatar.jpg"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.social}>
        <FaTwitter
          style={{
            cursor: "pointer",
            marginLeft: "1rem",
            width: "1rem",
            height: "1rem",
          }}
        />
        <FaFacebookF
          style={{
            cursor: "pointer",
            marginLeft: "1rem",
            width: "1rem",
            height: "1rem",
          }}
        />
        <FaInstagram
          style={{
            cursor: "pointer",
            marginLeft: "1rem",
            width: "1rem",
            height: "1rem",
          }}
        />
      </div>
      <div className={styles.options}>
        <div className={styles.optionsFast}>
          <FaRegCalendarAlt style={{ cursor: 'pointer' }}/>
          <FaBell style={{ marginLeft: "10px", cursor: 'pointer' }} />
          <FaRegEnvelope style={{ marginLeft: "10px", cursor: 'pointer' }} />
        </div>
        <div className={styles.profileCard}>
          <h1>Douglas</h1>
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
