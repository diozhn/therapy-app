import React from "react";
import DropdownAlerts from "./Topbar/DropdownAlerts";
import SearchDropdown from "./Topbar/SearchDropdown";
import ToggleTopbar from "./Topbar/ToggleTopbar";
import TopbarSearch from "./Topbar/TopbarSearch";
import UserInformation from "./Topbar/UserInformation";

const Topbar = () => {
  return (
      <nav className="navbar navbar-content navbar-light bg-white topbar mb-4 static-top shadow">
        <ToggleTopbar />
        <TopbarSearch />
        <ul className="navbar-nav ml-auto">
          <SearchDropdown />
          <DropdownAlerts />
          <div className="topbar-divider d-none d-sm-block"></div>
          <UserInformation />
        </ul>
      </nav>
  );
};

export default Topbar;
