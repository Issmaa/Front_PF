import React from "react";
import s from "./PaginadoPack.module.css";

function PaginationPack({ packPerPage, paquetes, pagina, nextPage, prevPage }) {
  let totalResultPage = 0;
  if (paquetes) totalResultPage = paquetes;
  const numeroDePaginas = [];
  for (let i = 1; i <= Math.ceil(paquetes / packPerPage); i++) {
    numeroDePaginas.push(i);
  }
  return (
    <nav className="mx-4">
      <ul className={s.paginationContainer}>
        <li>
          <button onClick={prevPage} className={s.btnPagination}>
            Prev
          </button>
        </li>
        {numeroDePaginas?.slice(0, 3).map((num) => (
          <li key={num} className="page-item">
            <button
              onClick={() => pagina(num)}
              className={s.btnPagination}
              value={num}
            >
              {num}
            </button>
          </li>
        ))}
        <li>
          <button onClick={nextPage} className={s.btnPagination}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationPack;
