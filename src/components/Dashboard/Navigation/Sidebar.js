import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          Logo
        </Link>
        <hr className="sidebar-divider my-0 mt-5 mb-3"></hr>
        <div className="sidebar-heading">Principal</div>
        <li className="nav-item">
          <Link className="nav-link" href="index.html">
            <i className="fas fa-home"></i>
            <span>Pagina Principal</span>
          </Link>
          <Link
            className="nav-link collapsed"
            href="#"
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
              <Link className="collapse-item" href="visualizar-produtos.html">
                Psicólogos
              </Link>
              <Link className="collapse-item" href="cards.html">
                Clínicas
              </Link>
              <Link className="collapse-item" href="cards.html">
                Descobrir
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-ad"></i>
            <span>Social</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menu Social</h6>
              <Link className="collapse-item" href="utilities-color.html">
                Favoritos
              </Link>
              <Link className="collapse-item" href="utilities-border.html">
                Seguindo
              </Link>
              <Link className="collapse-item" href="utilities-animation.html">
                Feed
              </Link>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider"></hr>
        <div className="sidebar-heading">Consultas</div>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-money-check-alt"></i>
            <span>Consultas</span>
          </Link>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Menu de Consultas</h6>
              <Link className="collapse-item" href="login.html">
                Concluídas
              </Link>
              <Link className="collapse-item" href="register.html">
                Pendentes
              </Link>
              <Link className="collapse-item" href="forgot-password.html">
                Canceladas
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="charts.html">
            <i className="fas fa-user-tag"></i>
            <span>Clientes</span>
          </Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block"></hr>
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
  );
};

export default Sidebar;
