import React from "react";
import { Link } from "react-router-dom";

const PieChart = () => {
  return (
    <>
      {/*Pie Chart */}
      <div className="col-x1-4 col-lg-5">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weigth-bold text-primary">Dados</h6>
            <div className="dropdown no-arrow">
              <Link
                className="dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink">
                <div className="dropdown-header">Opções:</div>
                <Link className="dropdown-item" to="#">
                  Atualizar
                </Link>
                <Link className="dropdown-item" to="#">
                  Esconder
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Detalhes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card Body*/}
      <div className="card-body">
        <div className="chart-pie pt-4 pb-2">
          <canvas id="myPieChart"></canvas>
        </div>
        <div className="mt-4 text-center small">
          <span className="mr-2">
            <i className="fas fa-cicle text-primary"></i> Consultas
          </span>
          <span className="mr-2">
            <i className="fas fa-cicle text-primary"></i> Social
          </span>
          <span className="mr-2">
            <i className="fas fa-cicle text-primary"></i> Favoritos
          </span>
        </div>
      </div>
    </>
  );
};

export default PieChart;
