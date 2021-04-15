import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar-dark accordion"
      id="accordionSidebar">
      <Link className="sidebar-brand d-flex align-items-center" to="/dashboard">
        Therapy App
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0 mt-5 mb-3" />
        {/* Heading */}
        <div className="sidebar-heading">Principal</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-home"></i>
            <span>Página Principal</span>
            <Link
              className="nav-link collapsed"
              to="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo">
              <i className="fas fa-shopping-cart"></i>
              <span>Consultas</span>
            </Link>
          </Link>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menu de Colsultas</h6>
              <Link className="collapse-item" to="/clientes">
                Clientes
              </Link>
              <Link className="collapse-item" to="/clientes">
                Histórico
              </Link>
              <Link className="collapse-item" to="/clientes">
                Agendamentos
              </Link>
            </div>
          </div>
        </li>
        {/* Ferramentas */}
        <li class="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities">
            <i class="fas fa-ad"></i>
            <span>Marketing</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menu de Ferramentas</h6>
              <Link className="collapse-item">Chama de Vídeo</Link>
              <Link className="collapse-item">Chat</Link>
              <Link className="collapse-item">Feed</Link>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
    </ul>
  );
};

export default Sidebar;
