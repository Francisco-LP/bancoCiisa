import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Restablece tu contraseña</h2>
            <h5>Ingresa tu correo y te enviaremos una nueva contraseña</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Correo</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Enviar nueva contraseña</button>
                </p>
            </form>
            <footer>
                <p>¿Primera vez? <Link to="/register">Crea tu cuenta</Link>.</p>
                <p><Link to="/">Volver a la página principal</Link>.</p>
            </footer>
        </div>
    )
}
