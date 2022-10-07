import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./PagePack.css";
import { useEffect, useState } from "react";
import { getPacks } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Manolo from "../../components/AcordeaonPack/InfoAcordeon";
import PaginationPack from "../../components/PaginadoPack/PaginadoPack";
import data from "../../dataPacks.json";
import BodyPack from "../../components/BodyPack/BodyPack";
import { filtradoPorCosto } from "../../redux/actions";

export default function PaginaPaquete() {
  const dispatch = useDispatch();
  const paquetes = useSelector((state) => state.packs);
  const [currentPage, setCurrentPage] = useState(1);
  const [packPerPage, resultsPorPagina] = useState(4);
  const indiceUltimo = currentPage * packPerPage;
  const indicePrimero = indiceUltimo - packPerPage;
  let infoPacks = paquetes.slice(indicePrimero, indiceUltimo);
  let myData = data.slice(indicePrimero, indiceUltimo);
  const [renderPage, setRenderPage] = useState();

  useEffect(() => {
    dispatch(getPacks());
  }, [dispatch]);

  /*Cambio de pagina*/
  function pagina(pageNumber) {
    return setCurrentPage(pageNumber);
  }
  /*Filtrado*/
  function handleFiltradoPorCosto(e) {
    e.preventDefault();
    dispatch(filtradoPorCosto(e.target.value));
    setRenderPage(e.target.value);
  }

  const nextPage = () => {
    if (currentPage + 1 <= Math.ceil(data.length / packPerPage)) {
      return setCurrentPage(currentPage + 1);
    } else {
      return setCurrentPage(currentPage);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      return setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container-principal-pack">
      <NavBar />
      <BodyPack />
      <div className="container-pack">
        <div>
          <select>
            <option>Ciudad</option>
          </select>
          <select
            id="valorFiltroCosto"
            autoComplete="off"
            className="selectFiltros"
            onChange={(e) => handleFiltradoPorCosto(e)}
          >
            <option>Precio</option>
            <option value="caro">Mas caro</option>
            <option value="barato">Mas barato</option>
          </select>
        </div>
        <Manolo packInfo={myData} />
      </div>
      <PaginationPack
        packPerPage={packPerPage}
        paquetes={paquetes.length}
        pagina={pagina}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Footer />
    </div>
  );
}
