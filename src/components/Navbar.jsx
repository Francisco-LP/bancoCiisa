import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-secondary sticky-top">
      <div className="container-fluid">
        <NavLink className='navbar-brand mx-5'>Banco Ciisa</NavLink>
        <div className="d-flex container">
              <a  className="nav-link mx-4" href='/#bienvenido'>Home</a>
              
              
              <a className="nav-link mx-3" href='/#productos'>Nuestros Productos</a>
              <a className="nav-link mx-3" href="/#beneficios">Beneficios</a>
              <a className="nav-link mx-3" href="/#cuentas">Cuentas</a>
              <a className="nav-link mx-3" href='/#preguntas'>Preguntas Frecuentes</a>
              <a className="nav-link mx-3" href='/#footer'>Sugerencias y reclamos</a>
              <Link className="nav-link mx-3" to='/hazteCliente'>Hazte Cliente</Link>
              <Link className="nav-link mx-3" to="/contactanos">Contactanos</Link>
              <Link className="nav-link mx-3" to="/login">Inicio Sesion</Link>
              <Link className="nav-link mx-3" to="/PortalUsuario">Rodrigo</Link>
        </div>    
      </div>
    </nav>
  )
}

export default Navbar
