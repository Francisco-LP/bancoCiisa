import React from "react";

export const Movimientos = () => {
  return (
    <>
    <h4 >Últimos movimientos</h4>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Cuenta</th>
          <th scope="col">Fecha</th>
          <th scope="col">Monto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Juan Perez</td>
          <td>Corriente</td>
          <td>24-10-2022</td>
          <td>$52.500</td>
        </tr>
        <tr>
          <td>Luís Torres</td>
          <td>Corriente</td>
          <td>23-10-2022</td>
          <td>$15.500</td>
        </tr>
      </tbody>
    </table>
    </>
  );
};
