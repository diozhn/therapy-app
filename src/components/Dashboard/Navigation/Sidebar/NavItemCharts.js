import React from 'react'
import { Link } from 'react-router-dom'

const NavItemCharts = () => {
  return (
    <li className="nav-item">
    <Link className="nav-link" to="charts.html">
      <i className="fas fa-user-tag"></i>
      <span>Clientes</span>
    </Link>
  </li>
  )
}

export default NavItemCharts
