import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const NavbarSuperior = () => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active letra" aria-current="page" href="#">
          <i class="bi bi-chat-left-text"> </i>Contactanos
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link letra" href="#">
          <i class="bi bi-bank"> </i>
          Sucursales
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link letra" href="#">
          <i class="bi bi-x-circle"> </i>
          Bloqueo de tarjetas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link letra">
          <i class="bi bi-box-arrow-left"> </i>
          Perfil
        </a>
      </li>
    </ul>
  );
};

export const NavbarLateral = () => {

  const [mostrarComponente, setMostrarComponente] = useState('');

  return (
    <div className=" mt-1 mb-3 col-sm-3 sidenav col-sm-10">
      <ul className=" list-group nav nav-pills">
        <li className="list-group-item nav-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario" onClick={()=>setMostrarComponente(!mostrarComponente)}>
            <i class="bi bi-cash-coin"> </i>
            Saldo
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario">
            <i class="bi bi-cash-stack"> </i>
            Transferencia
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario"
          >
            <i className="bi bi-credit-card"> </i>
            Linea de Crédito
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario"
          >
            <i class="bi bi-check2-circle"> </i>
            Movimientos
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario"
          >
            <i class="bi bi-filter-left"> </i>
            Destinarios
          </Link>
        </li>
      </ul>
    </div>
  );
};
