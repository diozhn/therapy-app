import React from "react";
import styles from "./Sidenav.module.css";
import {
  FaHome,
  FaComments,
  FaFileInvoiceDollar,
  FaUsers,
  FaCogs,
  FaFeatherAlt,
} from "react-icons/fa";

const Sidenav = () => {
  return (
    <div className={styles.sidenav}>
      <div className={styles.options}>
        <FaHome style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }} />
        <FaComments
          style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
        />
        <FaFileInvoiceDollar
          style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
        />
        <FaUsers style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }} />
        <FaComments
          style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
        />
      </div>
      <div className={styles.configs}>
        <FaFeatherAlt
          style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
        />
        <FaCogs style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer", marginTop: '10px' }} />
      </div>
    </div>
  );
};

export default Sidenav;
