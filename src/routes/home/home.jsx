import React from 'react'
import bebidas from '../../assets/img-home/bebidas-dsct.jpg'
import galletas from '../../assets/img-home/galletas-dsct.jpg'
import panes from '../../assets/img-home/panes-dsct.jpg'
import embutidos from '../../assets/img-home/embutidos-dsct.jpg'
import cerveza from '../../assets/img-home/cerveza-dsct.jpeg'
import './home.css'
import CompProducto from './componente-producto/comp-producto.jsx'
import Carrusel from './carrusel/carrusel.jsx'
import Tarjetita from './tarjetita/tarjetita.jsx'
import FormConsulta from './form-consulta/form-consulta.jsx'
import Footer from './footer/footer.jsx'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className='home'>
      <Carrusel />
      <h3 className='h3-1'>Ofertas del día</h3>
      <section class="galery-img">
        <div className="img-container">
          <img src={cerveza} alt="cerveza-dsct" />
          <button className="v-mas">ver más</button>
        </div>
        <div className="img-container">
          <img src={galletas} alt="galletas-dsct" />
          <button className="v-mas">ver más</button>
        </div>
        <div className="img-container">
          <img src={bebidas} alt="bebidas-dsct" />
          <button className="v-mas">ver más</button>
        </div>
        <div className="img-container">
          <img src={embutidos} alt="embutidos-dsct" />
          <button className="v-mas">ver más</button>
        </div>
        <div className="img-container">
          <img src={panes} alt="panes-dsct" />
          <button className="v-mas">ver más</button>
        </div>
      </section>

      <section className="home-productos">
        <h1 className="hh1">Nuestros productos</h1>
        <div className="home-prod1">
          <Link to="/catalogo" className='btn1' >
            <CompProducto imagen={panes} nombre="Panes"></CompProducto>
          </Link>
          <Link to="/catalogo" className='btn1' >
            <CompProducto imagen={panes} nombre="Helados"></CompProducto>
          </Link>
          <Link to="/catalogo" className='btn1' >
            <CompProducto imagen={panes} nombre="Cervezas"></CompProducto>
          </Link>
        </div>
        <div className="home-prod2">
          <Link to="/catalogo" className='btn1' >
            <CompProducto imagen={panes} nombre="Galletas"></CompProducto>
          </Link>
          <Link to="/catalogo" className='btn1' >
            <CompProducto imagen={panes} nombre="Embutidos"></CompProducto>
          </Link>
          <Link to="/catalogo" className='btn1' >
            <CompProducto imagen={panes} nombre="Bebidas"></CompProducto>
          </Link>
        </div>
      </section>

      <section className="tarjetita-info">
        <Tarjetita icon="help-circle-outline" nombre = "Como comprar" parrafo="Si tienes alguna duda ingresa aqui"></Tarjetita>
        <Tarjetita icon="card-outline" nombre = "Formas de pago" parrafo="Conoce las formas de pago disponibles"></Tarjetita>
        <Tarjetita icon="return-down-back-outline" nombre = "Devoluciones" parrafo="Inconveniente? Puedes devolverlo"></Tarjetita>
        <Tarjetita icon="home-outline" nombre = "Tiendas" parrafo="Conoce tu tienda mas cercana"></Tarjetita>
      </section>
      <FormConsulta />
      <Footer />
    </div>
  )
}

export default home