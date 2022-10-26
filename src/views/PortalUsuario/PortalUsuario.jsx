import React from "react";
import { NavbarSuperior, NavbarLateral } from "./Navbar";
import { Content } from "./Content";

const PortalUsuario = () => {
  return (
    <div className="w-90 vh-100 container mt-2 bg-white">
      <h1 className="display-5">Portal de Usuario</h1>
      <div>
        <div className="border border-dark mt-3 mb-1  content-info">
          <div className=" mt-3">
            <NavbarSuperior />
          </div>
          <div className="row mt-3 w-100">
            <div className="col-sm-5">
              <NavbarLateral />
            </div>
            <div className="col-sm-7 border border-warning mt-1 mb-3">
              <div className="text-center">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortalUsuario;
