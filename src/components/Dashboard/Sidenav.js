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
  FaDiscord,
} from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ContentPage from "./Pages/ContentPage";


const Sidenav = () => {

//    const { component, setComponent } = useComponent();

  return (
      <div className={styles.sidenav}>
        <div className={styles.options}>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Início</Tooltip>}
          >
            <Link to="/dashboard">
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
            <Link type="button" to="/dashboard/consultas" >
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
            <Link type="button" to="/dashboard/pagamentos">
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
            <Link type="button" to="/dashboard/profissionais">
              <FaUsers
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Suporte</Tooltip>}
          >

              <a href="https://discord.gg/r79CGkYPgh">
              <FaDiscord
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
              </a>

          </OverlayTrigger>
        </div>
        <div className={styles.configs}>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Configurações</Tooltip>}
          >
            <Link type="button" to="/dashboard/configs">
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
