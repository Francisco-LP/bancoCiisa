import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>BANCO CIISA</h2>
            <form action="/PortalUsuario">
                <p>
                    <label>RUT</label><br/>
                    <input type="text" name="rut" required />
                </p>
                <p>
                    <label>Contraseña</label>
                    <Link to="/forget-password"><label className="right-label">¿Olvidaste tu contraseña?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Iniciar Sesión</button>
                </p>
            </form>
            <footer>
                <p>Primera vez? <Link to="/register">Crea tu cuenta</Link>.</p>
                <p><Link to="/">Volver a la página principal</Link>.</p>
            </footer>
        </div>
    )
}
