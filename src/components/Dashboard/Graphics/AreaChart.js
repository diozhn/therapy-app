import React from "react";
import { Link } from "react-router-dom";

const AreaChart = () => {
  return (
    <>
      <div className="row">
        {/* Area Chart*/}
        <div className="col-x1-8 col-lg-7">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Gráfico de Faturamento
              </h6>
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
      </div>
      <div class="card-body">
        <div class="chart-area">
          <canvas id="myAreaChart"></canvas>
        </div>
      </div>
    </>
  );
};

export default AreaChart;
