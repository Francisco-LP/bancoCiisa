import React from 'react'

const Cliente = () => {
    return ( 
        <div className='container d-flex mt-5'>
            <div>
                <h3 className='my-3'>Inscripcion</h3>
                <hr/>
                <p>Un plan de cuentas consta de una serie de productos que buscan brindar apoyo integral en todos los momentosdonde puedas necesitar ayuda del Banco Ciisa</p>
                <p>Solicita tu cuenta corriente. La cuenta corriente lleva asociado un talonario de cheques sin restricciones de saldos</p>
                <p>Una linea de credito que permite cubrir emergencias e imprevistos.</p>
                <hr/>
                <h3 className='my-3'>Requisitos</h3>
                <p>Tener nacionalidad chilena o extranjera con residencia definitiva.</p>
                <p>Ser mayor de 18 años.</p>
                <p>Ser persona natural sin giro comenrcial.</p>
                <p>En el caso de abrir un plan con cuenta corriente, tener una resta liquida igual o mayor a $600.000</p>
                <p>Trabajadores dependientes: minimo 1 año en el empleo actual o 6 meses con continuidad laboral de 2 años.</p>
                <p>Trabajadores independientes: minimo 1 año desde la iniciacion.</p>
                <hr/>
                <h3 className='my-3'>Documentacion</h3>
                <h4 className='my-4'>Para personas naturales: </h4>
                <p>Cedula de identidad vigente</p>
                <p>Fotografia reciente tamaño carnet</p>
                <p>Comprobante de domicilio</p>
                <p>Estsdo de cuentas pagados</p>
                <p>Correspondencia de entiedades bancarias o financieras, tales como: Estado de cuenta de tarjetas de credito, cartolas de cuenta corriente</p>
                <p>3 ultimas liquidaciones</p>
                <p className='my-5'><b>Declaracion de Inicio de actividade, Form N° 4415,  autorizado por el SII </b></p>
                <div className='d-flex justify-content-center'>
                    <button>Siguiente</button>
                </div>
            </div>
        </div>
     );
}
 
export default Cliente;