import React from 'react'
import styles from "./Dashboard.module.css"
import Logo from "../../Assets/img/logo.png"
import { FaTwitter, FaFacebookF, FaInstagram, FaBell, FaRegEnvelope, FaRegCalendarAlt } from "react-icons/fa";
import Avatar from "../../Assets/img/avatar.jpg"

const Dashboard = () => {
  return (
    <div className={styles.gridTemplateAreas}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.nav}>
        <div className={styles.social}>
          <FaTwitter style={{cursor: 'pointer', marginLeft: '1rem', width: '1rem', height: '1rem'}} />
          <FaFacebookF style={{cursor: 'pointer', marginLeft: '1rem', width: '1rem', height: '1rem'}} />
          <FaInstagram style={{cursor: 'pointer', marginLeft: '1rem', width: '1rem', height: '1rem'}} />
        </div>
        <div className={styles.options}>
          <div className={styles.optionsFast}>
            <FaRegCalendarAlt />
            <FaBell style={{marginLeft:  '10px'}} />
            <FaRegEnvelope style={{marginLeft:  '10px'}} />
          </div>
          <div className={styles.profileCard}>
            <h1>Douglas</h1>
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <div className={styles.content}>Content</div>
      <div className={styles.sidenav}>Sidenav</div>
      <div className={styles.footer}>Footer</div>
    </div>
  )
}

export default Dashboard
