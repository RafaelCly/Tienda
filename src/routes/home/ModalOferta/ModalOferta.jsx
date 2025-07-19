import './ModalOferta.css';

const ModalOferta = ({ producto, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="btn-cerrar" onClick={onClose}>✖</button>
        <img src={producto.imagen} alt={producto.nombre} className="modal-img" />
        <h2>{producto.nombre}</h2>
        <p className="modal-precio">Precio desde: S/ {producto.precio}</p>
        <div className="cantidad">
          <button>-</button>
          <input type="text" value={1} readOnly />
          <button>+</button>
        </div>
        <button className="btn-agregar">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ModalOferta;
