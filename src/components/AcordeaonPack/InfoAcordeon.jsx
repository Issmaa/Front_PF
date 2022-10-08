import AcordeonPack from "./AcordeonPack";
import React from "react";
export default function Manolo({ packInfo }) {
  return (
    <div className="container-general">
      {packInfo &&
        packInfo?.map((e) => (
          <AcordeonPack
            img={e.img}
            name={e.name}
            pais={e.pais}
            fecha={e.fechaI}
            fechaV={e.fechaV}
            hotel={e.hotel}
            vuelos={e.vuelos}
            servicios={e.servicios}
            actividades={e.actividades}
            costo={e.costo}
          />
        ))}
    </div>
  );
}
