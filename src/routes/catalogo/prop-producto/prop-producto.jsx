import "./prop-producto.css";

function PropProducto({ producto, onClick }) {
  return (
    <div className="catalogo-producto" onClick={onClick}>
      <img src={producto.image} alt={producto.name} />
      <h2>{producto.name}</h2>
      <p>Precio: ${producto.precio.toFixed(2)}</p>
      <button className="btn-agregar">Agregar al carrito</button>
    </div>
  );
}

export default PropProducto;
