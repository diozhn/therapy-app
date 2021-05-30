import React from "react";
import {  Link } from "react-router-dom";
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

const Sidenav = ({ routes }) => {

  function handleGetTicket() {
    console.log('ticket');
  }

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
            <Link to={"/dashboard/consultas"}>
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
            <Link to={"/dashboard/pagamentos"}>
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
            <Link to={"/dashboard/profissionais"}>
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
            <button type="button" onClick={handleGetTicket}>
              <FaFeatherAlt
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </button>
          </OverlayTrigger>
        </div>
        <div className={styles.configs}>
          <OverlayTrigger
            key="right"
            placement="right"
            overlay={<Tooltip id={`tooltip-right`}>Configurações</Tooltip>}
          >
            <Link to={"/dashboard/configs"}>
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
