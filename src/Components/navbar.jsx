import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Lupa from '../assets/lupa.png'
import Carrito from '../assets/carrito.png'
import User from '../assets/user.png'
import Catalogo from '../assets/catalogo.png'
import Home from '../assets/home.png'

const navbar = () => {
  return (
    <header className='head1'>
      <nav className='nav1'>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        <div className='busqueda-header'>
          <img src={Lupa} alt="Lupa" className="lupa" />
          <input type="text" className = "busqueda"  placeholder='¿Qué buscas hoy?'/>
        </div>

        <div className='modulos'>
          <Link to="/"className='btn1' >
          <img src={Home} alt="home" />
            <span>Home</span>
          </Link>

          <Link to="/catalogo" className='btn1' >
          <img src={Catalogo} alt="catalogo" />
            <span>Catálogo</span>
          </Link>

          <Link to="/carrito" className='btn1' >
            <img src={Carrito} alt="carrito" />
            Carrito
          </Link>

          <Link to="/usuario" className='btn1' >
          <img src={User} alt="user" />
          <span>Usuario</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default navbar