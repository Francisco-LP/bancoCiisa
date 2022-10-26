import React from "react";
import cuenta from '../../img/cuenta.png';
import credito from '../../img/credito.png';

export const Saldo = () => {
  return (
    <>
    <h3>Selecciona una opción</h3>
    <div className='row'>
        <div className='col-sm-4'>
            <img className='img-card' src={cuenta} alt=""/>
        </div>
        <div className='col align-self-end'>
        <img className='img-card' src={credito} alt=""/>
        </div>
    </div>
    </>
  );
};