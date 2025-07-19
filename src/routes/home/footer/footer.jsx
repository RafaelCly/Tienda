import "./footer.css";
import Logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
        <img src={Logo} alt="" />
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="info">
            <div className="redes">
                <h1>Nuestras redes</h1>
                <div className="face">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className="twit">
                    <ion-icon name="logo-twitter"></ion-icon>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="ig">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="nosotros">
                <a href="/about">Nosotros</a>
                <a href="/contact">Contacto</a>
                <a href="/privacy">Política de privacidad</a>
                <a href="/terms">Términos y condiciones</a>
            </div>    
        </div>
    </footer>
  );
}

export default Footer;