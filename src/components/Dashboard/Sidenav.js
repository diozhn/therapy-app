import React from "react";
import {  Link } from "react-router-dom";
import {useComponent, components} from "../../ContentProvider"
import styles from "./Sidenav.module.css";
import {
  FaHome,
  FaComments,
  FaFileInvoiceDollar,
  FaUsers,
  FaCogs,
  FaFeatherAlt,
} from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ContentPage from "./Pages/ContentPage";


const Sidenav = () => {

  const { component, setComponent } = useComponent();

  return (
      <div className={styles.sidenav}>
        <div className={styles.options}>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Início</Tooltip>}
          >
            <Link onClick={() => setComponent(components[0].component)} to="/dashboard">
              <FaHome
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Consultas</Tooltip>}
          >
            <Link type="button">
              <FaComments
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Pagamentos</Tooltip>}
          >
            <Link type="button">
              <FaFileInvoiceDollar
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Profissionais</Tooltip>}
          >
            <Link type="button">
              <FaUsers
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Ticket</Tooltip>}
          >
            <Link type="button">
              <FaFeatherAlt
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </OverlayTrigger>
        </div>
        <div className={styles.configs}>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Configurações</Tooltip>}
          >
            <Link type="button">
              <FaCogs
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              />
            </Link>
          </OverlayTrigger>
        </div>
      </div>
  );
};

export default Sidenav;
