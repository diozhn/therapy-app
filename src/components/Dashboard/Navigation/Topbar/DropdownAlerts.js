import React from "react";
import { Link } from "react-router-dom";

const DropdownAlerts = () => {
  return (
    <li className="nav-item dropdown no-arrow mx-1">
      <Link
        className="nav-link dropdown-toggle"
        to="#"
        id="alertsDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-bell fa-fw"></i>
        <span className="badge badge-danger badge-counter">3+</span>
      </Link>
      <div
        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
        aria-labelledby="alertsDropdown"
      >
        <h6 className="dropdown-header">Notificações</h6>
        <Link className="dropdown-item d-flex align-items-center" to="#">
          <div className="mr-3">
            <div className="icon-circle bg-primary">
              <i className="fas fa-file-alt text-white"></i>
            </div>
          </div>
          <div>
            <div className="small text-gray-500">Abril 12, 2021</div>
            <span className="font-weight-bold">
              Uma nova consulta foi solicitada!
            </span>
          </div>
        </Link>
        <Link className="dropdown-item d-flex align-items-center" to="#">
          <div className="mr-3">
            <div className="icon-circle bg-success">
              <i className="fas fa-donate text-white"></i>
            </div>
          </div>
          <div>
            <div className="small text-gray-500">24 de Abril, 2021</div>
            Você recebeu R$250,00 da pela sua ultima consulta!
          </div>
        </Link>
        <Link className="dropdown-item d-flex align-items-center" to="#">
          <div className="mr-3">
            <div className="icon-circle bg-warning">
              <i className="fas fa-exclamation-triangle text-white"></i>
            </div>
          </div>
          <div>
            <div className="small text-gray-500">20 de Abril, 2021</div>
            Você recebeu um novo feedback sobre sua ultima consulta!
          </div>
        </Link>
        <Link className="dropdown-item text-center small text-gray-500" to="#">
          Mostrar todas as notificações
        </Link>
      </div>
    </li>
  );
};

export default DropdownAlerts;
