import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Content from "./Content";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
import ContentProvider from "../../ContentProvider";

const Dashboard = () => {
  return (
      <div className={styles.gridTemplateAreas}>
        <Logo />
        <Navbar />
        <Content />
        <Sidenav />
        <Footer />
      </div>
  );
};

export default Dashboard;
