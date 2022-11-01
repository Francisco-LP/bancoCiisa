import useContactanos from "../components/useContactanos";

const initialData = {
    id: '',
    nombre:'',
    rut: '',
    numserie: '',
    celular: '',
    email: '',
    termino: false
    
    
    
};


const Contactanos = () => {
    

    const onValidate = (form) => {

        let errors = {} 
        let expRegTexto = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;
        let expRegRut = /^(\d{1,2}(?:\.\d{1,3}){2}-[\dkK])$/;
        let expRegEmail = /(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let expRegTelefono = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
        let expRegNumSerie = /^(\d{3}(?:\.\d{3})(?:\.\d{3}))$/;

        if(!form.nombre.trim()){
            errors.nombre = "El campo Nombre no debe estar vacio."

        }else if(!expRegTexto.test(form.nombre)){
            errors.nombre= "Formato invalido, el campo Nombre solo acepta letras y espacios"
        }
        
        if(!form.rut.trim()){
            errors.rut = "El campo Rut no debe estar vacio."
        }else if(!expRegRut.test(form.rut)){
            errors.rut= "Formato invalido"
        }

        if(!form.numserie.trim()){
            errors.numserie = "El campo numero de Serie no debe estar vacio."
        }else if(!expRegNumSerie.test(form.numserie)){
            errors.numserie= "Formato invalido"
        }

        if(!form.celular.trim()){
            errors.celular = "El campo numero de Celular no debe estar vacio."
        }else if(!expRegTelefono.test(form.celular)){
            errors.celular= "Formato invalido"
        }

        if(!form.email.trim()){
            errors.email = "El campo numero de Email no debe estar vacio."
        }else if(!expRegEmail.test(form.email)){
            errors.email= "Formato invalido"
        }
        if(!form.termino === true){
            errors.termino = "Debe aceptar los terminos y condiciones."
        }
        
        return errors
        
    };
    



    const {form, errors,handleChange, handleSubmit,handleChecked} = useContactanos(initialData, onValidate)

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
      <form  onSubmit={handleSubmit}>
        <div className="d-flex">
            <div className="mb-3 justify-content-center my-3 mx-5">
                <div className="my-3">
                    <label className="form-label">Nombre completo <p className="fw-lighter">solo letras y espacios</p></label>
                    <input type="text" className="form-control w-50" value={form.nombre} name="nombre" id="nombre" onChange={handleChange} />
                    {errors.nombre && <div className="alert alert-danger p-2 w-50" role="alert">{errors.nombre}</div>}
                    
                </div>
                <div className="my-3">
                    <label  className="form-label">Rut<p className="fw-lighter">Ej: 11.222.333-5</p></label>
                    <input type="text" className="form-control w-50" id="rut" value={form.rut} name="rut" onChange={handleChange} />
                    {errors.rut && <div className="alert alert-danger p-2 w-50" role="alert">{errors.rut}</div>}
                    
                </div>
                <div className="my-3">
                    <label className="form-label">Numero de serie<p className="fw-lighter">Ej: 111.222.333</p></label>
                    <input type="text" className="form-control w-50" id="numSerie" value={form.numserie} name="numserie" onChange={handleChange}/>
                    {errors.numserie && <div className="alert alert-danger p-2 w-50" role="alert">{errors.numserie}</div>}
                    
                </div>
                <div className="my-3">
                    <label  className="form-label">Celular<p className="fw-lighter">Ej: +56911223344 o 56911223344</p></label>
                    <input type="text" className="form-control w-50" id="celular" value={form.celular} name="celular" onChange={handleChange}/>
                    {errors.celular && <div className="alert alert-danger p-2 w-50" role="alert">{errors.celular}</div>}
                   
                </div>
                <div className="my-3">
                    <label className="form-label">Email<p className="fw-lighter">Ej: prueba@gmai.com</p></label>
                    <input type="text" className="form-control w-50" id="email" value={form.email} name="email" onChange={handleChange}/>
                    {errors.email && <div className="alert alert-danger p-2 w-50" role="alert">{errors.email}</div>}
                    
                </div>
                <div className="my-5">
                    <input type="checkbox" name="termino"  onChange={handleChecked}/>
                    {errors.termino && <div className="alert alert-danger p-2 w-50" role="alert">{errors.termino}</div>}
                    
                    
                    <br />
                    <p>He leido y acepto los terminos y condiciones de la evaluacion y aceptp participar en el programa de contato para ser parte del Banco Ciisa, aceptando su politica y provacidad.</p>
                </div>
                <div className="my-5">
                    <button type="submit" >Enviar formulario</button>
                </div>
            </div>
        </div>
      </form>
    </div>
  );
};

export default Contactanos;
