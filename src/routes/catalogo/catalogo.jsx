import './catalogo.css';
import BtnsCategoria from './btns-categoria/btn-categoria.jsx';
import { useState } from 'react';
import PropProducto from './prop-producto/prop-producto.jsx';
import categories from './data.js';
import DetalleProducto from './detalleProducto/DetalleProducto.jsx'; // componente nuevo

const Catalogo = () => {
  const [Productos, setProductos] = useState("panes");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  function manejarCambioCategoria(categoria) {
    setProductos(categoria);
    setProductoSeleccionado(null); // resetea vista
  }

  function seleccionarProducto(producto) {
    setProductoSeleccionado(producto);
  }

  function regresarACatalogo() {
    setProductoSeleccionado(null);
  }

  return (
    <div className="catalogo">
      <BtnsCategoria onCategoriaChange={manejarCambioCategoria} />

      {productoSeleccionado ? (
        <DetalleProducto
          producto={productoSeleccionado}
          onVolver={regresarACatalogo}
        />
      ) : (
        <div className="catalogo-productos">
          <div className="catalog1">
            {categories[Productos].slice(0, 3).map((producto, index) => (
              <PropProducto
                key={index}
                producto={producto}
                onClick={() => seleccionarProducto(producto)}
              />
            ))}
          </div>
          <div className="catalog1 cat">
            {categories[Productos].slice(3, 6).map((producto, index) => (
              <PropProducto
                key={index + 3}
                producto={producto}
                onClick={() => seleccionarProducto(producto)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;

