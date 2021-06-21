import React from "react";
import { Alert } from "react-bootstrap";
import styles from './ContentPage.module.css'

const ContentPage = () => {
  return (
    <div className={styles.joinOuterContainer}>
      <Alert variant="info">
        Esses são os profissionais do Therapy!
      </Alert>
    </div>
  );
};

export default ContentPage;
