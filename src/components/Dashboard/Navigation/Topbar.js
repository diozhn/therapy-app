import React from "react";
import { Link } from "react-router-dom";
import imgProfile from "../../../Assets/img/undraw_profile.svg";

const Topbar = () => {
  return (
      <nav className="navbar navbar-content navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Pesquisar"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Procure por..."
                    aria-label="Procurar"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
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
              <Link
                className="dropdown-item text-center small text-gray-500"
                to="#"
              >
                Mostrar todas as notificações
              </Link>
            </div>
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Diogo
              </span>
              <img
                className="img-profile rounded-circle"
                src={imgProfile}
                alt="profile"
              />
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <Link className="dropdown-item" to="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Configurações
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Atividades Recentes
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Sair
              </Link>
            </div>
          </li>
        </ul>
      </nav>
  );
};

export default Topbar;
