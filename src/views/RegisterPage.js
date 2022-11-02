import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>BANCO CIISA</h2>
            <h5>Crea tu cuenta</h5>
            <form action="/Login">
                <p>
                    <label>RUT</label><br/>
                    <input type="text" name="rut" required />
                </p>
                <p>
                    <label>Correo</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Contraseña</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>Acepto los Terminos y condiciones</span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Registrarse</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Volver a la página principal</Link>.</p>
            </footer>
        </div>
    )

}
