import React, { useState } from "react";
import { NavbarSuperior } from "./Navbar";
import { Content } from "./Content";
import { Saldo } from "./Saldo";
import Transferencias from "./Transferencia";
import { LineaCredito } from "./LineaCredito";
import { Movimientos } from "./Movimientos";
import { Destinatarios } from "./Destinatarios";

const PortalUsuario = (props) => {
  const [buttonSaldo, setButttonSaldo] = useState(false);
  const [buttonTransferencias, setButttonTransferencias] = useState(false);
  const [buttonCredito, setButttonCredito] = useState(false);
  const [buttonMovimientos, setButttonMovimientos] = useState(false);
  const [buttonDestinatarios, setButttonDestinatarios] = useState(false);

  const handlebuttonClick = () => {
    setButttonSaldo(true);
    setButttonTransferencias(false);
    setButttonCredito(false);
    setButttonMovimientos(false);
    setButttonDestinatarios(false);
  };

  const handleTransferencia = () => {
    setButttonTransferencias(true);
    setButttonSaldo(false);
    setButttonCredito(false);
    setButttonMovimientos(false);
    setButttonDestinatarios(false);
  };
  const handleCredito = () => {
    setButttonCredito(true);
    setButttonSaldo(false);
    setButttonTransferencias(false);
    setButttonMovimientos(false);
    setButttonDestinatarios(false);
  };
  const handleMovimientos = () => {
    setButttonMovimientos(true);
    setButttonCredito(false);
    setButttonSaldo(false);
    setButttonTransferencias(false);
    setButttonDestinatarios(false);
  };
  const handleDestinatarios = () => {
    setButttonDestinatarios(true);
    setButttonMovimientos(false);
    setButttonCredito(false);
    setButttonSaldo(false);
    setButttonTransferencias(false);
  };
  

  return (
    <div className="w-90 vh-100 container mt-2 bg-white">
      <h1 className="display-5">Portal de Usuario</h1>
      <div>
        <div className="border border-dark mt-3 mb-1  content-info">

          <div className=" my-5">
            <NavbarSuperior />
          </div>

          <div className="row mt-5 w-100 " >
            <div className="col-sm-5 mt-5">
              <div className="my-5">
                <button
                  className="nav-link mx-3 mt-1 mb-1 btn letra"
                  onClick={handlebuttonClick}
                >
                  <i className="bi bi-cash-coin"> </i>
                  Saldo
                </button>
              </div>

              <div className="my-5">
                <button className="nav-link mx-3 mt-1 mb-1 btn letra"
                onClick={handleTransferencia}>
                  <i className="bi bi-cash-stack"> </i>
                  Transferencia
                </button>
              </div>
              
              <div className="my-5">
                <button className="nav-link mx-3 mt-1 mb-1 btn letra"
                onClick={handleCredito}>
                  <i className="bi bi-credit-card"> </i>
                  Linea de Crédito
                </button>
              </div>
              
              <div className="my-5">
                <button
                  className="nav-link mx-3 mt-1 mb-1 btn letra"
                  onClick={handleMovimientos}
                >
                  <i className="bi bi-check2-circle"> </i>
                  Movimientos
                </button>
              </div>
              
              <div className="my-5">
                <button
                  className="nav-link mx-3 mt-1 mb-1 btn letra"
                  onClick={handleDestinatarios}
                >
                  <i className="bi bi-filter-left"> </i>
                  Destinarios
                </button>
              </div>
              
            </div>
            <div className="col-sm-7 border border-warning mt-1 mb-3">
              <div className="text-center">
                <Content />
                {buttonSaldo ? <Saldo /> : null}
                {buttonTransferencias ? <Transferencias /> : null}
                {buttonCredito ? <LineaCredito /> : null}
                {buttonMovimientos ? <Movimientos /> : null}
                {buttonDestinatarios ? <Destinatarios /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortalUsuario;
