import React from 'react'
import './usuario.css'
import {useState} from 'react'

function usuario() {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(prev => !prev);
  };

  return (
    <div className="container-usuario">
      <div className={showSignIn ? 'cont1':'cont2'} >
        <div className="cont-form">
          <form className="sign-in">
            <h2>Iniciar sesión</h2>
            <div className="social-networks">
              <ion-icon name="logo-google"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <span>Use su correo y contraseña</span>
            <div className="cont-input">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="text" placeholder='Email' />
            </div>
            <div className="cont-input">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" placeholder='Password' />
            </div>
            <button>INICIAR SESIÓN</button>
            <div className="recuperar-contra">
              <span>¿Olvidaste tu contraseña? </span><a href="">Recuperar contraseña</a> 
            </div>
            <div className="no-cuenta">
              <span>No tienes cuenta? </span><a href="">Registrate</a>      
            </div>
          </form>
        </div>
        <div className="cont-form">
          <form className="sign-up">
            <h2>Registrarse</h2>
            <div className="social-networks">
              <ion-icon name="logo-google"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <span>Use su correo electrónico para registrarse</span>
            <div className="cont-input">
              <ion-icon name="person-outline"></ion-icon>
              <input type="text" placeholder='Nombre' />
            </div>
            <div className="cont-input">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" placeholder='Password' />
            </div>
            <div className="cont-input">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" placeholder='Password' />
            </div>
            <button>REGISTRARSE</button>
            <div className="recuperar-contra">
              <span>Ya tienes cuenta? </span><a href="">Iniciar sesión</a> 
            </div>           
          </form>
        </div>

        <div className="cont-welcome">
          <div className="welcome-sign-up welcome">
            <h3>Bienvenido!</h3>
            <p>Registrese para continuar</p>
            <button className='button' onClick={toggleForm}>Registrarse</button>
          </div>
          <div className="welcome-sign-in welcome">
            <h3>Bienvenido!</h3>
            <p>Inicia sesión para continuar</p>
            <button className='button' onClick={toggleForm}>Iniciar Sesión</button>
          </div>
        </div> 
      </div>
    </div>  
  )
}

export default usuario