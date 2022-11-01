import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  firstName: "",
  rut: "",
};

export const Destinatarios = () => {
  const [form, setForm] = useState(initialForm);

  const capturar = (evento) => {
    setForm({
      ...form,
      [evento.target.name]: evento.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.firstName || !form.rut) {
      alert("Datos incompletos");
      return false;
    } else {
      console.log(form);
    }
    form.reset()
  };

  const reset = (e) => {
    setForm(initialForm);
  };

  return (
    <>
    <h3>Destinatarios</h3>
    <form action="" onSubmit={handleSubmit}>
      <div className="row mt-5">
        <div className="col-sm-12 ">
          <button
            type="submit"
            className="btn btn-large bg-secondary w-25"
            onClick={handleSubmit}
          >
            Agregar
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={capturar}
          />
        </div>
        <div className="col-sm-6 mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={capturar}
          />
        </div>
        <div className="col-sm-6 mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            onChange={capturar}
          />
        </div>
        <div className="col-sm-6 mb-3">
          <label className="form-label">R.U.T.</label>
          <input
            type="text"
            className="form-control"
            id="rut"
            name="rut"
            onChange={capturar}
          />
        </div>
      </div>
    </form>
    </>
  );
};
