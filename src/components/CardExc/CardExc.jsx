import "./CardExc.css";
export default function CardExcursion({ excursionesInfo }) {
  console.log(excursionesInfo);
  return (
    <div className="container-general">
      {excursionesInfo.map((e) => {
        return (
          <div className="container-general">
            <div
              className={
                e.id % 2 === 0 ? "container-exc-izq" : "container-exc-der"
              }
            >
              <div className="container-text">
                <div className="tittle-exc">
                  <h1>{e.name}</h1>
                </div>
                <div className="DesciptionExc">
                  <h5>{e.info}</h5>
                  <p>Fecha de inicioo: {e.fechaI}</p>
                  <p>Fecha de finalizacion: {e.fechaF}</p>
                  <p>Dificultad: {e.dificultad}</p>
                </div>
              </div>
              <img className="imgExc" src={e.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
