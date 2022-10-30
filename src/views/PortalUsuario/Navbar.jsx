import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Enlace from "./Transferencia";

export const NavbarSuperior = () => {
  return (
    <div className=" sticky-top">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active letra" aria-current="page" href="#">
            <i className="bi bi-chat-left-text"> </i>Contactanos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link letra" href="#">
            <i className="bi bi-bank"> </i>
            Sucursales
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link letra" href="#">
            <i className="bi bi-x-circle"> </i>
            Bloqueo de tarjetas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link letra">
            <i className="bi bi-box-arrow-left"> </i>
            Perfil
          </a>
        </li>
      </ul>
    </div>
  );
};

export const NavbarLateral = () => {
  const [mostrarComponente, setMostrarComponente] = useState("");



  return (
    <div className=" mt-1 mb-3 col-sm-3 sidenav col-sm-10  sticky-left">
      <ul className=" list-group nav nav-pills">
        <li className="list-group-item nav-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario"
          >
            <i className="bi bi-cash-coin"> </i>
            Saldo
          </Link>
          <a
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            href="/PortalUsuario/saldo"
            onClick={() => setMostrarComponente(!mostrarComponente)}
          >
            <i className="bi bi-cash-coin"> </i>
            Saldo
          </a>
        </li>
        <li className="list-group-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario"
          >
            <i className="bi bi-cash-stack"> </i>
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
          <button className="nav-link mx-3 mt-1 mb-1 btn letra" >
            <i className="bi bi-credit-card"> </i>
            Linea de Crédito
          </button>
        </li>


        <li className="list-group-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario"
          >
            <i className="bi bi-check2-circle"> </i>
            Movimientos
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="nav-link mx-3 mt-1 mb-1 btn letra"
            to="/PortalUsuario"
          >
            <i className="bi bi-filter-left"> </i>
            Destinarios
          </Link>
        </li>
      </ul>
    </div>
  );
};
