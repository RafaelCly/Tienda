import "./carrusel.css";
import panes from "../../../assets/img-home/panes-dsct.jpg";
import galletas from "../../../assets/img-home/galletas-dsct.jpg";
import bebidas from "../../../assets/img-home/bebidas-dsct.jpg";
import embutidos from "../../../assets/img-home/embutidos-dsct.jpg";
import cerveza from "../../../assets/img-home/cerveza-dsct.jpeg";

function Carrusel() {
  return (
    <div class="carrusel">
      <div class="slider">
        <div class="slide">
          <img src={panes} alt="Producto 1" />
          <button className="ver-mas">Ver más</button>
        </div>
        <div class="slide">
          <img src={galletas} alt="Producto 2" />
          <button className="ver-mas">Ver más</button>
        </div>
        <div class="slide">
          <img src={bebidas} alt="Producto 3" />
          <button className="ver-mas">Ver más</button>
        </div>
        <div class="slide">
          <img src={embutidos} alt="Producto 4" />
          <button className="ver-mas">Ver más</button>
        </div>
        <div class="slide">
          <img src={panes} alt="Producto 1" />
          <button className="ver-mas">Ver más</button>
        </div>
      </div>
    </div>
  );
}
export default Carrusel;