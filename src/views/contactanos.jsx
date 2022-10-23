import React, { useState } from "react";

const initialForm = {
    id: '',
    nombre:"",
    rut: "",
    numserie: "",
    celular: "",
    email: "",
};

const Contactanos = () => {

    const [form, setForm] = useState(initialForm);

    const capturar = (evento) => {
        setForm({
            ...form,
            [evento.target.name] : evento.target.value
        })
        
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.nombre || !form.rut || !form.numserie ||  !form.celular || !form.email){
            alert("Datos incompletos")
        }else{
            console.log(form);
        }

        reset();
    };

    const reset = (e) => {
        setForm(initialForm);
    };

  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-center my-5">
          <h2>Formulario de contacto</h2>
        </div>
        <div className="my-3 mx-5">
          <p>
            Recuerda que este formulario es para que uno de nuestros ejecutivos
            te contacten para finiquitar tu inscripcion y ser parte de nuestro
            banco
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="d-flex">
            <div className="mb-3 justify-content-center my-3 mx-5">
                <div className="my-3">
                    <label className="form-label">Nombre completo</label>
                    <input type="text" className="form-control w-50" name="nombre" id="nombre" onChange={capturar} />
                </div>
                <div className="my-3">
                    <label  className="form-label">Rut</label>
                    <input type="text" className="form-control w-50" id="rut" name="rut" onChange={capturar} />
                </div>
                <div className="my-3">
                    <label className="form-label">Numero de serie</label>
                    <input type="text" className="form-control w-50" id="numSerie" name="numserie" onChange={capturar}/>
                </div>
                <div className="my-3">
                    <label  className="form-label">Celular</label>
                    <input type="text" className="form-control w-50" id="celular" name="celular" onChange={capturar}/>
                </div>
                <div className="my-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control w-50" id="email" name="email" onChange={capturar}/>
                </div>
                <div className="my-5">
                    <input type="checkbox"/>
                    <p>He leido y acepto los terminos y condiciones de la evaluacion y aceptp participar en el programa de contato para ser parte del Banco Ciisa, aceptando su politica y provacidad.</p>
                </div>
                <div className="my-5">
                    <button type="submit" onClick={handleSubmit}>Enviar formulario</button>
                </div>
            </div>
        </div>
      </form>
    </div>
  );
};

export default Contactanos;
