import React from "react";
import { Saldo } from "./Saldo";
import { Movimientos } from "./Movimientos";
import { Destinatarios } from "./Destinatarios";
import { LineaCredito } from "./LineaCredito";

export const Content = () => {
  return (
    <>
      <div className="d-none" id="saldo">
        <Saldo />
      </div>
      <div className="d-none" id="movimientos">
        <Movimientos />
      </div>
      <div className="d-none" id="destinatarios">
        <Destinatarios />
      </div>
      <div className="d-none" id="LineaCredito">
        <LineaCredito />
      </div>
    </>
  );
};
