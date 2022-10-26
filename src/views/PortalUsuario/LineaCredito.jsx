import React from "react";

export const LineaCredito = () => {
  return (
    <>
      <div className="row mt-1">
        <div className="col">
          <p className="bg-secondary bg-gradient title-lCredito">
            Saldo Disponible
          </p>
        </div>
        <div className="col">
          <p className="bg-secondary bg-gradient title-lCredito">
            Movimientos Anteriores
          </p>
        </div>
        <div className="col">
          <p className="bg-secondary bg-gradient title-lCredito">
            Créditos Disponibles
          </p>
        </div>
        <div className="col">
          <p className="bg-secondary bg-gradient title-lCredito">Cuotas</p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <p className="bg-secondary bg-gradient content-lCredito">Cuadro de saldo</p>
        </div>
        <div className="col">
          <p className="bg-secondary bg-gradient content-lCredito">Cuadro de movimiento anteriores</p>
        </div>
        <div className="col">
          <p className="bg-secondary bg-gradient content-lCredito">Cuadro de crédito disponible</p>
        </div>
        <div className="col">
          <p className="bg-secondary bg-gradient content-lCredito">Cuadro cuotas</p>
        </div>
      </div>
    </>
  );
};
