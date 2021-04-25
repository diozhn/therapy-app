import React from "react";
import { Link } from "react-router-dom";

const PagesCollapseMenu = () => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard">
        <i className="fas fa-home"></i>
        <span>Pagina Principal</span>
      </Link>
      <Link
        className="nav-link collapsed"
        to="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i className="fas fa-shopping-cart"></i>
        <span>Profissionais</span>
      </Link>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Menu de Busca</h6>
          <Link className="collapse-item" to="/visualizar-profissionais">
            Psicólogos
          </Link>
          <Link className="collapse-item" to="/cards">
            Clínicas
          </Link>
          <Link className="collapse-item" to="/cards">
            Descobrir
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PagesCollapseMenu;
