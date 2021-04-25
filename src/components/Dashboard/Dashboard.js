import React from "react";
import Sidebar from "./Navigation/Sidebar";
import Topbar from "./Navigation/Topbar";
import PageHeading from "../Dashboard/PageHeading";
import MonthlyRequests from "../Dashboard/Cards/MonthlyRequests";
import PendingRequestCard from "../Dashboard/Cards/PendingRequestCard";
import AnnualRequests from "../Dashboard/Cards/AnnualRequests";
import AreaChart from "../Dashboard/Graphics/AreaChart";
import PieChart from "../Dashboard/Graphics/PieChart";
import ScrollTopButton from "../Dashboard/Details/ScrollTopButton";
import LogoutModal from "../Dashboard/Details/LogoutModal";

const Dashboard = () => {
  return (
    <div id="page-top">
      <div id="wrapper" />
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <PageHeading />
              <div className="row">
                <MonthlyRequests />
                <PendingRequestCard />
                <AnnualRequests />
              </div>
              <div className="row">
                <AreaChart />
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      <ScrollTopButton />
      <LogoutModal />
    </div>
  );
};

export default Dashboard;
