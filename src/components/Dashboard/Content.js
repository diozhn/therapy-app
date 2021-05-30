import React from "react";
import styles from "./Content.module.css";
import Ticket from "./Pages/Ticket";

const Content = () => {
  return (
      <div className={styles.content}>
        <Ticket />
      </div>
  );
};

export default Content;
