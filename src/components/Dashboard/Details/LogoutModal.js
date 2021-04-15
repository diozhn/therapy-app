import React from "react";
import { Link } from "react-router-dom";

const LogoutModal = () => {
  return (
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Sair mesmo assim?
            </h5>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            Clique em "Sair" se estiver pronto para deixar essa sessão.
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              type="button"
              data-dismiss="modal">
              Cancelar
            </button>
            <Link to="/login" className="btn btn-primary">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
