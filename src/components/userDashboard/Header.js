import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Butterfly } from "../../Assets/img/logo.svg";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          className={styles.logo}
          to="/dashboard"
          aria-label="Therapy - Dashboard">
          <Butterfly />
        </Link>
        {data && (
          <Link className={styles.dashboard} to="/">
            <button onClick={userLogout}>Sair</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
