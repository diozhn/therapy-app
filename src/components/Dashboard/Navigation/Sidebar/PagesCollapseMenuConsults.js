import React from 'react'
import { Link } from 'react-router-dom'

const PagesCollapseMenuConsults = () => {
  return (
<li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
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
              <Link className="collapse-item" to="login.html">
                Concluídas
              </Link>
              <Link className="collapse-item" to="register.html">
                Pendentes
              </Link>
              <Link className="collapse-item" to="forgot-password.html">
                Canceladas
              </Link>
            </div>
          </div>
        </li>
  )
}

export default PagesCollapseMenuConsults
