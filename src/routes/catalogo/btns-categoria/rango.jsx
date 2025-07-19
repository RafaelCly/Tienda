import React, { useState } from 'react';
import './btn-categoria.css';

function RangoPrecio() {
  const [valor, setValor] = useState(25); // valor inicial

  const manejarCambio = (e) => {
    setValor(e.target.value);
  };

  return (
    <div className='rango-precio'>
      <h2>Precio máximo:</h2>
      <input
        type="range"
        min="0"
        max="50"
        step="1"
        value={valor}
        onChange={manejarCambio}
      />
      <p>Valor seleccionado: S/ {valor}</p>
    </div>
  );
}

export default RangoPrecio;
