import React from "react";
import { Link } from "react-router-dom";

const UtilitiesCollapseMenu = () => {
  return (
    <li className="nav-item">
      <Link
        className="nav-link collapsed"
        to="#"
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
          <Link className="collapse-item" to="utilities-color.html">
            Favoritos
          </Link>
          <Link className="collapse-item" to="utilities-border.html">
            Seguindo
          </Link>
          <Link className="collapse-item" to="utilities-animation.html">
            Feed
          </Link>
        </div>
      </div>
    </li>
  );
};

export default UtilitiesCollapseMenu;
