import "./comp-producto.css";

function CompProducto({imagen,nombre}){
    return(
        <div className="producto">
            <img src={imagen} alt={nombre} />
            <h1>{nombre}</h1>
        </div>
    )
}

export default CompProducto;