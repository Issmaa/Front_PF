import React from "react";
import s from "./CardInformation.module.css";
import { Link } from "react-router-dom";


export default function CardInformation({ img, name, country }) {



  return (
    <div className={s.mainContainer}>
      <div className={s.container}>
        <div className={s.imgContainer}>
          <h2 id={s.country}>{country || "Argentina"}</h2>
          <img src={img || "https://www.cordobaturismo.gov.ar/wp-content/uploads/2020/10/R%C3%ADo-en-La-Cumbrecita.jpg"} alt={country} />
        </div>
        <div className={s.infoContainer}>
          <div className={s.loreContainer}>
            <h1>{name || "Cordoba"}</h1>
            <div className={s.lore}>
              <p>
                loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdalorem
              </p>
            </div>
            <div className={s.elseContainer}>
              <div id={s.act} className={s.actContainer}>
                <h2>● Actividades</h2>
                <div className={s.actsContainer}>
                  <div className={s.acts}>
                    <p>Correr</p>
                    <img src="https://www.interpatagonia.com/paseos/rafting_alu/rafting-alumine-3.jpg" alt='paseo1'/>
                    <div id={s.actLorem}>
                      <p>
                        loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasd
                      </p>
                    </div>
                  </div>
                  <div className={s.acts}>
                    <p>Montañismo</p>
                    <img src="https://www.interpatagonia.com/paseos/rafting_alu/rafting-alumine-3.jpg" alt='paseo2'/>
                    <div id={s.actLorem}>
                      <p>
                        loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasd
                      </p>
                    </div>
                  </div>
                  <div className={s.acts}>
                    <p>Rafting</p>
                    <img src="https://www.interpatagonia.com/paseos/rafting_alu/rafting-alumine-3.jpg" alt='paseo3'/>
                    <div id={s.actLorem}>
                      <p>
                        loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasd
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/excursiones">Ver Todos las Actividades</Link>
              </div>
              <div id={s.hot} className={s.actContainer}>
                <h2>★ Hoteles</h2>
                <div className={s.actsContainer}>
                  <div className={s.acts}>
                    <p>Hotel San Bernardo</p>
                    <img src="https://content.r9cdn.net/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg" alt='hotel1'/>
                    <div id={s.actLorem}>
                      <p>
                        loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasd
                      </p>
                    </div>
                  </div>
                  <div className={s.acts}>
                    <p>Hotel Hilton</p>
                    <img src="https://content.r9cdn.net/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg" alt='hotel2'/>
                    <div id={s.actLorem}>
                      <p>
                        loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasd
                      </p>
                    </div>
                  </div>
                  <div className={s.acts}>
                    <p>Hotel Don Patricio</p>
                    <img src="https://content.r9cdn.net/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg"alt='hotel3' />
                    <div id={s.actLorem}>
                      <p>
                        loremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasdaloremdsasd
                      </p>
                  <div className={s.hotelInfo}>
                    <div className={s.imgHotelContainer}>
                    </div>
                    <div className={s.hotelTxtContainer}>
                    </div>
                  </div>
                </div>
                <Link to='/hotels'>Ver Todos los Hoteles</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
