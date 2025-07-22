import React, { useState } from "react";
import "./DetalleProducto.css";

function DetalleProducto({ producto, onVolver }) {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  return (
    <div className="detalle-container">
      <button className="volver-btn" onClick={onVolver}>← Volver</button>
      <div className="detalle-card">
        <img src={producto.image} alt={producto.name} />
        <h2>{producto.name}</h2>
        <p>Precio unitario: ${producto.precio.toFixed(2)}</p>

        <div className="cantidad-control">
          <button onClick={disminuir}>-</button>
          <span>{cantidad}</span>
          <button onClick={aumentar}>+</button>
        </div>

        <p>Total: ${(producto.precio * cantidad).toFixed(2)}</p>
        <button className="btn-agregar">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default DetalleProducto;
