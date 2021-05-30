import React from "react";
import styles from "./Content.module.css";
import { Router } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";

const Content = () => {
  return (
    <Router>
      <div className={styles.content}>
        
      </div>
    </Router>
  );
};

export default Content;
