import './tarjetita.css';

function Tarjetita({ icon, nombre, parrafo }) {
  return (
    <div className="tarjetita">
      <ion-icon name={icon}></ion-icon>
      <h1>{nombre}</h1>
      <p>{parrafo}</p>
    </div>
  );
}

export default Tarjetita;