import React from "react";
import styles from "../Dashboard/Content.module.css";
import Therapy from "../../Assets/img/therappy-background.png"




const Content = () => {
  return (
      <div className={styles.content}>
        <h1>Bem vindo ao Therapy ;) Use o menu ao lado para navegar entre nossas funcionalidades</h1>
        <img className={styles.image} src={Therapy} />
      </div>
  );

};

export default Content;
