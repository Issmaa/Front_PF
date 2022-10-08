import "./Acordeon.css";
import React from "react";
export default function AcordeonPack({
  name,
  img,
  pais,
  fecha,
  fechaV,
  vuelos,
  hotel,
  actividades,
  servicios,
  costo,
}) {
  return (
    <div>
      <a href="#" className="container-total-pack">
        <img className="imgPacks" src={img}></img>
        <div className="informacion-pack">
          <h3>
            {pais}, {name}. Fecha: {fecha} al {fechaV} {costo}
          </h3>
          <p>Compañia aerea: {vuelos} </p>
          <p>Hotel: {hotel}</p>
          <p>Actividades: {actividades}</p>
          <p>Servicios: {servicios}</p>
        </div>
      </a>
    </div>
  );
}
