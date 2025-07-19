import "./btn-categoria.css";
import RangoPrecio from "./rango.jsx";
import React from 'react';

const BtnsCategoria = ({ onCategoriaChange }) => {
  return (
    <div className="categoriass">
      <h1 className="titulo-categoria">Categorías</h1>
      <div className="btn-categoria">
        <button onClick={() => onCategoriaChange("panes")} className="btn">Panes</button>
        <button onClick={() => onCategoriaChange("helados")} className="btn">Helados</button>
        <button onClick={() => onCategoriaChange("cervezas")} className="btn">Cervezas</button>
        <button onClick={() => onCategoriaChange("galletas")} className="btn">Galletas</button>
        <button onClick={() => onCategoriaChange("embutidos")} className="btn">Embutidos</button>
        <button onClick={() => onCategoriaChange("dulces")} className="btnf">Dulces</button>
      </div>
      <RangoPrecio />
    </div>
  );
};

export default BtnsCategoria;
