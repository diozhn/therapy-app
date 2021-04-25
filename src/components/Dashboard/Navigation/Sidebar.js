import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Sidebar/Heading";
import NavItemCharts from "./Sidebar/NavItemCharts";
import PagesCollapseMenu from "./Sidebar/PagesCollapseMenu";
import PagesCollapseMenuConsults from "./Sidebar/PagesCollapseMenuConsults";
import SidebarToggle from "./Sidebar/SidebarToggle";
import UtilitiesCollapseMenu from "./Sidebar/UtilitiesCollapseMenu";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/dashboard"
      >
        Logo
      </Link>
      <hr className="sidebar-divider my-0 mt-5 mb-3"></hr>
      <Heading title="Profissionais" />
      <PagesCollapseMenu />
      <UtilitiesCollapseMenu />
      <hr className="sidebar-divider"></hr>
      <Heading title="Atendimento" />
      <PagesCollapseMenuConsults />
      <NavItemCharts />
      <hr className="sidebar-divider d-none d-md-block"></hr>
      <SidebarToggle />
    </ul>
  );
};

export default Sidebar;
